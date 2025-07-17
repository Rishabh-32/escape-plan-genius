import React, { useState } from 'react';
import { Plane, Globe } from 'lucide-react';
import TravelForm from '@/components/TravelForm';
import TravelSuggestions from '@/components/TravelSuggestions';
import heroImage from '@/assets/hero-travel.jpg';

const Index = () => {
  const [searchData, setSearchData] = useState<{
    startDate: Date | undefined;
    endDate: Date | undefined;
    budget: number;
  } | null>(null);

  const handleSearch = (data: { startDate: Date | undefined; endDate: Date | undefined; budget: number }) => {
    setSearchData(data);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Globe className="h-12 w-12 mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold">WanderLust</h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Discover your next adventure. Tell us your dates and budget, and we'll find the perfect destination for you.
          </p>
          <div className="flex items-center justify-center">
            <Plane className="h-6 w-6 mr-2" />
            <span className="text-lg">Your journey begins here</span>
          </div>
        </div>
      </div>

      {/* Search Form Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <TravelForm onSearch={handleSearch} />
        </div>
      </div>

      {/* Results Section */}
      {searchData && (
        <div className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <TravelSuggestions 
              budget={searchData.budget}
              startDate={searchData.startDate}
              endDate={searchData.endDate}
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Globe className="h-6 w-6 mr-2" />
            <span className="text-xl font-semibold">WanderLust</span>
          </div>
          <p className="opacity-90">Making travel dreams come true, one adventure at a time.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
