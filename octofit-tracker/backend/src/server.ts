import express from 'express';
import './config/database.js';
import {
  activitiesRouter,
  leaderboardRouter,
  teamsRouter,
  usersRouter,
  workoutsRouter,
} from './routes.js';

const app = express();
const port = Number(process.env.PORT || 8000);

app.use(express.json());

app.get('/api/config', (_request, response) => {
  const codespaceName = process.env.CODESPACE_NAME;
  const apiUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000';

  response.json({ apiUrl });
});

app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/workouts', workoutsRouter);

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', service: 'octofit-tracker-api' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`OctoFit Tracker API listening on port ${port}`);
});