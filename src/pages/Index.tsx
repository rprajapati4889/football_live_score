
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getFixturesByDate, getTrendingNews } from '@/services/sportsMonkApi';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import DateSelector from '@/components/fixtures/DateSelector';
import FixturesList from '@/components/fixtures/FixturesList';
import TrendingNews from '@/components/news/TrendingNews';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Fetch fixtures for the selected date with fixed error handling
  const {
    data: fixturesData,
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ['fixtures', selectedDate.toISOString().split('T')[0]],
    queryFn: () => getFixturesByDate(selectedDate),
    staleTime: 5 * 60 * 1000, // 5 minutes
    meta: {
      onError: (err: Error) => {
        toast({
          title: 'Error',
          description: `Failed to load fixtures: ${err.message}`,
          variant: 'destructive',
        });
      }
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

  return (
    <div className="flex h-screen bg-brand-black text-white overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex overflow-hidden">
        <main className="flex-1 overflow-y-auto p-6">
          <Header />
          
          <DateSelector
            selectedDate={selectedDate}
            onDateChange={handleDateChange}
          />
          
          <FixturesList
            fixtures={fixturesData?.data || []}
            isLoading={isLoading}
            error={error as Error}
          />
        </main>
        
        <aside className="w-[320px] p-6 overflow-y-auto">
          {newsData && <TrendingNews news={newsData} />}
        </aside>
      </div>
    </div>
  );
};

export default Index;
