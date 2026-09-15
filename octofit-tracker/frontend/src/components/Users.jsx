import ResourceTable from './ResourceTable.jsx'

export default function Users() {
	return <ResourceTable resource="users" title="Athletes" description="A quick view of everyone showing up and putting in the work." emptyMessage="No athletes have registered yet." columns={[{ key: 'username', label: 'Username' }, { key: 'email', label: 'Email' }, { key: '_id', label: 'Profile ID' }]} />
}