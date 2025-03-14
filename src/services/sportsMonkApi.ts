import { format } from 'date-fns';
import { FixtureResponse } from '@/types/fixtureTypes';

const API_URL = 'https://api.sportmonks.com/v3/football';
const FIXTURES_ENDPOINT = '/fixtures';

// Updated with the provided API key
const API_KEY = 'VofvtMUPatdjTrcl3obJ0QQXiIaRkicRx3kYsnnOFWcKxKJS2CuydHBZMY3H';

export async function getFixturesByDate(date: Date): Promise<FixtureResponse> {
  const formattedDate = format(date, 'yyyy-MM-dd');
  
  const url = new URL(`${API_URL}${FIXTURES_ENDPOINT}`);
  url.searchParams.append('api_token', API_KEY);
  url.searchParams.append('filters', `date:${formattedDate}`);
  url.searchParams.append('include', 'league,localTeam,visitorTeam,stage,round');
  
  const response = await fetch(url.toString());
  
  if (!response.ok) {
    throw new Error(`Failed to fetch fixtures: ${response.statusText}`);
  }
  
  return response.json();
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
