
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import EventCard from "@/components/EventCard";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { events } from "@/data/events";

const Index = () => {
  const featuredEvents = events.filter(event => event.featured);
  const upcomingEvents = events
    .filter(event => new Date(event.date) > new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      <div className="container max-w-screen-xl py-16">
        {/* Featured Events Section */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Events</h2>
            <Link to="/events">
              <Button variant="outline" size="sm">
                View All Events
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
        
        {/* Upcoming Events Section */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Upcoming Events</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/events">
              <Button 
                className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white"
              >
                Explore All Events
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Statistics Section */}
      <div className="bg-purple-50 dark:bg-purple-900/10 py-16">
        <div className="container max-w-screen-xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Discover Tech Events Across Campuses</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Find the best tech events from top universities and colleges around the country.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Events</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Universities</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">5K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Students</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">20+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Event Types</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
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

export default Index;
