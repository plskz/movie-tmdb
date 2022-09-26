import type { NextPage } from 'next';
import Link from 'next/link';
import { UIEvent, useState } from 'react';

// Fetch hook
import { useFetchMovies } from '@hooks';

// Config
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from '@utils';

// Components
import Card from '@components/Card';
import Grid from '@components/Grid';
import Header from '@components/Header';
import Hero from '@components/Hero';
import Spinner from '@components/Spinner';

const Home: NextPage = () => {
  const [query, setQuery] = useState('');
  const { data, fetchNextPage, isLoading, isFetching, error } =
    useFetchMovies(query);

  const handleScroll = (e: UIEvent<HTMLElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollHeight - Math.ceil(scrollTop) === clientHeight) fetchNextPage();
  };

  if (error) return <div>Oh noooo something went wrong!</div>;

  return (
    <div
      className='relative h-screen overflow-y-scroll'
      onScroll={handleScroll}
    >
      <Header setQuery={setQuery} />
      {!query && data && data.pages && (
        <Hero
          imgUrl={
            data.pages[0].results[0]?.backdrop_path
              ? IMAGE_BASE_URL +
                BACKDROP_SIZE +
                data.pages[0].results[0].backdrop_path
              : '/no_image.jpg'
          }
          title={data.pages[0].results[0].title || 'No Title'}
          text={data.pages[0].results[0].overview || 'No Overview'}
        />
      )}
      <Grid
        className='p-4 max-w-7xl m-auto'
        title={
          query
            ? `Search Results: ${data?.pages[0].total_results}`
            : 'Popular Movies'
        }
      >
        {data &&
          data.pages &&
          data.pages.map((page) =>
            page.results.map((movie) => (
              <Link key={movie.id} href={`/movie/${movie.id}`}>
                <div className='cursor-pointer hover:opacity-80 hover:duration-300'>
                  <Card
                    title={movie.title}
                    imgUrl={
                      movie.poster_path
                        ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                        : '/no_image.jpg'
                    }
                  />
                </div>
              </Link>
            ))
          )}
      </Grid>
      {isLoading || isFetching ? <Spinner /> : null}
    </div>
  );
};

export default Home;
