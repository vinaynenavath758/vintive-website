# Vintive Studio - Frontend

Modern creative agency website built with React.

## Live Demo
- Frontend: https://your-project.vercel.app
- Backend: https://your-backend.onrender.com

## Tech Stack
- React 19
- React Router
- Tailwind CSS
- Shadcn UI Components
- Axios

## Local Development

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Create `.env` file:
```
REACT_APP_BACKEND_URL=http://localhost:8001
```

3. Start development server:
```bash
npm start
# or
yarn start
```

## Deployment to Vercel

1. Push this code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Configure:
   - Framework: Create React App
   - Build Command: `npm run build`
   - Output Directory: `build`
5. Add Environment Variable:
   - `REACT_APP_BACKEND_URL`: Your Render backend URL
6. Deploy!

## Environment Variables

- `REACT_APP_BACKEND_URL`: Backend API URL (required)

## Features

- Hero section with dynamic content
- Service showcase with detail pages
- Portfolio with category tabs
- Blog with detail pages
- Contact form
- Testimonials carousel
- Stats/metrics section
- Responsive design
- Smooth animations

## Project Structure

```
src/
├── components/     # React components
├── pages/         # Page components
├── hooks/         # Custom hooks
├── mock.js        # Mock data
├── App.js         # Main app component
└── index.js       # Entry point
```

## License

MIT
