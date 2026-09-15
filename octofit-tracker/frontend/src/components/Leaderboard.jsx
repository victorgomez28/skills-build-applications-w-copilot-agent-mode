import ResourceTable from './ResourceTable.jsx'

export default function Leaderboard() {
	return <ResourceTable resource="leaderboard" title="Leaderboard" description="Friendly competition, measured by points earned." emptyMessage="The leaderboard is waiting for its first scores." columns={[{ key: 'rank', label: 'Rank', render: (item) => `#${item.rank ?? '—'}` }, { key: 'userId', label: 'Athlete', render: (item) => item.userId?.username || item.userId || '—' }, { key: 'points', label: 'Points' }]} />
}