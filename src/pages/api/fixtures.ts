import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { format } from 'date-fns';

const API_URL = 'https://api.sportmonks.com/v3/football';
const FIXTURES_ENDPOINT = '/fixtures/date';
const API_KEY = 'VofvtMUPatdjTrcl3obJ0QQXiIaRkicRx3kYsnnOFWcKxKJS2CuydHBZMY3H';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { date } = req.query;
    
    if (!date || typeof date !== 'string') {
      return res.status(400).json({ message: 'Date parameter is required' });
    }

    const url = `${API_URL}${FIXTURES_ENDPOINT}/${date}`;

    const { data } = await axios.get(url, {
      params: {
        api_token: API_KEY,
      },
      headers: {
        Accept: "application/json",
      },
    });

    console.log('data::::',data);
    

    return res.status(200).json(data);
  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
} 