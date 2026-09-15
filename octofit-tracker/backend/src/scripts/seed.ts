import mongoose from 'mongoose';
import { Activity, Leaderboard, Team, User, Workout } from '../models.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Team.deleteMany({}),
      User.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.insertMany([
      {
        username: 'maya-rodriguez',
        email: 'maya.rodriguez@example.com',
        profile: { displayName: 'Maya Rodriguez', goal: 'Build endurance', level: 'intermediate' },
      },
      {
        username: 'liam-chen',
        email: 'liam.chen@example.com',
        profile: { displayName: 'Liam Chen', goal: 'Improve strength', level: 'beginner' },
      },
      {
        username: 'sofia-patel',
        email: 'sofia.patel@example.com',
        profile: { displayName: 'Sofia Patel', goal: 'Train for a 10K', level: 'advanced' },
      },
    ]);

    await Workout.insertMany([
      {
        name: 'Morning Mobility',
        description: 'A gentle routine to improve range of motion and prepare for the day.',
        difficulty: 'beginner',
        exercises: [
          { name: 'Cat-cow', sets: 2, reps: 10 },
          { name: 'World\'s greatest stretch', sets: 2, reps: 6 },
          { name: 'Bodyweight squat', sets: 3, reps: 12 },
        ],
      },
      {
        name: 'Full-body Strength',
        description: 'A balanced strength session using simple compound movements.',
        difficulty: 'intermediate',
        exercises: [
          { name: 'Goblet squat', sets: 4, reps: 10 },
          { name: 'Push-up', sets: 3, reps: 12 },
          { name: 'Single-arm row', sets: 3, reps: 10 },
        ],
      },
      {
        name: 'Tempo Run',
        description: 'A progressive running workout for improving 10K pace.',
        difficulty: 'advanced',
        exercises: [
          { name: 'Warm-up jog', durationMinutes: 10 },
          { name: 'Tempo interval', durationMinutes: 20, repeats: 2 },
          { name: 'Cool-down jog', durationMinutes: 10 },
        ],
      },
    ]);

    await Team.insertMany([
      { name: 'Summit Striders', members: [users[0]._id, users[2]._id] },
      { name: 'Everyday Athletes', members: [users[1]._id] },
    ]);

    await Activity.insertMany([
      { userId: users[0]._id, type: 'cycling', duration: 45, points: 90, recordedAt: new Date('2026-09-12T07:30:00Z') },
      { userId: users[0]._id, type: 'strength', duration: 35, points: 70, recordedAt: new Date('2026-09-13T17:00:00Z') },
      { userId: users[1]._id, type: 'walking', duration: 30, points: 45, recordedAt: new Date('2026-09-13T12:15:00Z') },
      { userId: users[2]._id, type: 'running', duration: 50, points: 125, recordedAt: new Date('2026-09-14T06:45:00Z') },
      { userId: users[2]._id, type: 'yoga', duration: 40, points: 80, recordedAt: new Date('2026-09-14T18:30:00Z') },
    ]);

    await Leaderboard.insertMany([
      { userId: users[2]._id, points: 205, rank: 1 },
      { userId: users[0]._id, points: 160, rank: 2 },
      { userId: users[1]._id, points: 45, rank: 3 },
    ]);

    console.log('Seeded 3 users, 2 teams, 5 activities, 3 leaderboard entries, and 3 workouts');

    console.log('Database seeding complete');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

seedDatabase();
