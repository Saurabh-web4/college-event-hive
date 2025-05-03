
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import { Event } from "@/types";
import { events } from "@/data/events";
import { Calendar, Link as LinkIcon, MapPin } from "lucide-react";
import { format } from "date-fns";

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [relatedEvents, setRelatedEvents] = useState<Event[]>([]);
  
  useEffect(() => {
    const currentEvent = events.find((e) => e.id === id);
    
    if (currentEvent) {
      setEvent(currentEvent);
      
      // Find related events (same type or same college)
      const related = events
        .filter((e) => 
          e.id !== currentEvent.id && 
          (e.type === currentEvent.type || e.college === currentEvent.college)
        )
        .slice(0, 3);
        
      setRelatedEvents(related);
    }
  }, [id]);

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Event not found</h2>
          <Link to="/events">
            <Button>Back to Events</Button>
          </Link>
        </div>
      </div>
    );
  }

  const eventTypeColors: Record<string, string> = {
    hackathon: "bg-event-hackathon",
    workshop: "bg-event-workshop",
    techtalk: "bg-event-techtalk",
    networking: "bg-event-networking",
    career: "bg-event-career",
  };

  const formatEventDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, "EEEE, MMMM d, yyyy 'at' h:mm a");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Event Header */}
      <div className="relative">
        <div className="w-full h-64 md:h-80 bg-gradient-to-r from-purple-600 to-purple-400 relative overflow-hidden">
          {event.image && (
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover opacity-70"
            />
          )}
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </div>
        <div className="container max-w-screen-xl relative -mt-16 md:-mt-20">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
            <div className="mb-6">
              <Badge 
                className={`${eventTypeColors[event.type] || "bg-secondary"} text-white mb-2`}
              >
                {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
              </Badge>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{event.title}</h1>
              <p className="text-sm text-purple-600 dark:text-purple-400">{event.college}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-gray-500" />
                <div>
                  <div className="text-sm font-medium">Date & Time</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {formatEventDate(event.date)}
                    {event.endDate && (
                      <>
                        <br />
                        <span>to {formatEventDate(event.endDate)}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-gray-500" />
                <div>
                  <div className="text-sm font-medium">Location</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {event.isVirtual ? "Virtual Event" : event.location}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <LinkIcon className="h-5 w-5 mr-2 text-gray-500" />
                <div>
                  <div className="text-sm font-medium">Event Link</div>
                  <a 
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">About this event</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="whitespace-pre-line">{event.description}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={event.link} target="_blank" rel="noopener noreferrer">
                <Button 
                  className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white"
                >
                  Register for Event
                </Button>
              </a>
              <Link to="/events">
                <Button variant="outline">
                  Back to Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Events Section */}
      {relatedEvents.length > 0 && (
        <div className="container max-w-screen-xl py-16">
          <h2 className="text-2xl font-bold mb-6">Related Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedEvents.map((event) => (
              <Link to={`/events/${event.id}`} key={event.id}>
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden h-full hover:shadow-md transition-shadow">
                  <div className="p-4">
                    <Badge 
                      className={`${eventTypeColors[event.type] || "bg-secondary"} text-white mb-2`}
                    >
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </Badge>
                    <h3 className="font-semibold mb-2">{event.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{event.description}</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      <span>{format(new Date(event.date), "MMM d, yyyy")}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      
      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 mt-auto">
        <div className="container max-w-screen-xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 text-transparent bg-clip-text mb-2">
                CampusEvents
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Discover tech events across college campuses
              </p>
            </div>
            <div className="flex gap-8 text-sm">
              <Link to="/events" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                Events
              </Link>
              <Link to="/submit" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                Submit Event
              </Link>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 text-sm text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} CampusEvents. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EventDetail;
