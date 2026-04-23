import { SITE_EMAIL } from '../data/siteContact.js'

/**
 * Sends a message via FormSubmit (no backend). First use may require
 * confirming gsriinteriors@gmail.com in the FormSubmit email.
 */
export async function sendFormSubmit(fields) {
  const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(SITE_EMAIL)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      _captcha: false,
      ...fields,
    }),
  })

  let data = null
  try {
    data = await res.json()
  } catch {
    // ignore
  }

  if (!res.ok) {
    const message =
      (data && (data.message || data.error)) || 'Request failed. Please try again.'
    const err = new Error(message)
    err.status = res.status
    throw err
  }

  return data || { success: true }
}
