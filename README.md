# Travel Wishlist Tutorial

## Purpose

You will build a small Travel Wishlist while learning the frontend-to-backend workflow used in Girls Dream Code projects.

The starter template runs before you make any changes, but the important application features are intentionally unfinished. During the tutorial, you will create the Xano data and endpoints, build and validate a form, send and retrieve destinations, display the results, and practice the GitHub workflow.

## Tech stack

- React for building the user interface
- TypeScript for describing data and catching mistakes
- Vite for running and building the project
- Tailwind CSS and shadcn/ui for styling and reusable UI
- React Router for page routing
- TanStack Query for managing data from Xano
- React Hook Form and Zod for forms and validation
- Xano for the database and API
- Git and GitHub for version control and collaboration

This project uses the browser's native `fetch()` API. It does not need Axios, Redux, GraphQL, Next.js, Docker, a separate backend server, or an authentication library.

## Before starting

You will need to install and have access to the following:

- Node.js 20.19 or newer
- npm (included with Node.js)
- Git
- GitHub access
- Xano access

Verify the command-line tools in the Visual Studio Code terminal:

```bash
node --version
npm --version
git --version
```

## Getting started

```bash
git clone <repository-url>
cd <repository-name>
npm install
npm run dev
```

Vite will print a localhost URL, usually `http://localhost:5173`. Open that URL in your browser. Keep the terminal running while you work, and press `Ctrl+C` when you want to stop the development server.

## Environment setup

Copy `.env.example` to a new file named `.env`:

```text
.env.example → .env
```

Later in the tutorial, add your Xano API base URL after `VITE_XANO_BASE_URL=` in `.env`. Do not commit `.env`, API keys, passwords, tokens, or other secrets. Vite exposes variables beginning with `VITE_` to browser code, so they must never contain secrets.

## Starter structure

```text
src/
├── components/
│   ├── ui/
│   │   └── card.tsx
│   └── DestinationForm.tsx
├── pages/
│   └── TravelWishlist.tsx
├── lib/
│   ├── api.ts
│   └── utils.ts
├── types/
│   └── destination.ts
├── App.tsx
├── main.tsx
└── index.css
```

- `components/` contains reusable parts of the interface.
- `pages/` contains complete screens connected to routes.
- `lib/api.ts` is the shared home for future Xano requests.
- `lib/utils.ts` contains the class-name helper used by shadcn/ui.
- `types/` describes the shape of shared application data.

Read the TODO comments in the starter code before editing. They identify the steps that the group will complete together. Also review [CODING_STANDARDS.md](./CODING_STANDARDS.md) before starting feature work.

## Useful commands

```bash
npm run dev       # Start the local development server
```

## Tutorial learning goals

By the end of the tutorial, you will learn:

1. How a React + TypeScript project is structured
2. How to run an application locally
3. How React communicates with an API
4. How to create and test data in Xano
5. How GET requests retrieve data
6. How POST requests create data
7. How TanStack Query manages backend data
8. How forms work with React Hook Form and Zod
9. How to stage, commit, and push code using Git and GitHub
10. How the frontend, API, and database work together

## What you will build during onboarding

The starter deliberately does **not** include the finished feature. You will:

- Create the Xano destination table and sample records
- Create `GET /destination` and `POST /destination` endpoints
- Build the city and country form fields
- Add required-field validation with React Hook Form and Zod
- Retrieve destinations with a TanStack Query query
- Submit destinations with a TanStack Query mutation
- Refetch the list after a successful submission
- Display loading, error, empty, and success states
- Stage, commit, and push your work on a feature branch

Never put confidential participant information in this project or in an AI tool.
