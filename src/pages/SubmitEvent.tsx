
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EventForm from "@/components/EventForm";
import Navbar from "@/components/Navbar";

const SubmitEvent = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container max-w-screen-xl py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Submit an Event</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Share tech events from your college or university
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="manual" className="mb-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="manual">Manual Submission</TabsTrigger>
              <TabsTrigger value="bulk">Website URL</TabsTrigger>
            </TabsList>
            <TabsContent value="manual" className="mt-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                  Fill out the form below to submit a new event. All fields marked with an asterisk (*) are required.
                </p>
                <EventForm />
              </div>
            </TabsContent>
            <TabsContent value="bulk" className="mt-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                <div className="text-center py-10 px-6">
                  <h3 className="text-xl font-semibold mb-4">Website URL Submission</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    This feature allows you to submit a college website URL to automatically scrape and import events.
                    <br />
                    <span className="text-sm italic">
                      Currently in development. Please use manual submission for now.
                    </span>
                  </p>
                  <div className="pt-4">
                    <div className="h-16 w-full max-w-md mx-auto bg-gray-100 dark:bg-gray-700 rounded-md flex items-center justify-center text-gray-400 dark:text-gray-500">
                      Coming Soon
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
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

export default SubmitEvent;
