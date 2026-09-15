import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  profile: { type: Schema.Types.Mixed, default: {} },
});

const teamSchema = new Schema({
  name: { type: String, required: true },
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

const activitySchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  duration: { type: Number, required: true, min: 0 },
  points: { type: Number, default: 0, min: 0 },
  recordedAt: { type: Date, default: Date.now },
});

const leaderboardSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  points: { type: Number, required: true, min: 0 },
  rank: { type: Number, required: true, min: 1 },
});

const workoutSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, default: '' },
  difficulty: { type: String, default: 'beginner' },
  exercises: { type: [Schema.Types.Mixed], default: [] },
});

export const User = mongoose.model('User', userSchema);
export const Team = mongoose.model('Team', teamSchema);
export const Activity = mongoose.model('Activity', activitySchema);
export const Leaderboard = mongoose.model('Leaderboard', leaderboardSchema);
export const Workout = mongoose.model('Workout', workoutSchema);