
import React from 'react';
import { format } from 'date-fns';
import { Fixture } from '@/types/fixtureTypes';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface FixturesListProps {
  fixtures: Fixture[];
  isLoading: boolean;
  error: Error | null;
}

const FixturesList: React.FC<FixturesListProps> = ({ fixtures, isLoading, error }) => {
  if (isLoading) {
    return <div className="text-center p-8">Loading fixtures...</div>;
  }

  if (error) {
    return <div className="text-center p-8 text-red-500">Error loading fixtures: {error.message}</div>;
  }

  if (!fixtures || fixtures.length === 0) {
    return <div className="text-center p-8">No fixtures found for this date.</div>;
  }

  // Group fixtures by league
  const fixturesByLeague = fixtures.reduce((acc, fixture) => {
    const leagueId = fixture.league.id;
    if (!acc[leagueId]) {
      acc[leagueId] = {
        league: fixture.league,
        fixtures: []
      };
    }
    acc[leagueId].fixtures.push(fixture);
    return acc;
  }, {} as Record<number, { league: Fixture['league'], fixtures: Fixture[] }>);

  return (
    <div className="space-y-4 mt-4">
      <div className="flex justify-between items-center">
        <div className="relative w-64">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input 
            type="search" 
            placeholder="Search for Matches" 
            className="pl-8 bg-[#2D2D2D] border-none text-white" 
          />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-40 bg-[#2D2D2D] border-none text-white">
            <SelectValue placeholder="All Matches" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Matches</SelectItem>
            <SelectItem value="live">Live Matches</SelectItem>
            <SelectItem value="upcoming">Upcoming</SelectItem>
            <SelectItem value="finished">Finished</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {Object.values(fixturesByLeague).map(({ league, fixtures }) => (
        <div key={league.id} className="bg-brand-dark-gray rounded-md overflow-hidden">
          <div className="bg-black p-3 flex items-center gap-2">
            {league.logo_path && (
              <img src={league.logo_path} alt={league.name} className="w-6 h-6 rounded-full" />
            )}
            <span className="font-medium">{league.name}</span>
            <span className="text-xs text-gray-400 ml-2">( Quarter Finals )</span>
          </div>

          <div className="divide-y divide-gray-800">
            {fixtures.map((fixture) => (
              <div key={fixture.id} className="p-3 flex justify-between items-center">
                <div className="w-16 text-sm text-gray-400">
                  {format(new Date(fixture.time.starting_at.date_time), 'HH:mm')}
                </div>
                
                <div className="flex-1 grid grid-cols-3 items-center">
                  <div className="flex items-center justify-end gap-2">
                    <span className="text-right">{fixture.localTeam.name}</span>
                    <img src={fixture.localTeam.logo_path} alt={fixture.localTeam.name} className="w-6 h-6" />
                  </div>
                  
                  <div className="text-center flex items-center justify-center gap-2">
                    <span className="font-semibold">{fixture.scores.localteam_score}</span>
                    <span className="text-xs text-gray-400">-</span>
                    <span className="font-semibold">{fixture.scores.visitorteam_score}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <img src={fixture.visitorTeam.logo_path} alt={fixture.visitorTeam.name} className="w-6 h-6" />
                    <span>{fixture.visitorTeam.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FixturesList;
