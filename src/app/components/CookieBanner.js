// app/components/CookieBanner.js
'use client'
import { useEffect, useState } from 'react'

export default function CookieBanner() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('gambino-cookie-consent')
    if (!saved) setOpen(true)
  }, [])

  if (!open) return null

  const save = (prefs) => {
    localStorage.setItem('gambino-cookie-consent', JSON.stringify(prefs))
    setOpen(false)
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-5xl px-4 pb-6">
        <div className="rounded-xl border border-neutral-800 bg-neutral-950/95 backdrop-blur p-4 text-neutral-200 shadow-lg">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="text-sm">
              We use only essential mechanisms for security and basic functionality. You can review or change
              preferences anytime.
            </div>
            <div className="flex gap-2">
              <a
                href="/legal/cookies"
                className="rounded-lg border border-neutral-700 px-3 py-2 text-sm hover:bg-neutral-900"
              >
                Manage
              </a>
              <button
                onClick={() => save({ essential: true, functional: false, analytics: false })}
                className="rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm hover:bg-neutral-800"
              >
                Reject non-essential
              </button>
              <button
                onClick={() => save({ essential: true, functional: true, analytics: true })}
                className="rounded-lg bg-yellow-500 px-3 py-2 text-sm font-semibold text-black hover:bg-yellow-400"
              >
                Allow all
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
