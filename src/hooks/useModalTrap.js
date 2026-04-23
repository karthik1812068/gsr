import { useEffect } from 'react'

function getFocusableElements(container) {
  if (!container) return []
  const selectors = [
    'a[href]',
    'area[href]',
    'button:not([disabled])',
    'input:not([disabled]):not([type="hidden"])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ].join(',')

  return Array.from(container.querySelectorAll(selectors)).filter((el) => {
    const isHidden =
      el.hasAttribute('disabled') ||
      el.getAttribute('aria-hidden') === 'true' ||
      el.offsetParent === null
    return !isHidden
  })
}

export function useModalTrap({ isOpen, containerRef, initialFocusRef, onEscape }) {
  useEffect(() => {
    if (!isOpen) return

    const container = containerRef?.current
    if (!container) return

    const previouslyFocused = document.activeElement

    const focusFirst = () => {
      const explicit = initialFocusRef?.current
      if (explicit && typeof explicit.focus === 'function') {
        explicit.focus()
        return
      }
      const focusables = getFocusableElements(container)
      focusables[0]?.focus?.()
    }

    // Ensure focus lands inside after paint.
    const t = window.setTimeout(focusFirst, 0)

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onEscape?.()
        return
      }

      if (e.key !== 'Tab') return

      const focusables = getFocusableElements(container)
      if (focusables.length === 0) {
        e.preventDefault()
        return
      }

      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      const active = document.activeElement

      if (e.shiftKey) {
        if (active === first || !container.contains(active)) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (active === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      window.clearTimeout(t)
      document.removeEventListener('keydown', onKeyDown)
      previouslyFocused?.focus?.()
    }
  }, [isOpen, containerRef, initialFocusRef, onEscape])
}

