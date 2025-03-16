
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
  // First news item is displayed as featured (larger)
  const featuredNews = news[0];
  const remainingNews = news.slice(1);

  return (
    <div className="bg-brand-dark-gray rounded-lg overflow-hidden">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-lg font-semibold text-white">Trending News</h2>
        <ChevronRight size={20} className="text-brand-yellow" />
      </div>
      
      {/* Featured News Item */}
      {featuredNews && (
        <div className="relative mb-4">
          <div className="w-full h-48 overflow-hidden">
            <img 
              src={featuredNews.image} 
              alt={featuredNews.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-white font-medium line-clamp-2">{featuredNews.title}</h3>
                <p className="text-xs text-gray-400 mt-1">{featuredNews.date}</p>
              </div>
              <div className="ml-2 text-brand-yellow">
                <Bookmark size={18} className="transform -rotate-0" />
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Remaining News Items */}
      <div className="px-4 pb-4 space-y-4">
        {remainingNews.map((item) => (
          <div key={item.id} className="flex gap-3">
            <div className="flex-shrink-0 w-20 h-16 overflow-hidden rounded">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium text-white line-clamp-2">{item.title}</h3>
              <p className="text-xs text-gray-400 mt-1">{item.date}</p>
            </div>
            <div className="flex-shrink-0 text-brand-yellow">
              <Bookmark size={18} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingNews;
