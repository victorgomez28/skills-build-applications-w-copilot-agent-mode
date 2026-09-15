import ResourceTable from './ResourceTable.jsx'

export default function Activities() {
	return <ResourceTable resource="activities" title="Activity feed" description="Every logged session, collected in one place." emptyMessage="No activities have been logged yet." columns={[{ key: 'type', label: 'Activity' }, { key: 'userId', label: 'Athlete', render: (item) => item.userId?.username || item.userId || '—' }, { key: 'duration', label: 'Minutes' }, { key: 'points', label: 'Points' }, { key: 'recordedAt', label: 'Recorded', render: (item) => item.recordedAt ? new Date(item.recordedAt).toLocaleDateString() : '—' }]} />
}