# Neuronix Hello World

A simple Next.js 14 application demonstrating the use of TypeScript and Tailwind CSS with a clean, modern interface.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Interactive counter with increment, decrement, and reset functionality
- Responsive design with Tailwind CSS
- TypeScript for type safety
- Modern UI with gradient backgrounds and card-based layout
- Health check API endpoint at `/api/ping`

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React 18** - UI library

## Project Structure

```
neuronix-hello-world/
├── app/
│   ├── api/
│   │   └── ping/
│   │       └── route.ts    # Health check endpoint
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Home page component
├── .gitignore              # Git ignore rules
├── README.md               # Project documentation
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - learn about TypeScript.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS.
