// Utils
import { basicFetch, POPULAR_BASE_URL, SEARCH_BASE_URL } from '@utils';
// Types
import type { Movies } from '@types';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Movies>
) {
  const { page, search } = req.query; // grab search params

  const endpoint = search
    ? `${SEARCH_BASE_URL}${search}&page=${page}`
    : `${POPULAR_BASE_URL}&page=${page}`;

  const data = await basicFetch<Movies>(endpoint);

  res.status(200).json(data);
}
