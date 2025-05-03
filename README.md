
# College Event Aggregator Platform

A web application that aggregates tech events like hackathons, tech talks, and workshops from multiple college websites, allowing students to discover and submit events easily.

## 🚀 Features

- **Event Dashboard**: Browse upcoming tech events with comprehensive details
- **Advanced Filtering**: Search and filter events by date, type, college name, location, etc.
- **Event Submission**: Allow users to manually submit new events
- **Responsive Design**: Works on all devices, from mobile to desktop

## 🛠️ Technologies Used

- **React**: Frontend library for building user interfaces
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: For styling and responsive design
- **React Router**: For navigation and routing
- **Shadcn UI**: Component library for consistent design
- **React Hook Form**: For form handling and validation
- **Zod**: For schema validation

## 📝 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```sh
git clone https://github.com/your-username/college-event-aggregator.git
cd college-event-aggregator
```

2. Install dependencies:
```sh
npm install
# or
yarn install
```

3. Start the development server:
```sh
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:8080`

## 📚 Project Structure

```
src/
├── components/           # Reusable UI components
├── data/                 # Mock data for events
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── pages/                # Application pages
├── types/                # TypeScript type definitions
├── App.tsx               # Main application component
└── main.tsx              # Entry point
```

## 🔍 Features Explained

### Event Dashboard
The dashboard displays events in a card-based layout, showing key information such as event title, description, date, location, and type. Featured events are highlighted at the top.

### Event Filtering
Users can filter events using various criteria:
- Text search across titles, descriptions, and college names
- Event type (hackathon, workshop, tech talk, etc.)
- College/university
- Location
- Date range

### Event Submission
The submission form allows users to add new events with the following information:
- Event title and description
- Date and time
- Location (physical or virtual)
- College/university
- Event type
- Event website/registration link
- Optional image URL

### Future Improvements
- User authentication for event submission
- Event bookmarking and calendar integration
- Automated event scraping from college websites
- Email notifications for upcoming events
- Admin panel for content moderation

## 📱 Responsive Design
The application is fully responsive and optimized for all device sizes:
- Mobile: Single column layout
- Tablet: Two-column layout for event cards
- Desktop: Three-column layout with additional features

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements
- [Shadcn UI](https://ui.shadcn.com/) for beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Lucide Icons](https://lucide.dev/) for the icon set
- [date-fns](https://date-fns.org/) for date formatting
