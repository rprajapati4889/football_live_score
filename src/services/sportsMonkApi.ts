import { format } from 'date-fns';
import { FixtureResponse } from '@/types/fixtureTypes';
import axios from 'axios';

export async function getFixturesByDate(date: Date): Promise<FixtureResponse> {
  const formattedDate = format(date, 'yyyy-MM-dd');

  try {
    const response = await axios.get(`/api/fixtures/date/${formattedDate}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    });

    // Check if we have valid data
    if (!response.data || !Array.isArray(response.data.data)) {
      console.warn('Invalid API response structure:', response.data);
      return {
        data: [],
        meta: {
          pagination: {
            total: 0,
            count: 0,
            per_page: 0,
            current_page: 1,
            total_pages: 1,
            links: {}
          }
        }
      };
    }

    // Transform the data to match our expected structure
    const transformedData = {
      data: (response.data.data || []).map((fixture: any) => ({
        id: fixture?.id || 0,
        league_id: fixture?.league_id || 0,
        season_id: fixture?.season_id || 0,
        stage_id: fixture?.stage_id || 0,
        round_id: fixture?.round_id || 0,
        group_id: fixture?.group_id || null,
        aggregate_id: fixture?.aggregate_id || null,
        venue_id: fixture?.venue_id || 0,
        status: fixture?.state_id?.toString() || 'scheduled',
        starting_at: fixture?.starting_at || new Date().toISOString(),
        scores: {
          localteam_score: 0,
          visitorteam_score: 0,
          ht_score: '0-0',
          ft_score: '0-0',
          et_score: null,
          ps_score: null
        },
        time: {
          status: 'NS', // Not Started
          starting_at: {
            date_time: fixture?.starting_at || new Date().toISOString(),
            date: format(new Date(fixture?.starting_at || new Date()), 'yyyy-MM-dd'),
            time: format(new Date(fixture?.starting_at || new Date()), 'HH:mm:ss'),
            timestamp: fixture?.starting_at_timestamp || Math.floor(Date.now() / 1000),
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
          },
          minute: 0,
          second: null,
          added_time: null,
          extra_minute: null,
          injury_time: null
        },
        league: {
          id: fixture?.league_id || 0,
          name: fixture?.name?.split(' vs ')?.[0]?.split(' ')?.[0] || 'Unknown League',
          is_cup: false,
          type: 'league',
          logo_path: ''
        },
        localTeam: {
          id: fixture?.id || 0,
          name: fixture?.name?.split(' vs ')?.[0]?.trim() || 'Home Team',
          short_code: (fixture?.name?.split(' vs ')?.[0]?.trim()?.substring(0, 3) || 'HOME').toUpperCase(),
          logo_path: '',
          country_id: 0
        },
        visitorTeam: {
          id: (fixture?.id || 0) + 1,
          name: fixture?.name?.split(' vs ')?.[1]?.trim() || 'Away Team',
          short_code: (fixture?.name?.split(' vs ')?.[1]?.trim()?.substring(0, 3) || 'AWAY').toUpperCase(),
          logo_path: '',
          country_id: 0
        }
      })),
      meta: {
        pagination: {
          total: response.data.data?.length || 0,
          count: response.data.data?.length || 0,
          per_page: response.data.data?.length || 0,
          current_page: 1,
          total_pages: 1,
          links: {}
        }
      }
    };

    console.log('Transformed Data:', transformedData);
    return transformedData;
  } catch (error: any) {
    console.error('API error:', error.response?.data || error.message);
    // Return empty data structure instead of throwing
    return {
      data: [],
      meta: {
        pagination: {
          total: 0,
          count: 0,
          per_page: 0,
          current_page: 1,
          total_pages: 1,
          links: {}
        }
      }
    };
  }
}

// Mock function for trending news (since it's not part of the API)
export const getTrendingNews = async (): Promise<any[]> => {
  // In a real app, this would fetch from an API
  return [
    {
      id: 1,
      title: "Results And Scores From The Premier League...!!!",
      image: "/uploads/Rectangle_11.png",
      date: "11 hours Ago",
    },
    {
      id: 2,
      title: "Here Are The Top 100 Players And Managers",
      image: "/uploads/Rectangle_12.png",
      date: "10 Oct 2023, 09:00 AM",
    },
    {
      id: 3,
      title: "Results And Scores From The Premier League...!!!",
      image: "/uploads/Rectangle_13.png",
      date: "10 Oct 2023, 09:00 PM",
    },
    {
      id: 4,
      title: "Join Or Start A Competition Now!",
      image: "/uploads/Rectangle_14.png",
      date: "10 Oct 2023, 02:40 PM",
    },
    {
      id: 5,
      title: "Results And Scores From The Premier League...!!!",
      image: "/uploads/Rectangle_15.png",
      date: "09 Oct 2023, 08:12 AM",
    },
    {
      id: 6,
      title: "Results And Scores From The Premier League...!!!",
      image: "/uploads/Rectangle_16.png",
      date: "09 Oct 2023, 02:12 AM",
    },
  ];
};
