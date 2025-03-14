
export interface FixtureResponse {
  data: Fixture[];
  meta: Meta;
}

export interface Meta {
  pagination: {
    total: number;
    count: number;
    per_page: number;
    current_page: number;
    total_pages: number;
    links: Record<string, string>;
  };
}

export interface Fixture {
  id: number;
  league_id: number;
  season_id: number;
  stage_id: number;
  round_id: number;
  group_id: number | null;
  aggregate_id: number | null;
  venue_id: number;
  referee_id: number | null;
  localteam_id: number;
  visitorteam_id: number;
  winner_team_id: number | null;
  weather_report: any;
  commentaries: boolean;
  attendance: number | null;
  pitch: any;
  details: any;
  neutral_venue: boolean;
  winning_odds_calculated: boolean;
  status: string;
  starting_at: string;
  minute: number;
  second: number | null;
  leg: string;
  is_current: boolean;
  scores: Scores;
  time: Time;
  league: League;
  stage: Stage;
  round: Round;
  localTeam: Team;
  visitorTeam: Team;
}

export interface Scores {
  localteam_score: number;
  visitorteam_score: number;
  localteam_pen_score: number | null;
  visitorteam_pen_score: number | null;
  ht_score: string;
  ft_score: string;
  et_score: string | null;
  ps_score: string | null;
}

export interface Time {
  status: string;
  starting_at: FixtureTime;
  minute: number;
  second: number | null;
  added_time: number | null;
  extra_minute: number | null;
  injury_time: number | null;
}

export interface FixtureTime {
  date_time: string;
  date: string;
  time: string;
  timestamp: number;
  timezone: string;
}

export interface League {
  id: number;
  name: string;
  is_cup: boolean;
  type: string;
  logo_path: string;
}

export interface Stage {
  id: number;
  name: string;
  type: string;
}

export interface Round {
  id: number;
  name: number;
  is_current: boolean;
}

export interface Team {
  id: number;
  name: string;
  short_code: string;
  logo_path: string;
  country_id: number;
}

export interface TrendingNews {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
}
