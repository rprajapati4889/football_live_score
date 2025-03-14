
import React from 'react';
import { ChevronRight, Bookmark } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  image: string;
  date: string;
}

interface TrendingNewsProps {
  news: NewsItem[];
}

const TrendingNews: React.FC<TrendingNewsProps> = ({ news }) => {
  return (
    <div className="bg-brand-dark-gray rounded-lg overflow-hidden">
      <div className="flex justify-between items-center p-4 border-b border-gray-800">
        <h2 className="text-lg font-semibold">Trending News</h2>
        <ChevronRight size={20} />
      </div>
      
      <div className="p-4 space-y-4">
        {news.map((item) => (
          <div key={item.id} className="flex gap-3">
            <div className="flex-shrink-0 w-20 h-16 overflow-hidden rounded">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium line-clamp-2">{item.title}</h3>
              <p className="text-xs text-gray-400 mt-1">{item.date}</p>
            </div>
            <button className="flex-shrink-0 text-brand-yellow">
              <Bookmark size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingNews;
