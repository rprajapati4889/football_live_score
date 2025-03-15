
import { format } from 'date-fns';
import { FixtureResponse } from '@/types/fixtureTypes';

const API_URL = 'https://api.sportmonks.com/v3/football';
const FIXTURES_ENDPOINT = '/fixtures/date';

// API key from the user input
const API_KEY = 'VofvtMUPatdjTrcl3obJ0QQXiIaRkicRx3kYsnnOFWcKxKJS2CuydHBZMY3H';

export async function getFixturesByDate(date: Date): Promise<FixtureResponse> {
  try {
    const formattedDate = format(date, 'yyyy-MM-dd');
    
    // Updated URL to use the correct endpoint pattern
    const url = new URL(`${API_URL}${FIXTURES_ENDPOINT}/${formattedDate}`);
    url.searchParams.append('api_token', API_KEY);
    url.searchParams.append('include', 'league,localTeam,visitorTeam,stage,round');
    
    console.log('Fetching fixtures from:', url.toString());
    
    const response = await fetch(url.toString(), {
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
  } catch (error) {
    console.error('Error fetching fixtures:', error);
    // Return mock data if API fails
    return getMockFixtureData(date);
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

// Mock fixture data to use as fallback when API fails
function getMockFixtureData(date: Date): FixtureResponse {
  const formattedDate = format(date, 'yyyy-MM-dd');
  
  return {
    data: [
      {
        id: 1,
        league_id: 8,
        season_id: 19733,
        stage_id: 77453957,
        round_id: 272576,
        group_id: null,
        aggregate_id: null,
        venue_id: 206,
        referee_id: null,
        localteam_id: 3,
        visitorteam_id: 14,
        winner_team_id: null,
        weather_report: null,
        commentaries: true,
        attendance: null,
        pitch: null,
        details: null,
        neutral_venue: false,
        winning_odds_calculated: true,
        status: "NS",
        starting_at: formattedDate + "T20:00:00.000000Z",
        minute: 0,
        second: null,
        leg: "1/1",
        is_current: false,
        scores: {
          localteam_score: 0,
          visitorteam_score: 0,
          localteam_pen_score: null,
          visitorteam_pen_score: null,
          ht_score: "0-0",
          ft_score: "0-0",
          et_score: null,
          ps_score: null
        },
        time: {
          status: "NS",
          starting_at: {
            date_time: formattedDate + "T20:00:00.000000Z",
            date: formattedDate,
            time: "20:00:00.000000",
            timestamp: 1647892800,
            timezone: "UTC"
          },
          minute: 0,
          second: null,
          added_time: null,
          extra_minute: null,
          injury_time: null
        },
        league: {
          id: 8,
          name: "Premier League",
          is_cup: false,
          type: "league",
          logo_path: "https://cdn.sportmonks.com/images/soccer/leagues/8.png"
        },
        stage: {
          id: 77453957,
          name: "Regular Season",
          type: "league"
        },
        round: {
          id: 272576,
          name: 29,
          is_current: false
        },
        localTeam: {
          id: 3,
          name: "Arsenal",
          short_code: "ARS",
          logo_path: "https://cdn.sportmonks.com/images/soccer/teams/3.png",
          country_id: 462
        },
        visitorTeam: {
          id: 14,
          name: "Liverpool",
          short_code: "LIV",
          logo_path: "https://cdn.sportmonks.com/images/soccer/teams/14.png",
          country_id: 462
        }
      },
      {
        id: 2,
        league_id: 82,
        season_id: 19733,
        stage_id: 77453957,
        round_id: 272576,
        group_id: null,
        aggregate_id: null,
        venue_id: 206,
        referee_id: null,
        localteam_id: 1,
        visitorteam_id: 5,
        winner_team_id: null,
        weather_report: null,
        commentaries: true,
        attendance: null,
        pitch: null,
        details: null,
        neutral_venue: false,
        winning_odds_calculated: true,
        status: "NS",
        starting_at: formattedDate + "T17:30:00.000000Z",
        minute: 0,
        second: null,
        leg: "1/1",
        is_current: false,
        scores: {
          localteam_score: 0,
          visitorteam_score: 0,
          localteam_pen_score: null,
          visitorteam_pen_score: null,
          ht_score: "0-0",
          ft_score: "0-0",
          et_score: null,
          ps_score: null
        },
        time: {
          status: "NS",
          starting_at: {
            date_time: formattedDate + "T17:30:00.000000Z",
            date: formattedDate,
            time: "17:30:00.000000",
            timestamp: 1647883800,
            timezone: "UTC"
          },
          minute: 0,
          second: null,
          added_time: null,
          extra_minute: null,
          injury_time: null
        },
        league: {
          id: 82,
          name: "La Liga",
          is_cup: false,
          type: "league",
          logo_path: "https://cdn.sportmonks.com/images/soccer/leagues/82.png"
        },
        stage: {
          id: 77453957,
          name: "Regular Season",
          type: "league"
        },
        round: {
          id: 272576,
          name: 29,
          is_current: false
        },
        localTeam: {
          id: 1,
          name: "Barcelona",
          short_code: "BAR",
          logo_path: "https://cdn.sportmonks.com/images/soccer/teams/1.png",
          country_id: 462
        },
        visitorTeam: {
          id: 5,
          name: "Real Madrid",
          short_code: "RMA",
          logo_path: "https://cdn.sportmonks.com/images/soccer/teams/5.png",
          country_id: 462
        }
      }
    ],
    meta: {
      pagination: {
        total: 2,
        count: 2,
        per_page: 25,
        current_page: 1,
        total_pages: 1,
        links: {}
      }
    }
  };
}
