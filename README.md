
# Football Score Website

A responsive football score website built with React, Shadcn components, and the SportsMonk API.

## Features

- View football fixtures by date
- Switch between different dates to see fixtures
- Trending news section
- Responsive design for all screen sizes

## Technologies Used

- React
- Tailwind CSS
- Shadcn UI components
- React Query for data fetching
- SportsMonk API for football data

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- SportsMonk API key

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Add your SportsMonk API key to `src/services/sportsMonkApi.ts`
4. Start the development server:
   ```
   npm run dev
   ```

## API Configuration

You need to add your SportsMonk API key to the application. Open `src/services/sportsMonkApi.ts` and replace `YOUR_SPORTSMONK_API_KEY` with your actual API key.

## Design Implementation

The design is implemented based on the provided Figma file, with the following key components:

- Sidebar with navigation
- Date selector for switching between different days
- Fixtures list organized by leagues
- Trending news section

## Responsive Design

The application is fully responsive and works well on:
- Mobile devices
- Tablets
- Desktop browsers

## License

MIT
