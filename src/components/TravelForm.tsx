import React, { useState } from 'react';
import { CalendarDays, DollarSign, Search, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface TravelFormProps {
  onSearch: (data: {
    startDate: Date | undefined;
    endDate: Date | undefined;
    budget: number;
    people: number;
  }) => void;
}

const TravelForm: React.FC<TravelFormProps> = ({ onSearch }) => {
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [budget, setBudget] = useState<string>('1000');
  const [people, setPeople] = useState<number>(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ startDate, endDate, budget: Number(budget), people });
  };

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBudget(value);
  };

  const handleBudgetFocus = () => {
    if (budget === '1000') {
      setBudget('');
    }
  };

  const handleBudgetBlur = () => {
    if (budget === '') {
      setBudget('1000');
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-card">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Plan Your Dream Trip</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Departure Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !startDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarDays className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, "PPP") : "Select start date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent 
                  className="w-auto p-0 z-50 shadow-lg border-2" 
                  align="start"
                  sideOffset={8}
                >
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={(date) => {
                      setStartDate(date);
                      // If end date is before new start date, clear it
                      if (endDate && date && endDate < date) {
                        setEndDate(undefined);
                      }
                    }}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    fixedWeeks
                    showOutsideDays={false}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label>Return Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !endDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarDays className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "PPP") : "Select end date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent 
                  className="w-auto p-0 z-50 shadow-lg border-2" 
                  align="start"
                  sideOffset={8}
                >
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                    disabled={(date) => date < (startDate || new Date())}
                    month={startDate ? startDate : undefined}
                    initialFocus
                    fixedWeeks
                    showOutsideDays={false}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium">Budget per Person (USD)</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  value={budget}
                  onChange={handleBudgetChange}
                  onFocus={handleBudgetFocus}
                  onBlur={handleBudgetBlur}
                  className="pl-10 h-12 text-lg font-medium border-2 focus:border-primary/50 transition-colors"
                  placeholder="Enter budget per person"
                  pattern="[0-9]*"
                  inputMode="numeric"
                />
                <div className="mt-1 text-xs text-muted-foreground">
                  Total budget: ${Number(budget) * people}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Number of Travelers</Label>
              <div className="relative">
                <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  type="number"
                  value={people}
                  onChange={(e) => setPeople(Number(e.target.value))}
                  className="pl-10 h-12 text-lg font-medium border-2 focus:border-primary/50 transition-colors"
                  min="1"
                  max="20"
                  placeholder="How many travelers?"
                />
              </div>
            </div>
          </div>

          <Button type="submit" variant="travel" size="lg" className="w-full">
            <Search className="mr-2 h-4 w-4" />
            Find My Perfect Trip
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default TravelForm;