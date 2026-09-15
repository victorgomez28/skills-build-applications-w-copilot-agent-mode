import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'

const navigation = [
  { to: '/', label: 'Overview', end: true },
  { to: '/activities', label: 'Activities' },
  { to: '/leaderboard', label: 'Leaderboard' },
  { to: '/teams', label: 'Teams' },
  { to: '/users', label: 'Users' },
  { to: '/workouts', label: 'Workouts' },
]

function App() {
  return (
    <div className="app-shell">
      <header className="app-header"><div><p className="eyebrow">MERGINGTON HIGH</p><h1>OctoFit Tracker</h1></div><span className="status-dot">LIVE TRAINING HUB</span></header>
      <nav className="app-nav" aria-label="Primary navigation">{navigation.map(({ to, label, end }) => <NavLink key={to} to={to} end={end}>{label}</NavLink>)}</nav>
      <main className="app-content"><Routes>
        <Route path="/" element={<Overview />} /><Route path="/activities" element={<Activities />} /><Route path="/leaderboard" element={<Leaderboard />} /><Route path="/teams" element={<Teams />} /><Route path="/users" element={<Users />} /><Route path="/workouts" element={<Workouts />} />
        <Route path="*" element={<NotFound />} />
      </Routes></main>
    </div>
  )
}

function Overview() {
  return <section className="overview"><div className="overview-copy"><p className="eyebrow">YOUR NEXT REP STARTS HERE</p><h2>Move together.<br /><em>Go further.</em></h2><p>Track activity, find your crew, and turn every session into momentum for the whole school.</p><NavLink className="btn btn-dark" to="/activities">View activity feed</NavLink></div><div className="overview-mark" aria-hidden="true">08</div><div className="overview-note"><span>01</span><p>Five connected views keep student progress visible and competition friendly.</p></div></section>
}

function NotFound() {
  return <section className="empty-state"><h2>Page not found</h2><NavLink to="/">Return to overview</NavLink></section>
}

export default App
