
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 text-transparent bg-clip-text">
            CampusEvents
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm ml-6">
          <Link to="/" className="font-medium transition-colors hover:text-purple-600">
            Home
          </Link>
          <Link to="/events" className="font-medium transition-colors hover:text-purple-600">
            All Events
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Link to="/submit">
            <Button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white">
              Submit Event
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
