import { createContext, useContext, useMemo, useState } from 'react'
import BookConsultationModal from './BookConsultationModal.jsx'
import SuccessScreen from '../SuccessScreen/SuccessScreen.jsx'

const ConsultationContext = createContext(null)

export function ConsultationProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [success, setSuccess] = useState(false)
  const [sourcePage, setSourcePage] = useState('')

  const api = useMemo(() => {
    return {
      open: (src) => {
        setSourcePage(src || window.location.pathname)
        setIsOpen(true)
      },
      close: () => setIsOpen(false),
      showSuccess: () => setSuccess(true),
      hideSuccess: () => setSuccess(false),
    }
  }, [])

  return (
    <ConsultationContext.Provider value={api}>
      {children}

      <BookConsultationModal
        isOpen={isOpen}
        sourcePage={sourcePage}
        onClose={() => setIsOpen(false)}
        onSuccess={() => setSuccess(true)}
      />

      {success ? (
        <SuccessScreen
          onBackHome={() => {
            setSuccess(false)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        />
      ) : null}
    </ConsultationContext.Provider>
  )
}

export function useConsultation() {
  const ctx = useContext(ConsultationContext)
  if (!ctx) {
    throw new Error('useConsultation must be used within ConsultationProvider')
  }
  return ctx
}

