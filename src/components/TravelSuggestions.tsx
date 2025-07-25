import React, { useState } from 'react';
import DestinationCard from './DestinationCard';
import DestinationDetails from './DestinationDetails';

// Import destination images
import pragueImg from '@/assets/prague.jpg';
import budapestImg from '@/assets/budapest.jpg';
import krakowImg from '@/assets/krakow.jpg';
import lisbonImg from '@/assets/lisbon.jpg';
import barcelonaImg from '@/assets/barcelona.jpg';
import amsterdamImg from '@/assets/amsterdam.jpg';
import tokyoImg from '@/assets/tokyo.jpg';
import newyorkImg from '@/assets/newyork.jpg';
import sydneyImg from '@/assets/sydney.jpg';
import maldivesImg from '@/assets/maldives.jpg';
import swissalpsImg from '@/assets/swissalps.jpg';
import santoriniImg from '@/assets/santorini.jpg';

interface TravelSuggestionsProps {
  budget: number;
  startDate?: Date;
  endDate?: Date;
  people: number;
}

const TravelSuggestions: React.FC<TravelSuggestionsProps> = ({ budget, startDate, endDate, people }) => {
  const [selectedDestination, setSelectedDestination] = useState<any>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const getDuration = () => {
    if (startDate && endDate) {
      const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return `${diffDays} days`;
    }
    return '7 days';
  };

  const getSuggestions = () => {
    const duration = getDuration();
    // Adjust budget based on number of people
    const totalBudget = budget * people;
    
    if (totalBudget < 500) {
      return [
        {
          id: '1',
          name: 'Prague',
          country: 'Czech Republic',
          image: pragueImg,
          description: 'Explore historic castles, beautiful architecture, and enjoy affordable dining in this magical European city.',
          estimatedCost: Math.round(totalBudget * 0.8),
          rating: 4.6,
          duration,
          highlights: ['Prague Castle', 'Charles Bridge', 'Old Town Square', 'Local Cuisine']
        },
        {
          id: '2',
          name: 'Budapest',
          country: 'Hungary',
          image: budapestImg,
          description: 'Discover thermal baths, stunning parliament buildings, and vibrant nightlife on a budget.',
          estimatedCost: Math.round(totalBudget * 0.7),
          rating: 4.5,
          duration,
          highlights: ['Thermal Baths', 'Parliament Building', 'Danube River', 'Ruin Bars']
        },
        {
          id: '3',
          name: 'Krakow',
          country: 'Poland',
          image: krakowImg,
          description: 'Medieval charm meets modern culture in this UNESCO World Heritage city.',
          estimatedCost: Math.round(totalBudget * 0.6),
          rating: 4.7,
          duration,
          highlights: ['Main Market Square', 'Wawel Castle', 'Jewish Quarter', 'Salt Mine']
        }
      ];
    } else if (totalBudget < 1500) {
      return [
        {
          id: '4',
          name: 'Lisbon',
          country: 'Portugal',
          image: lisbonImg,
          description: 'Colorful neighborhoods, delicious pastries, and stunning coastal views await in this vibrant capital.',
          estimatedCost: Math.round(totalBudget * 0.9),
          rating: 4.8,
          duration,
          highlights: ['Alfama District', 'Tram 28', 'Belém Tower', 'Pastéis de Nata']
        },
        {
          id: '5',
          name: 'Barcelona',
          country: 'Spain',
          image: barcelonaImg,
          description: 'Art, architecture, beaches, and amazing food come together in this Mediterranean paradise.',
          estimatedCost: Math.round(totalBudget * 0.85),
          rating: 4.7,
          duration,
          highlights: ['Sagrada Familia', 'Park Güell', 'Las Ramblas', 'Gothic Quarter']
        },
        {
          id: '6',
          name: 'Amsterdam',
          country: 'Netherlands',
          image: amsterdamImg,
          description: 'Canals, museums, and a unique culture make this one of Europe\'s most charming cities.',
          estimatedCost: Math.round(totalBudget * 0.95),
          rating: 4.6,
          duration,
          highlights: ['Van Gogh Museum', 'Anne Frank House', 'Canal Cruise', 'Vondelpark']
        }
      ];
    } else if (totalBudget < 3000) {
      return [
        {
          id: '7',
          name: 'Tokyo',
          country: 'Japan',
          image: tokyoImg,
          description: 'Where ancient traditions meet cutting-edge technology in the world\'s most fascinating metropolis.',
          estimatedCost: Math.round(totalBudget * 0.9),
          rating: 4.9,
          duration,
          highlights: ['Shibuya Crossing', 'Senso-ji Temple', 'Tsukiji Market', 'Mount Fuji']
        },
        {
          id: '8',
          name: 'New York',
          country: 'United States',
          image: newyorkImg,
          description: 'The city that never sleeps offers world-class museums, Broadway shows, and iconic landmarks.',
          estimatedCost: Math.round(totalBudget * 0.85),
          rating: 4.7,
          duration,
          highlights: ['Central Park', 'Statue of Liberty', 'Times Square', 'Brooklyn Bridge']
        },
        {
          id: '9',
          name: 'Sydney',
          country: 'Australia',
          image: sydneyImg,
          description: 'Stunning harbor views, beautiful beaches, and a laid-back lifestyle in Australia\'s most iconic city.',
          estimatedCost: Math.round(totalBudget * 0.95),
          rating: 4.8,
          duration,
          highlights: ['Opera House', 'Harbour Bridge', 'Bondi Beach', 'Blue Mountains']
        }
      ];
    } else {
      return [
        {
          id: '10',
          name: 'Maldives',
          country: 'Maldives',
          image: maldivesImg,
          description: 'Luxury overwater bungalows and pristine beaches in this tropical paradise.',
          estimatedCost: Math.round(totalBudget * 0.9),
          rating: 4.9,
          duration,
          highlights: ['Overwater Villas', 'Snorkeling', 'Spa Treatments', 'Sunset Dining']
        },
        {
          id: '11',
          name: 'Swiss Alps',
          country: 'Switzerland',
          image: swissalpsImg,
          description: 'Breathtaking mountain views, luxury resorts, and world-class skiing in the heart of Europe.',
          estimatedCost: Math.round(totalBudget * 0.85),
          rating: 4.8,
          duration,
          highlights: ['Matterhorn', 'Jungfrau', 'Luxury Resorts', 'Alpine Villages']
        },
        {
          id: '12',
          name: 'Santorini',
          country: 'Greece',
          image: santoriniImg,
          description: 'Iconic white buildings, stunning sunsets, and luxury accommodations overlooking the Aegean Sea.',
          estimatedCost: Math.round(totalBudget * 0.8),
          rating: 4.9,
          duration,
          highlights: ['Oia Sunset', 'Wine Tasting', 'Luxury Hotels', 'Volcanic Beaches']
        }
      ];
    }
  };

  const suggestions = getSuggestions();

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Perfect Destinations for You</h2>
        <p className="text-muted-foreground">
          Based on your budget of ${budget} per person ({people} {people === 1 ? 'traveler' : 'travelers'}) for {getDuration()}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {suggestions.map((destination) => (
          <DestinationCard 
            key={destination.id} 
            destination={destination}
            onViewDetails={() => {
              setSelectedDestination(destination);
              setIsDetailsOpen(true);
            }}
          />
        ))}
      </div>

      {selectedDestination && (
        <DestinationDetails
          destination={selectedDestination}
          budget={budget}
          people={people}
          isOpen={isDetailsOpen}
          onClose={() => {
            setIsDetailsOpen(false);
            setSelectedDestination(null);
          }}
        />
      )}
    </div>
  );
};

export default TravelSuggestions;