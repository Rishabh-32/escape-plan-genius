import React from 'react';
import { MapPin, Calendar, DollarSign, Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface DestinationCardProps {
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
  onViewDetails?: () => void;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination, onViewDetails }) => {
  return (
    <Card className="overflow-hidden hover:shadow-travel transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
            <Star className="mr-1 h-3 w-3 fill-current text-yellow-500" />
            {destination.rating}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold">{destination.name}</h3>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="mr-1 h-4 w-4" />
              <span className="text-sm">{destination.country}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center text-primary font-semibold">
              <DollarSign className="h-4 w-4" />
              <span>${destination.estimatedCost}</span>
            </div>
            <div className="flex items-center text-muted-foreground text-sm">
              <Calendar className="mr-1 h-3 w-3" />
              <span>{destination.duration}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-muted-foreground text-sm">{destination.description}</p>
        
        <div className="space-y-2">
          <h4 className="font-medium text-sm">Highlights:</h4>
          <div className="flex flex-wrap gap-2">
            {destination.highlights.map((highlight, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {highlight}
              </Badge>
            ))}
          </div>
        </div>
        
        <Button 
          variant="sunset" 
          className="w-full" 
          onClick={onViewDetails}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;