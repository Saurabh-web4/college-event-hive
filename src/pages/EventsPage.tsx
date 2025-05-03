
import { useState, useMemo } from "react";
import EventCard from "@/components/EventCard";
import EventFiltersBar from "@/components/EventFilters";
import Navbar from "@/components/Navbar";
import { events } from "@/data/events";
import { EventFilters } from "@/types";

const EventsPage = () => {
  const [filters, setFilters] = useState<EventFilters>({
    search: "",
    type: "all",
    college: "",
    dateRange: {
      from: undefined,
      to: undefined,
    },
    location: "",
  });

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      // Search filter
      if (
        filters.search &&
        !event.title.toLowerCase().includes(filters.search.toLowerCase()) &&
        !event.description.toLowerCase().includes(filters.search.toLowerCase()) &&
        !event.college.toLowerCase().includes(filters.search.toLowerCase())
      ) {
        return false;
      }

      // Type filter
      if (filters.type !== "all" && event.type !== filters.type) {
        return false;
      }

      // College filter
      if (filters.college && event.college !== filters.college) {
        return false;
      }

      // Location filter
      if (filters.location && !event.location.includes(filters.location)) {
        return false;
      }

      // Date range filter
      const eventDate = new Date(event.date);
      
      if (filters.dateRange.from && eventDate < filters.dateRange.from) {
        return false;
      }

      if (filters.dateRange.to && eventDate > filters.dateRange.to) {
        return false;
      }

      return true;
    }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [filters]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container max-w-screen-xl py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">All Events</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Browse and discover tech events from universities across the country
          </p>
        </div>
        
        <EventFiltersBar filters={filters} setFilters={setFilters} />
        
        {filteredEvents.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold mb-2">No events found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Try adjusting your filters or search criteria
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
      
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
              <a href="/events" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                Events
              </a>
              <a href="/submit" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                Submit Event
              </a>
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

export default EventsPage;
