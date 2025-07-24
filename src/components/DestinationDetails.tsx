import React from 'react';
import { X, MapPin, Calendar, DollarSign, Clock, Users, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface DestinationDetailsProps {
  destination: {
    id: string;
    name: string;
    country: string;
    image: string;
    description: string;
    estimatedCost: number;
    rating: number;
    duration: string;
    highlights: string[];
  };
  budget: number;
  people: number;
  isOpen: boolean;
  onClose: () => void;
}

const DestinationDetails: React.FC<DestinationDetailsProps> = ({ 
  destination, 
  budget, 
  people, 
  isOpen, 
  onClose 
}) => {
  const getItinerary = () => {
    const totalBudget = budget * people;
    
    if (totalBudget < 500) {
      // Budget itinerary
      return [
        { day: 1, title: "Arrival & City Center", activities: ["Check into budget hotel", "Walking tour of old town", "Local market visit", "Traditional dinner"] },
        { day: 2, title: "Cultural Exploration", activities: ["Free museum day", "Historic sites visit", "Street food lunch", "Local neighborhood walk"] },
        { day: 3, title: "Nature & Relaxation", activities: ["Public park visit", "Picnic lunch", "Free outdoor activities", "Local café evening"] },
        { day: 4, title: "Local Experience", activities: ["Community market", "Cultural center visit", "Traditional cooking class", "Local transport tour"] },
        { day: 5, title: "Final Exploration", activities: ["Last-minute shopping", "Photo walk", "Local restaurant", "Departure preparation"] }
      ];
    } else if (totalBudget < 1500) {
      // Mid-range itinerary
      return [
        { day: 1, title: "Arrival & Comfort", activities: ["Check into 3-star hotel", "Guided city tour", "Welcome dinner at local restaurant", "Evening stroll"] },
        { day: 2, title: "Cultural Immersion", activities: ["Museum visits", "Art gallery tour", "Traditional lunch", "Local shopping district"] },
        { day: 3, title: "Adventure Day", activities: ["Day trip excursion", "Scenic viewpoints", "Outdoor activities", "Regional cuisine dinner"] },
        { day: 4, title: "Relaxation & Leisure", activities: ["Spa or wellness activity", "Leisure shopping", "Café culture experience", "Cultural show or performance"] },
        { day: 5, title: "Memorable Finale", activities: ["Special attraction visit", "Souvenir shopping", "Farewell dinner", "Airport transfer"] }
      ];
    } else if (totalBudget < 3000) {
      // Premium itinerary
      return [
        { day: 1, title: "Luxury Arrival", activities: ["5-star hotel check-in", "Private transfer", "Fine dining welcome dinner", "Concierge tour planning"] },
        { day: 2, title: "Exclusive Experiences", activities: ["Private guided tours", "VIP museum access", "Michelin-starred lunch", "Premium shopping"] },
        { day: 3, title: "Adventure & Luxury", activities: ["Private excursion", "Helicopter or boat tour", "Exclusive restaurant", "Premium spa treatment"] },
        { day: 4, title: "Cultural Excellence", activities: ["Private art tours", "Exclusive tastings", "Cultural performances", "Rooftop dining"] },
        { day: 5, title: "Grand Finale", activities: ["Final luxury experiences", "Personal shopping assistance", "Celebration dinner", "Premium departure"] }
      ];
    } else {
      // Ultra-luxury itinerary
      return [
        { day: 1, title: "Royal Welcome", activities: ["Presidential suite check-in", "Private jet/yacht arrival", "Chef's table dinner", "Personal butler service"] },
        { day: 2, title: "Exclusive Access", activities: ["Private museum tours", "Celebrity chef experiences", "Exclusive venues", "Personal shopping service"] },
        { day: 3, title: "Ultimate Adventure", activities: ["Private helicopter tours", "Exclusive access experiences", "World-class dining", "Luxury spa treatments"] },
        { day: 4, title: "Bespoke Experiences", activities: ["Custom cultural experiences", "Private performances", "Exclusive tastings", "Luxury yacht/jet experiences"] },
        { day: 5, title: "Unforgettable Farewell", activities: ["Final exclusive experiences", "Custom souvenir creation", "Celebrity chef farewell", "Royal departure"] }
      ];
    }
  };

  const getAccommodation = () => {
    const totalBudget = budget * people;
    
    if (totalBudget < 500) {
      return {
        type: "Budget Hotels & Hostels",
        features: ["Clean shared/private rooms", "Basic amenities", "Central locations", "Breakfast included"],
        priceRange: "$20-50/night"
      };
    } else if (totalBudget < 1500) {
      return {
        type: "3-4 Star Hotels",
        features: ["Private rooms with en-suite", "Hotel amenities", "Room service", "Concierge service"],
        priceRange: "$80-150/night"
      };
    } else if (totalBudget < 3000) {
      return {
        type: "5-Star Luxury Hotels",
        features: ["Luxury suites", "Spa services", "Fine dining", "Premium locations"],
        priceRange: "$300-600/night"
      };
    } else {
      return {
        type: "Ultra-Luxury Resorts",
        features: ["Presidential suites", "Butler service", "Private amenities", "Exclusive experiences"],
        priceRange: "$1000+/night"
      };
    }
  };

  const itinerary = getItinerary();
  const accommodation = getAccommodation();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <MapPin className="h-6 w-6" />
            {destination.name}, {destination.country}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Hero Image */}
          <div className="relative h-64 rounded-lg overflow-hidden">
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4">
              <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                ⭐ {destination.rating}
              </Badge>
            </div>
          </div>

          {/* Trip Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="h-5 w-5" />
                Trip Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <DollarSign className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="font-semibold">${destination.estimatedCost}</div>
                <div className="text-sm text-muted-foreground">Total Cost</div>
              </div>
              <div className="text-center">
                <Calendar className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="font-semibold">{destination.duration}</div>
                <div className="text-sm text-muted-foreground">Duration</div>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="font-semibold">{people} {people === 1 ? 'Person' : 'People'}</div>
                <div className="text-sm text-muted-foreground">Travelers</div>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="font-semibold">${budget}/person</div>
                <div className="text-sm text-muted-foreground">Per Person</div>
              </div>
            </CardContent>
          </Card>

          {/* Accommodation */}
          <Card>
            <CardHeader>
              <CardTitle>Accommodation</CardTitle>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold mb-2">{accommodation.type}</h4>
              <p className="text-muted-foreground mb-3">{accommodation.priceRange}</p>
              <div className="grid grid-cols-2 gap-2">
                {accommodation.features.map((feature, index) => (
                  <Badge key={index} variant="outline" className="justify-start">
                    {feature}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Detailed Itinerary */}
          <Card>
            <CardHeader>
              <CardTitle>Detailed Itinerary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {itinerary.map((day) => (
                <div key={day.day} className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-primary">
                    Day {day.day}: {day.title}
                  </h4>
                  <ul className="space-y-1">
                    {day.activities.map((activity, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Highlights */}
          <Card>
            <CardHeader>
              <CardTitle>Highlights & Attractions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {destination.highlights.map((highlight, index) => (
                  <Badge key={index} variant="secondary" className="justify-start">
                    {highlight}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button variant="travel" className="flex-1">
              Book This Trip
            </Button>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DestinationDetails;