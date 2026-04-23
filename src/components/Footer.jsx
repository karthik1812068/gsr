import { useState } from 'react'
import { ArrowRight, ExternalLink, Mail, Video } from 'lucide-react'
import { Link } from 'react-router-dom'
import { sendFormSubmit } from '../lib/formSubmit.js'
import {
  SITE_EMAIL,
  SITE_INSTAGRAM,
  SITE_PHONE_DISPLAY,
  SITE_STUDIO_ADDRESS,
  SITE_YOUTUBE,
} from '../data/siteContact.js'

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState('idle')
  const [newsletterError, setNewsletterError] = useState('')

  const submitNewsletter = async (e) => {
    e.preventDefault()
    const email = newsletterEmail.trim()
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!ok) {
      setNewsletterError('Please enter a valid email address')
      return
    }
    setNewsletterError('')
    setNewsletterStatus('sending')
    try {
      await sendFormSubmit({
        _subject: 'GSR Interiors — newsletter signup',
        email,
        name: 'Newsletter subscriber',
        message: `New newsletter subscription: ${email}`,
      })
      setNewsletterStatus('done')
      setNewsletterEmail('')
    } catch {
      setNewsletterStatus('idle')
      setNewsletterError('Could not subscribe. Please try again or email us directly.')
    }
  }

  return (
    <footer className="bg-[#0D0B09] text-[#F7F3EE]">
      <div className="mx-auto w-full max-w-[1440px] px-[18px] sm:px-[48px] lg:px-[80px] py-[34px]">
        <div className="grid gap-[22px] lg:grid-cols-[1.2fr_0.9fr_1fr_1.2fr_1.2fr]">
          <div>
            <div className="leading-none">
              <div className="font-heading text-[22px] font-[600] tracking-[0.04em]">
                GSR
              </div>
              <div className="mt-[4px] text-[11px] font-[700] tracking-[0.24em] text-[rgba(247,243,238,0.70)]">
                INTERIORS
              </div>
            </div>
            <p className="mt-[12px] max-w-[320px] text-[12px] leading-[1.7] text-[rgba(247,243,238,0.70)]">
              We create elegant, functional, and timeless spaces tailored to
              elevate the way you live.
            </p>
            <div className="mt-[12px] flex items-center gap-[14px] text-[rgba(247,243,238,0.78)]">
              <a
                href={SITE_INSTAGRAM.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram @${SITE_INSTAGRAM.handle}`}
                className="transition-colors hover:text-[#F7F3EE]"
              >
                <ExternalLink className="h-[18px] w-[18px]" />
              </a>
              <a
                href={SITE_YOUTUBE.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube channel"
                className="transition-colors hover:text-[#F7F3EE]"
              >
                <Video className="h-[18px] w-[18px]" />
              </a>
              <a
                href={`mailto:${SITE_EMAIL}`}
                aria-label="Email"
                className="transition-colors hover:text-[#F7F3EE]"
              >
                <Mail className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>

          <div>
            <div className="text-[13px] font-[800]">Quick Links</div>
            <ul className="mt-[10px] space-y-[8px] text-[12px] text-[rgba(247,243,238,0.72)]">
              <li>
                <Link className="hover:text-[#F7F3EE]" to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F7F3EE]" to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F7F3EE]" to="/gallery">
                  Gallery
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F7F3EE]" to="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F7F3EE]" to="/process">
                  Our Process
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F7F3EE]" to="/testimonials">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F7F3EE]" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[13px] font-[800]">Services</div>
            <ul className="mt-[10px] space-y-[8px] text-[12px] text-[rgba(247,243,238,0.72)]">
              <li>Residential Interiors</li>
              <li>Modular Kitchens</li>
              <li>Turnkey Projects</li>
              <li>Furniture &amp; Decor</li>
              <li>Space Planning</li>
            </ul>
          </div>

          <div>
            <div className="text-[13px] font-[800]">Studio</div>
            <div className="mt-[10px] text-[12px] leading-[1.7] text-[rgba(247,243,238,0.72)]">
              {SITE_STUDIO_ADDRESS}
              <div className="mt-[10px]">
                {SITE_PHONE_DISPLAY}
                <br />
                <a className="hover:text-[#F7F3EE]" href={`mailto:${SITE_EMAIL}`}>
                  {SITE_EMAIL}
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="text-[13px] font-[800]">Newsletter</div>
            <div className="mt-[10px] text-[12px] leading-[1.7] text-[rgba(247,243,238,0.72)]">
              Subscribe for design insights, project updates, and more.
            </div>
            {newsletterStatus === 'done' ? (
              <p className="mt-[12px] text-[12px] font-[600] text-[#C89A63]">
                Thanks — you&apos;re on the list.
              </p>
            ) : (
              <form onSubmit={submitNewsletter} className="mt-[12px]">
                <div className="flex items-center rounded-full bg-[rgba(255,255,255,0.06)] ring-1 ring-[rgba(255,255,255,0.12)]">
                  <input
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    disabled={newsletterStatus === 'sending'}
                    className="w-full bg-transparent px-[14px] py-[10px] text-[12px] text-[#F7F3EE] outline-none placeholder:text-[rgba(247,243,238,0.46)]"
                    placeholder="Enter your email"
                    type="email"
                    name="email"
                    autoComplete="email"
                  />
                  <button
                    type="submit"
                    disabled={newsletterStatus === 'sending'}
                    className="m-[4px] inline-flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#C89A63] text-[#1E1B18] disabled:opacity-50"
                    aria-label="Submit newsletter"
                  >
                    <ArrowRight className="h-[16px] w-[16px]" />
                  </button>
                </div>
                {newsletterError ? (
                  <p className="mt-[8px] text-[11px] text-[#E8A598]">{newsletterError}</p>
                ) : null}
              </form>
            )}
          </div>
        </div>

        <div className="mt-[22px] flex flex-wrap items-center justify-between gap-[10px] border-t border-[rgba(255,255,255,0.10)] pt-[14px] text-[11px] text-[rgba(247,243,238,0.60)]">
          <div>© 2026 GSR Interiors. All Rights Reserved.</div>
          <div className="flex items-center gap-[14px]">
            <a href="#" className="hover:text-[#F7F3EE]">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#F7F3EE]">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
