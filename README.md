# Personal Portfolio

Live demo: https://siyajaiswal.vercel.app

Overview
-
This repository contains a personal portfolio website built with a React + Vite frontend and an (optional) Express backend. The frontend (client) is a complete React app with Tailwind CSS and several components for Hero, About, Skills, Projects, Contact, Certificates, and more. The backend directory contains dependencies for an Express + Mongoose API, but server source files are currently empty—see the `server` notes below.

Repository structure
-
- `client/` — React + Vite frontend
	- `src/` — React components, pages, assets
	- `package.json` — frontend dependencies & scripts (`npm run dev`)
	- Tailwind CSS configured in `tailwind.config.js`
- `server/` — backend (Express, Mongoose)
	- `package.json` lists dependencies (`express`, `mongoose`, `cors`, `dotenv`) but `server.js` and other server files are currently empty placeholders.

Technologies
-
- Frontend: React 19, Vite, Tailwind CSS, React Icons, Framer Motion, Lottie
- Backend: Node.js, Express, Mongoose (dependencies present)
- Deployment: Vercel (frontend), Render/Vercel/Heroku (backend)

Run the frontend locally
-
1. Install dependencies and start the dev server:

```bash
cd client
npm install
npm run dev
```

2. Open the app in your browser at `http://localhost:5173` (Vite will print the exact URL).

Backend notes
-
- The `server/package.json` lists `express`, `mongoose`, `cors`, and `dotenv` as dependencies. However, key server files (`server/server.js`, `server/config/db.js`, `server/models/Contact.js`, `server/controllers/contactController.js`, `server/routes/contactRoutes.js`) are currently empty placeholders.
- To run a backend API locally once implemented:

```bash
cd server
npm install
node server.js   # or use nodemon for development
```

What I inspected
-
- Frontend entry: `client/src/main.jsx` mounts `App` and includes `index.css`.
- `client/src/App.jsx` renders the main page sections: Navbar, Hero, About, Skills, Projects, Contact, Certificates, Footer, etc.
- `client/src/components/Skills.jsx` contains the skills grid and uses `react-icons` (I updated this component to include Tailwind, Vercel, Render, Postman, and Express icons).

Deployment
-
- Frontend: recommended to deploy to Vercel (already live at https://siyajaiswal.vercel.app).
- Backend: deploy to Render, Heroku, or another Node host once `server.js` is implemented. If you want I can scaffold a minimal Express API and contact endpoint.
