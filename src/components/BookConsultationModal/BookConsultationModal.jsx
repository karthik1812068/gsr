import { X } from 'lucide-react'
import { createPortal } from 'react-dom'
import { useEffect, useMemo, useRef, useState } from 'react'
import { postConsultation } from '../../api/consultations.js'
import { SITE_PHONE_DISPLAY } from '../../data/siteContact.js'
import { useModalTrap } from '../../hooks/useModalTrap.js'

const PROJECT_TYPES = [
  'Residential Interior',
  'Modular Kitchen',
  'Living Room Design',
  'Bedroom Interior',
  'Commercial Space',
  'Turnkey Project',
]

function validate(values) {
  const errors = {}

  if (!values.fullName || values.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name'
  }

  const phone = (values.phone || '').trim()
  const digits = phone.replace(/[^\d]/g, '')
  if (!phone || digits.length < 10) {
    errors.phone = 'Please enter a valid phone number'
  }

  const email = (values.email || '').trim()
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (!emailOk) {
    errors.email = 'Please enter a valid email address'
  }

  if (!values.projectType) {
    errors.projectType = 'Please select a project type'
  }

  if ((values.projectDetails || '').length > 1000) {
    errors.projectDetails = 'Please keep details under 1000 characters'
  }

  if (!values.privacy) {
    errors.privacy = 'Please agree to the Privacy Policy to continue'
  }

  return errors
}

function Spinner() {
  return (
    <span
      aria-hidden="true"
      className="inline-block h-[16px] w-[16px] animate-spin rounded-full border-2 border-[#1A1209] border-t-transparent"
    />
  )
}

