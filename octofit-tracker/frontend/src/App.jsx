import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'

function App() {
  return (
    <div className="app-shell">
      <header className="app-header"><div><p className="eyebrow">MERGINGTON HIGH</p><h1>OctoFit Tracker</h1></div><span className="status-dot">LIVE TRAINING HUB</span></header>
      <nav className="app-nav" aria-label="Primary navigation">
        <NavLink to="/" end>Overview</NavLink><NavLink to="/activities">Activities</NavLink><NavLink to="/leaderboard">Leaderboard</NavLink><NavLink to="/teams">Teams</NavLink><NavLink to="/users">Users</NavLink><NavLink to="/workouts">Workouts</NavLink>
      </nav>
      <main className="app-content"><Routes>
        <Route path="/" element={<Overview />} /><Route path="/activities" element={<Activities />} /><Route path="/leaderboard" element={<Leaderboard />} /><Route path="/teams" element={<Teams />} /><Route path="/users" element={<Users />} /><Route path="/workouts" element={<Workouts />} />
      </Routes></main>
    </div>
  )
}

function Overview() {
  return <section className="overview"><div className="overview-copy"><p className="eyebrow">YOUR NEXT REP STARTS HERE</p><h2>Move together.<br /><em>Go further.</em></h2><p>Track activity, find your crew, and turn every session into momentum for the whole school.</p><NavLink className="btn btn-dark" to="/activities">View activity feed</NavLink></div><div className="overview-mark" aria-hidden="true">08</div><div className="overview-note"><span>01</span><p>Five connected views keep student progress visible and competition friendly.</p></div></section>
}

export default App
