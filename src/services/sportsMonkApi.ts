
import { format } from 'date-fns';
import { FixtureResponse } from '@/types/fixtureTypes';

const API_URL = 'https://api.sportmonks.com/v3/football';
const FIXTURES_ENDPOINT = '/fixtures/date';
const CORS_PROXY = 'https://corsproxy.io/?';

// API key from the user input
const API_KEY = 'VofvtMUPatdjTrcl3obJ0QQXiIaRkicRx3kYsnnOFWcKxKJS2CuydHBZMY3H';

export async function getFixturesByDate(date: Date): Promise<FixtureResponse> {
  const formattedDate = format(date, 'yyyy-MM-dd');
  
  // Updated URL to use the correct endpoint pattern
  const apiUrl = `${API_URL}${FIXTURES_ENDPOINT}/${formattedDate}`;
  const url = new URL(CORS_PROXY + encodeURIComponent(apiUrl));
  
  // Add query parameters to the URL
  const params = new URLSearchParams();
  params.append('api_token', API_KEY);
  params.append('include', 'league,localTeam,visitorTeam,stage,round');
  
  const fullUrl = `${url.toString()}&${params.toString()}`;
  console.log('Fetching fixtures from:', fullUrl);
  
  const response = await fetch(fullUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });
  
  if (!response.ok) {
    console.error('API error:', response.status, response.statusText);
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }
  
  const data = await response.json();
  console.log('Fixtures data received:', data);
  return data;
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
