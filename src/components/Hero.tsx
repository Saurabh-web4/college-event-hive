
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-purple-50 to-transparent dark:from-purple-950/20" />
      <div className="container max-w-screen-xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Discover Tech Events
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-purple-400 text-transparent bg-clip-text">
                Across College Campuses
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              Find hackathons, workshops, tech talks, and networking events from top universities in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/events">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white">
                  Explore Events
                </Button>
              </Link>
              <Link to="/submit">
                <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                  Submit an Event
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -inset-10 bg-purple-100 rounded-full opacity-20 blur-3xl animate-pulse-soft" />
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 transform translate-y-6">
                    <div className="h-3 w-16 bg-purple-200 rounded mb-2"></div>
                    <div className="h-5 w-36 bg-purple-400 rounded mb-3"></div>
                    <div className="h-3 w-full bg-gray-100 dark:bg-gray-700 rounded mb-2"></div>
                    <div className="h-3 w-4/5 bg-gray-100 dark:bg-gray-700 rounded"></div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
                    <div className="h-3 w-20 bg-blue-200 rounded mb-2"></div>
                    <div className="h-5 w-40 bg-blue-400 rounded mb-3"></div>
                    <div className="h-3 w-full bg-gray-100 dark:bg-gray-700 rounded mb-2"></div>
                    <div className="h-3 w-4/5 bg-gray-100 dark:bg-gray-700 rounded"></div>
                  </div>
                </div>
                <div className="space-y-4 pt-10">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
                    <div className="h-3 w-12 bg-orange-200 rounded mb-2"></div>
                    <div className="h-5 w-32 bg-orange-400 rounded mb-3"></div>
                    <div className="h-3 w-full bg-gray-100 dark:bg-gray-700 rounded mb-2"></div>
                    <div className="h-3 w-4/5 bg-gray-100 dark:bg-gray-700 rounded"></div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
                    <div className="h-3 w-16 bg-green-200 rounded mb-2"></div>
                    <div className="h-5 w-36 bg-green-400 rounded mb-3"></div>
                    <div className="h-3 w-full bg-gray-100 dark:bg-gray-700 rounded mb-2"></div>
                    <div className="h-3 w-4/5 bg-gray-100 dark:bg-gray-700 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
