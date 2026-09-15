const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()

export const apiBaseUrl = codespaceName ? `https://${codespaceName}-8000.app.github.dev` : 'http://localhost:8000'

export async function fetchResource(resource, signal) {
  const response = await fetch(`${apiBaseUrl}/api/${resource}/`, { signal })
  if (!response.ok) throw new Error(`Unable to load ${resource} (${response.status})`)
  return response.json()
}

export function normalizeItems(payload) {
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload?.results)) return payload.results
  if (Array.isArray(payload?.data)) return payload.data
  if (Array.isArray(payload?.items)) return payload.items
  if (Array.isArray(payload?.data?.results)) return payload.data.results
  return []
}