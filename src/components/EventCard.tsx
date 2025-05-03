
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Event } from "@/types";
import { Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const { id, title, description, date, location, college, type, image, isVirtual } = event;
  
  const eventTypeColors: Record<string, string> = {
    hackathon: "bg-event-hackathon",
    workshop: "bg-event-workshop",
    techtalk: "bg-event-techtalk",
    networking: "bg-event-networking",
    career: "bg-event-career",
  };

  const formatEventDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, "MMM d, yyyy h:mm a");
  };

  const truncateDescription = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <Link to={`/events/${id}`}>
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-md hover:border-purple-200">
        <div className="relative h-48 overflow-hidden">
          {image ? (
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-purple-400 to-purple-600" />
          )}
          <Badge 
            className={`absolute top-3 right-3 ${eventTypeColors[type] || "bg-secondary"} text-white`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Badge>
        </div>
        <CardContent className="p-4">
          <div className="mb-2">
            <span className="text-xs font-medium text-purple-600">{college}</span>
          </div>
          <h3 className="text-lg font-bold mb-2 line-clamp-2">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
            {truncateDescription(description)}
          </p>
          <div className="flex items-center text-xs text-gray-500 mb-2">
            <Calendar className="h-3.5 w-3.5 mr-1" />
            <span>{formatEventDate(date)}</span>
          </div>
          <div className="flex items-center text-xs text-gray-500">
            <MapPin className="h-3.5 w-3.5 mr-1" />
            <span>{isVirtual ? "Virtual Event" : location}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default EventCard;
