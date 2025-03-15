
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getFixturesByDate, getTrendingNews } from '@/services/sportsMonkApi';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import DateSelector from '@/components/fixtures/DateSelector';
import FixturesList from '@/components/fixtures/FixturesList';
import FixturesHeader from '@/components/fixtures/FixturesHeader';
import TrendingNews from '@/components/news/TrendingNews';
import MobileSidebar from '@/components/layout/MobileSidebar';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Fetch fixtures for the selected date with improved error handling
  const {
    data: fixturesData,
    isLoading,
    error,
    refetch,
    isError
  } = useQuery({
    queryKey: ['fixtures', selectedDate.toISOString().split('T')[0]],
    queryFn: () => getFixturesByDate(selectedDate),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
    meta: {
      errorHandler: (err: Error) => {
        console.error('Query error:', err);
        toast({
          title: 'Error',
          description: `Failed to load fixtures: ${err.message}`,
          variant: 'destructive',
        });
      }
    },
    // React Query v5+ uses onSettled, onSuccess, or onError callbacks
    onError: (err: Error) => {
      console.error('Query error:', err);
      toast({
        title: 'Error',
        description: `Failed to load fixtures: ${err.message}`,
        variant: 'destructive',
      });
    }
  });

  // Fetch trending news
  const { data: newsData } = useQuery({
    queryKey: ['trending-news'],
    queryFn: getTrendingNews,
    staleTime: 30 * 60 * 1000, // 30 minutes
  });

  // Handle date change
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  // Use empty array if no fixture data
  const fixtures = fixturesData?.data || [];

  return (
    <div className="flex min-h-screen bg-brand-black text-white overflow-hidden">
      {/* Desktop sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        <main className="flex-1 overflow-y-auto pb-20 lg:pb-0">
          {/* Mobile header with menu */}
          <div className="flex items-center gap-2 lg:hidden p-4">
            <MobileSidebar />
            <h1 className="text-xl font-bold">
              <span className="text-white">FOOTBALL</span>
              <span className="text-brand-yellow">SHURU</span>
            </h1>
          </div>
          
          {/* Main content */}
          <div className="p-4">
            <Header />
            
            <FixturesHeader />
            
            <DateSelector
              selectedDate={selectedDate}
              onDateChange={handleDateChange}
            />
            
            <div className="mt-4">
              <FixturesList
                fixtures={fixtures}
                isLoading={isLoading}
                error={error as Error}
              />
            </div>
          </div>
        </main>
        
        {/* News sidebar */}
        <aside className="w-full lg:w-[320px] p-4 bg-brand-dark-gray/50 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Trending News</h2>
            <button className="text-brand-yellow">›</button>
          </div>
          {newsData && <TrendingNews news={newsData} />}
        </aside>
      </div>
    </div>
  );
};

export default Index;
