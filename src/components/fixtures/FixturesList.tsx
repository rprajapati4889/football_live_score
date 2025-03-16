
import React from 'react';
import { format } from 'date-fns';
import { Fixture } from '@/types/fixtureTypes';
import { ReloadIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';

interface FixturesListProps {
  fixtures: Fixture[];
  isLoading: boolean;
  error: Error | null;
  onRetry?: () => void;
}

const FixturesList: React.FC<FixturesListProps> = ({ fixtures, isLoading, error, onRetry }) => {
  if (isLoading) {
    return (
      <div className="text-center p-8">
        <ReloadIcon className="animate-spin h-8 w-8 mx-auto mb-4" />
        <p>Loading fixtures...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8">
        <div className="text-red-500 mb-4">Error loading fixtures: {error.message}</div>
        {onRetry && (
          <Button onClick={onRetry} variant="outline">
            Try Again
          </Button>
        )}
      </div>
    );
  }

  if (!fixtures || fixtures.length === 0) {
    return (
      <div className="text-center p-8 bg-brand-dark-gray rounded-md">
        <p className="mb-4">No fixtures found for this date.</p>
        <p className="text-sm text-gray-400">Try selecting a different date.</p>
      </div>
    );
  }

  // Group fixtures by league
  const fixturesByLeague = fixtures.reduce((acc, fixture) => {
    const leagueId = fixture.league_id;
    if (!leagueId) return acc;
  
    if (!acc[leagueId]) {
      acc[leagueId] = {
        league: { 
          id: leagueId, 
          name: fixture.league?.name || `League ${leagueId}`, 
          logo_path: fixture.league?.logo_path || "" 
        },
        fixtures: [],
      };
    }
    acc[leagueId].fixtures.push(fixture);
    return acc;
  }, {} as Record<number, { league: { id: number, name: string, logo_path: string }, fixtures: Fixture[] }>);

  return (
    <div className="space-y-4 mt-4">
      {Object.values(fixturesByLeague).map(({ league, fixtures }) => (
        <div key={league.id} className="bg-brand-dark-gray rounded-md overflow-hidden">
          <div className="bg-black p-3 flex items-center gap-2">
            {league?.logo_path && (
              <img src={league.logo_path} alt={league?.name || 'League'} className="w-6 h-6 rounded-full" />
            )}
            <span className="font-medium">{league.name}</span>
            <span className="text-xs text-gray-400 ml-2">( Quarter Finals )</span>
          </div>

          <div className="divide-y divide-gray-800">
            {fixtures.map((fixture) => {
              const isLive = fixture.time.status === 'LIVE';
              return (
                <div key={fixture.id} className="p-3 flex justify-between items-center">
                  <div className="w-16 text-sm">
                    {isLive ? (
                      <span className="text-brand-yellow">Live</span>
                    ) : (
                      <span className="text-gray-400">
                        {format(new Date(fixture.time.starting_at.date_time), 'HH:mm')}
                      </span>
                    )}
                  </div>

                  <div className="flex-1 grid grid-cols-3 items-center">
                    <div className="flex items-center justify-end gap-2">
                      <span className="text-right">{fixture.localTeam.name}</span>
                      <img src={fixture.localTeam.logo_path || ''} alt={fixture.localTeam.name} className="w-6 h-6" />
                    </div>

                    <div className="text-center flex items-center justify-center gap-2">
                      <span className="font-semibold">{fixture.scores.localteam_score}</span>
                      <span className="text-xs text-gray-400">-</span>
                      <span className="font-semibold">{fixture.scores.visitorteam_score}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <img src={fixture.visitorTeam.logo_path || ''} alt={fixture.visitorTeam.name} className="w-6 h-6" />
                      <span>{fixture.visitorTeam.name}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FixturesList;
