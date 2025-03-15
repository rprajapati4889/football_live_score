import { format } from 'date-fns';
import { FixtureResponse } from '@/types/fixtureTypes';
import axios from 'axios';

const API_URL = 'https://api.sportmonks.com/v3/football';
const FIXTURES_ENDPOINT = '/fixtures/date';

// API key from the user input
const API_KEY = 'VofvtMUPatdjTrcl3obJ0QQXiIaRkicRx3kYsnnOFWcKxKJS2CuydHBZMY3H';

export async function getFixturesByDate(date: Date): Promise<FixtureResponse> {
  const formattedDate = format(date, 'yyyy-MM-dd');

  const url = `${API_URL}${FIXTURES_ENDPOINT}/${formattedDate}`;

  try {
    console.log('Fetching fixtures from:', url);

    const { data } = await axios.get(url, {
      params: {
        api_token: API_KEY,
        // include: 'league,localTeam,visitorTeam,stage,round', // Uncomment if needed
      },
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    console.log('Fixtures data received:', data);
    return data;
  } catch (error) {
    console.error('API error:', error);
    // throw new Error(`API error: ${error}`);
  }

  
}

// Mock function for trending news (since it's not part of the API)
export const getTrendingNews = async (): Promise<any[]> => {
  // In a real app, this would fetch from an API
  return [
    {
      id: 1,
      title: "Results And Scores From The Premier League...!!!",
      image: "/lovable-uploads/cb6b0329-ad7c-4a17-923c-e0efa7112e01.png",
      date: "11 hours Ago",
    },
    {
      id: 2,
      title: "Here Are The Top 100 Players And Managers",
      image: "/lovable-uploads/cb6b0329-ad7c-4a17-923c-e0efa7112e01.png",
      date: "10 Oct 2023, 09:00 AM",
    },
    {
      id: 3,
      title: "Results And Scores From The Premier League...!!!",
      image: "/lovable-uploads/cb6b0329-ad7c-4a17-923c-e0efa7112e01.png",
      date: "10 Oct 2023, 09:00 PM",
    },
    {
      id: 4,
      title: "Join Or Start A Competition Now!",
      image: "/lovable-uploads/cb6b0329-ad7c-4a17-923c-e0efa7112e01.png",
      date: "10 Oct 2023, 02:40 PM",
    },
    {
      id: 5,
      title: "Results And Scores From The Premier League...!!!",
      image: "/lovable-uploads/cb6b0329-ad7c-4a17-923c-e0efa7112e01.png",
      date: "09 Oct 2023, 08:12 AM",
    },
  ];
};
