import { Router } from 'express';
import type { Model } from 'mongoose';
import { Activity, Leaderboard, Team, User, Workout } from './models.js';

function createCrudRouter(model: Model<any>) {
  const router = Router();

  router.get('/', async (_request, response, next) => {
    try {
      response.json(await model.find().lean());
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async (request, response, next) => {
    try {
      response.status(201).json(await model.create(request.body));
    } catch (error) {
      next(error);
    }
  });

  return router;
}

export const usersRouter = createCrudRouter(User);
export const teamsRouter = createCrudRouter(Team);
export const activitiesRouter = createCrudRouter(Activity);
export const leaderboardRouter = createCrudRouter(Leaderboard);
export const workoutsRouter = createCrudRouter(Workout);