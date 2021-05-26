import { useEffect, useCallback, useRef } from 'react'

const useExternalFocus = ({ onClose, escapeOnClose }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef && containerRef.current) containerRef.current.focus()
  }, [])

  const handleKeyDown = useCallback(
    (e) => {
      if (containerRef && containerRef.current) {
        const TAB_CODE = 9
        const ESC_CODE = 27

        const focusable = containerRef.current.querySelectorAll(
          '[href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        )
        const firstElement = focusable[0]
        const lastElement = focusable[focusable.length - 1]

        if (document.activeElement.classList.contains('ql-editor')) return

        const activeNodeIndex = Array.from(focusable).findIndex((node) =>
          node.isSameNode(document.activeElement),
        )
        if (activeNodeIndex === -1 && firstElement) firstElement.focus()

        const handleForwardTab = () => {
          if (document.activeElement.isSameNode(lastElement)) {
            e.preventDefault()
            firstElement.focus()
          }
        }

        const handleBackwardTab = () => {
          if (document.activeElement.isSameNode(firstElement)) {
            e.preventDefault()
            lastElement.focus()
          }
        }
        switch (e.keyCode) {
          case TAB_CODE:
            if (focusable.length === 1) {
              e.preventDefault()
              break
            }

            if (e.shiftkey) {
              handleBackwardTab()
            } else {
              handleForwardTab()
            }
            break
          case ESC_CODE:
            if (
              typeof onClose === 'function' &&
              escapeOnClose &&
              document.activeElement.nodeName !== 'INPUT'
            )
              onClose(e)
            break
          default:
        }
      }
    },
    [onClose, escapeOnClose],
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  return { containerRef }
}

export default useExternalFocus
