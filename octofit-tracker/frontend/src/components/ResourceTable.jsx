import { useEffect, useState } from 'react'
import { fetchResource, normalizeItems } from '../api.js'

export default function ResourceTable({ resource, title, description, columns, emptyMessage }) {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    fetchResource(resource, controller.signal).then((payload) => { setItems(normalizeItems(payload)); setStatus('ready') }).catch((requestError) => {
      if (requestError.name !== 'AbortError') { setError(requestError.message); setStatus('error') }
    })
    return () => controller.abort()
  }, [resource])

  return <section className="resource-view"><div className="resource-heading"><div><p className="eyebrow">LIVE DATA / {resource.toUpperCase()}</p><h2>{title}</h2><p>{description}</p></div><span className="resource-count">{status === 'ready' ? items.length : '—'} records</span></div>
    {status === 'loading' && <div className="loading-state">Loading {resource}...</div>}
    {status === 'error' && <div className="alert alert-warning" role="alert">{error}. Check the API and try again.</div>}
    {status === 'ready' && items.length === 0 && <div className="empty-state">{emptyMessage}</div>}
    {status === 'ready' && items.length > 0 && <div className="table-responsive resource-table-wrap"><table className="table resource-table"><thead><tr>{columns.map((column) => <th key={column.key}>{column.label}</th>)}</tr></thead><tbody>{items.map((item, index) => <tr key={item._id || item.id || index}>{columns.map((column) => <td key={column.key}>{column.render ? column.render(item) : item[column.key] ?? '—'}</td>)}</tr>)}</tbody></table></div>}
  </section>
}