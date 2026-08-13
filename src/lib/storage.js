// Contributions are saved to this browser's localStorage — that means they only
// live on the device the visitor filled the form in on, not on a shared server.
// The Contribute page also opens a WhatsApp / call link so the message actually
// reaches the Society, and /admin lets you read back anything saved on THIS device.
const KEY = 'rws_contributions'

export function saveContribution(entry) {
  const list = getContributions()
  const record = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    submittedAt: new Date().toISOString(),
    ...entry,
  }
  list.unshift(record)
  localStorage.setItem(KEY, JSON.stringify(list))
  return record
}

export function getContributions() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function clearContributions() {
  localStorage.removeItem(KEY)
}