export default function BookConsultationModal({
  isOpen,
  sourcePage,
  onClose,
  onSuccess,
}) {
  const dialogRef = useRef(null)
  const initialFocusRef = useRef(null)

  const [values, setValues] = useState({
    fullName: '',
    phone: '',
    email: '',
    projectType: '',
    projectDetails: '',
    privacy: false,
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [bannerError, setBannerError] = useState('')

  const payload = useMemo(() => {
    return {
      full_name: values.fullName.trim(),
      phone: values.phone.trim(),
      email: values.email.trim(),
      project_type: values.projectType,
      project_details: values.projectDetails.trim(),
      source_page: sourcePage || window.location.pathname,
      submitted_at: new Date().toISOString(),
    }
  }, [values, sourcePage])

  useModalTrap({
    isOpen,
    containerRef: dialogRef,
    initialFocusRef,
    onEscape: submitting ? undefined : onClose,
  })

  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev || ''
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    setBannerError('')
    setErrors({})
    setSubmitting(false)
    setValues({
      fullName: '',
      phone: '',
      email: '',
      projectType: '',
      projectDetails: '',
      privacy: false,
    })
  }, [isOpen])

  if (!isOpen) return null

  const setField = (key, val) => {
    setValues((v) => ({ ...v, [key]: val }))
    setErrors((e) => {
      if (!e[key]) return e
      const next = { ...e }
      delete next[key]
      return next
    })
  }

  const submit = async (e) => {
    e.preventDefault()
    if (submitting) return
    setBannerError('')

    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    setSubmitting(true)
    try {
      await postConsultation(payload)
      onClose?.()
      onSuccess?.()
    } catch {
      setBannerError(
        `Something went wrong. Please try again or call us at ${SITE_PHONE_DISPLAY}`
      )
      setSubmitting(false)
    }
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[999] flex items-end justify-center bg-[rgba(0,0,0,0.72)] px-[12px] pb-[max(12px,env(safe-area-inset-bottom))] pt-[12px] sm:items-center sm:px-[16px] sm:py-[28px] opacity-100"
      aria-hidden="true"
      onMouseDown={submitting ? undefined : onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-title"
        className="max-h-[min(92dvh,calc(100dvh-24px))] w-full max-w-[460px] overflow-y-auto overscroll-contain rounded-t-[20px] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:max-h-[min(90dvh,720px)] sm:rounded-[18px]"
        ref={dialogRef}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-[12px] px-[22px] pt-[20px]">
          <div className="min-w-0">
            <div
              id="consultation-title"
              className="font-heading text-[18px] font-[600] text-[#1E1B18]"
            >
              Book a Consultation
            </div>
            <div className="mt-[6px] text-[12px] leading-[1.6] text-[#6E6257]">
              Tell us about your project and we&apos;ll get back to you within 24
              hours.
            </div>
            <div className="mt-[10px] h-[3px] w-[46px] rounded-full bg-[#C8A96E]" />
          </div>

          <button
            type="button"
            className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#F8F4EF] text-[#1E1B18] hover:bg-[#F3EEE7] transition-colors"
            onClick={submitting ? undefined : onClose}
            aria-label="Close"
            ref={initialFocusRef}
          >
            <X className="h-[16px] w-[16px]" />
          </button>
        </div>

        <div className="px-[22px] pt-[12px]">
          <div className="flex flex-wrap gap-[8px]">
            {['Free Consultation', 'No Commitment', 'Reply in 24hrs'].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-[6px] rounded-full bg-[#F5F0E8] px-[10px] py-[6px] text-[10px] font-[700] text-[#8A6D3B]"
              >
                <span className="text-[#8A6D3B]" aria-hidden="true">
                  ✓
                </span>
                {t}
              </span>
            ))}
          </div>
        </div>

        <form onSubmit={submit} className="px-[22px] pb-[20px] pt-[14px]">
          {bannerError ? (
            <div className="mb-[12px] rounded-[12px] bg-[rgba(226,75,74,0.10)] px-[12px] py-[10px] text-[12px] leading-[1.55] text-[#E24B4A]">
              {bannerError}
            </div>
          ) : null}

          <div className="grid gap-[12px] md:grid-cols-2">
            <label className="block">
              <span className="block text-[11px] font-[600] text-[#888888]">
                Full Name
              </span>
              <input
                disabled={submitting}
                value={values.fullName}
                onChange={(e) => setField('fullName', e.target.value)}
                placeholder="Your full name"
                className="mt-[6px] w-full rounded-[14px] bg-[#FAF8F4] px-[14px] py-[12px] text-[13px] text-[#1E1B18] outline-none ring-1 ring-[#E0D8CC] focus:ring-[#C8A96E] disabled:opacity-60"
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={errors.fullName ? 'err-fullName' : undefined}
              />
              <div
                id="err-fullName"
                aria-live="polite"
                className="mt-[6px] min-h-[16px] text-[11px] text-[#E24B4A]"
              >
                {errors.fullName || ''}
              </div>
            </label>

            <label className="block">
              <span className="block text-[11px] font-[600] text-[#888888]">
                Phone Number
              </span>
              <input
                disabled={submitting}
                value={values.phone}
                onChange={(e) => setField('phone', e.target.value)}
                placeholder="+91 XXXXX XXXXX"
                inputMode="tel"
                className="mt-[6px] w-full rounded-[14px] bg-[#FAF8F4] px-[14px] py-[12px] text-[13px] text-[#1E1B18] outline-none ring-1 ring-[#E0D8CC] focus:ring-[#C8A96E] disabled:opacity-60"
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? 'err-phone' : undefined}
              />
              <div
                id="err-phone"
                aria-live="polite"
                className="mt-[6px] min-h-[16px] text-[11px] text-[#E24B4A]"
              >
                {errors.phone || ''}
              </div>
            </label>
          </div>

          <div className="mt-[2px] grid gap-[12px] md:grid-cols-2">
            <label className="block">
              <span className="block text-[11px] font-[600] text-[#888888]">
                Email Address
              </span>
              <input
                disabled={submitting}
                value={values.email}
                onChange={(e) => setField('email', e.target.value)}
                placeholder="hello@example.com"
                inputMode="email"
                className="mt-[6px] w-full rounded-[14px] bg-[#FAF8F4] px-[14px] py-[12px] text-[13px] text-[#1E1B18] outline-none ring-1 ring-[#E0D8CC] focus:ring-[#C8A96E] disabled:opacity-60"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'err-email' : undefined}
              />
              <div
                id="err-email"
                aria-live="polite"
                className="mt-[6px] min-h-[16px] text-[11px] text-[#E24B4A]"
              >
                {errors.email || ''}
              </div>
            </label>

            <label className="block">
              <span className="block text-[11px] font-[600] text-[#888888]">
                Project Type
              </span>
              <select
                disabled={submitting}
                value={values.projectType}
                onChange={(e) => setField('projectType', e.target.value)}
                className="mt-[6px] w-full appearance-none rounded-[14px] bg-[#FAF8F4] px-[14px] py-[12px] pr-[36px] text-[13px] text-[#1E1B18] outline-none ring-1 ring-[#E0D8CC] focus:ring-[#C8A96E] disabled:opacity-60"
                aria-invalid={Boolean(errors.projectType)}
                aria-describedby={errors.projectType ? 'err-projectType' : undefined}
              >
                <option value="" disabled>
                  Select type...
                </option>
                {PROJECT_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <div
                id="err-projectType"
                aria-live="polite"
                className="mt-[6px] min-h-[16px] text-[11px] text-[#E24B4A]"
              >
                {errors.projectType || ''}
              </div>
            </label>
          </div>

          <label className="mt-[2px] block">
            <span className="block text-[11px] font-[600] text-[#888888]">
              Project Details
            </span>
            <textarea
              disabled={submitting}
              value={values.projectDetails}
              onChange={(e) => setField('projectDetails', e.target.value)}
              placeholder="Tell us about your space..."
              rows={4}
              className="mt-[6px] w-full resize-none rounded-[14px] bg-[#FAF8F4] px-[14px] py-[12px] text-[13px] text-[#1E1B18] outline-none ring-1 ring-[#E0D8CC] focus:ring-[#C8A96E] disabled:opacity-60"
              aria-invalid={Boolean(errors.projectDetails)}
              aria-describedby={
                errors.projectDetails ? 'err-projectDetails' : undefined
              }
            />
            <div
              id="err-projectDetails"
              aria-live="polite"
              className="mt-[6px] min-h-[16px] text-[11px] text-[#E24B4A]"
            >
              {errors.projectDetails || ''}
            </div>
          </label>

          <div className="mt-[4px]">
            <label className="inline-flex items-start gap-[10px] text-[12px] text-[#6E6257]">
              <input
                disabled={submitting}
                type="checkbox"
                checked={values.privacy}
                onChange={(e) => setField('privacy', e.target.checked)}
                className="mt-[2px] h-[14px] w-[14px] rounded-[4px] border border-[#E0D8CC] bg-[#FAF8F4]"
                aria-invalid={Boolean(errors.privacy)}
                aria-describedby={errors.privacy ? 'err-privacy' : undefined}
              />
              <span>
                I agree to the{' '}
                <a href="#" className="underline underline-offset-4">
                  Privacy Policy
                </a>
              </span>
            </label>
            <div
              id="err-privacy"
              aria-live="polite"
              className="mt-[6px] min-h-[16px] text-[11px] text-[#E24B4A]"
            >
              {errors.privacy || ''}
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            aria-busy={submitting ? 'true' : 'false'}
            className={[
              'mt-[8px] inline-flex w-full items-center justify-center gap-[10px] rounded-full bg-[#C8A96E] px-[18px] py-[12px] text-[13px] font-[800] text-[#1A1209] shadow-[0_14px_26px_rgba(0,0,0,0.12)] transition-colors',
              submitting
                ? 'opacity-70 cursor-not-allowed'
                : 'hover:bg-[#B8965C]',
            ].join(' ')}
          >
            {submitting ? (
              <>
                <Spinner /> Sending…
              </>
            ) : (
              'Send Message →'
            )}
          </button>

          <div className="mt-[10px] text-center text-[11px] text-[#888888]">
            We respond within 24 hours · Studio visits available by appointment
          </div>
        </form>
      </div>
    </div>,
    document.body
  )
}

