import emailjs from '@emailjs/browser'

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export function sendEmail({ fromName, fromEmail, subject, message }) {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name:  fromName,
      from_email: fromEmail,
      subject,
      message,
      to_email:   'caragafic@carsu.edu.ph',
    },
    PUBLIC_KEY,
  )
}
