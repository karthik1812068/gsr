import { sendFormSubmit } from '../lib/formSubmit.js'

export async function postConsultation(payload) {
  const message = [
    `Project type: ${payload.project_type}`,
    '',
    payload.project_details || '(no additional details)',
    '',
    `Source page: ${payload.source_page}`,
    `Submitted: ${payload.submitted_at}`,
  ].join('\n')

  await sendFormSubmit({
    _subject: `GSR Interiors — consultation (${payload.project_type})`,
    name: payload.full_name,
    email: payload.email,
    phone: payload.phone,
    message,
  })

  return { status: 'success' }
}
