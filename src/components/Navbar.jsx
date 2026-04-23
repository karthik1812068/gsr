import { Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Fragment, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useConsultation } from './BookConsultationModal/ConsultationContext.jsx'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Projects', to: '/projects' },
  { label: 'Process', to: '/process' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar({ variant = 'hero' }) {
  const isGlass = variant === 'glass'
  const isHero = variant === 'hero'
  const consultation = useConsultation()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!mobileOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev || ''
    }
  }, [mobileOpen])

  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mobileOpen])

  const openConsultFromMenu = () => {
    setMobileOpen(false)
    consultation.open('navbar-mobile')
  }

  const mobileDrawer =
    mobileOpen &&
    createPortal(
      <Fragment>
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-[200] bg-[rgba(0,0,0,0.55)] backdrop-blur-[2px] lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Main menu"
          className="fixed right-0 top-0 z-[210] flex h-[100dvh] w-[min(100vw,320px)] max-w-[100vw] flex-col bg-[#14110E] shadow-[-12px_0_40px_rgba(0,0,0,0.35)] lg:hidden"
          style={{
            paddingTop: 'max(12px, env(safe-area-inset-top))',
            paddingBottom: 'max(12px, env(safe-area-inset-bottom))',
          }}
        >
          <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.08)] px-[18px] py-[14px]">
            <Link
              to="/"
              className="leading-none outline-none"
              onClick={() => setMobileOpen(false)}
            >
              <div className="font-heading text-[17px] font-[600] tracking-[0.04em] text-[#F7F3EE]">
                GSR
              </div>
              <div className="mt-[2px] text-[10px] font-[600] tracking-[0.22em] text-[rgba(247,243,238,0.72)]">
                INTERIORS
              </div>
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="inline-flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[rgba(255,255,255,0.12)] text-[#F7F3EE] active:bg-[rgba(255,255,255,0.06)]"
            >
              <X className="h-[20px] w-[20px]" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col overflow-y-auto overscroll-contain px-[10px] py-[12px]">
            {links.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  [
                    'rounded-[12px] px-[14px] py-[14px] text-[15px] font-[500] transition-colors min-h-[48px] flex items-center',
                    isActive
                      ? 'bg-[rgba(200,169,110,0.14)] text-[#C8A96E]'
                      : 'text-[#F7F3EE] active:bg-[rgba(255,255,255,0.06)]',
                  ].join(' ')
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="border-t border-[rgba(255,255,255,0.08)] px-[14px] py-[14px]">
            <button
              type="button"
              onClick={openConsultFromMenu}
              className="flex w-full min-h-[48px] items-center justify-center rounded-full bg-[#CDA87A] px-[20px] py-[14px] text-[14px] font-[600] text-[#2B2118] shadow-[0_10px_24px_rgba(0,0,0,0.25)] active:bg-[#BC9466]"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </Fragment>,
      document.body
    )

  return (
    <header
      className={[
        isGlass
          ? 'sticky top-[18px] z-40 mx-auto w-[min(1440px,calc(100%-24px))] rounded-full bg-[rgba(40,35,30,0.75)] px-[16px] backdrop-blur-[12px] shadow-[0_14px_34px_rgba(0,0,0,0.22)] sm:w-[min(1440px,calc(100%-48px))] sm:px-[22px]'
          : 'absolute top-0 left-0 right-0 z-30 h-[84px]',
        isGlass ? 'h-[76px]' : 'h-[84px]',
      ].join(' ')}
      style={isGlass ? { marginTop: 'max(8px, env(safe-area-inset-top))' } : undefined}
    >
      <div
        className={[
          'mx-auto h-full w-full max-w-[1440px]',
          isHero ? 'px-[16px] sm:px-[24px] lg:px-[38px]' : '',
        ].join(' ')}
      >
        <div className="grid h-full grid-cols-[auto_1fr_auto] items-center">
          <div className="flex items-center">
            <Link to="/" className="leading-none outline-none transition-opacity hover:opacity-90">
              <div className="font-heading text-[17px] font-[600] tracking-[0.04em] text-[#F7F3EE] sm:text-[18px]">
                GSR
              </div>
              <div className="mt-[2px] text-[10px] font-[600] tracking-[0.22em] text-[rgba(247,243,238,0.78)] sm:text-[11px]">
                INTERIORS
              </div>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center justify-center gap-[28px]">
            {links.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                className={({ isActive }) =>
                  [
                    'text-[12px] font-[500] leading-none transition-colors',
                    isActive
                      ? 'text-[#C8A96E]'
                      : 'text-[#F7F3EE] hover:text-[#F7F3EE]',
                  ].join(' ')
                }
                end={l.to === '/'}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-[10px] justify-self-end sm:gap-[14px]">
            <button
              type="button"
              onClick={() => consultation.open('navbar')}
              className="hidden lg:inline-flex items-center justify-center rounded-full bg-[#CDA87A] px-[30px] py-[14px] text-[13px] font-[600] leading-none text-[#2B2118] shadow-[0_10px_20px_rgba(0,0,0,0.14)] hover:bg-[#BC9466] transition-colors"
            >
              Book a Consultation
            </button>

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
              className="inline-flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[rgba(247,243,238,0.28)] bg-[rgba(0,0,0,0.18)] text-[#F7F3EE] backdrop-blur-[6px] hover:bg-[rgba(0,0,0,0.26)] transition-colors lg:h-[42px] lg:w-[42px]"
            >
              <Menu className="h-[18px] w-[18px]" />
            </button>
          </div>
        </div>
      </div>
      {mobileDrawer}
    </header>
  )
}
