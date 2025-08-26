'use client'
import { useEffect, useState } from 'react'

export default function CookieSettings() {
  const [prefs, setPrefs] = useState({ essential: true, functional: false, analytics: false })
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('gambino-cookie-consent')
    if (saved) {
      try { setPrefs(JSON.parse(saved)) } catch {}
    }
    setLoaded(true)
  }, [])

  const save = (next) => {
    setPrefs(next)
    localStorage.setItem('gambino-cookie-consent', JSON.stringify(next))
  }

  if (!loaded) return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4 text-sm text-neutral-400">
      Loading…
    </div>
  )

  return (
    <div className="space-y-4">
      <Toggle
        label="Essential"
        description="Required for core site/security features. Always on."
        checked
        disabled
      />
      <Toggle
        label="Functional"
        description="Enhancements like remembering preferences. Currently not used."
        checked={prefs.functional}
        onChange={(v) => save({ ...prefs, functional: v })}
      />
      <Toggle
        label="Analytics"
        description="Privacy-respecting usage metrics to improve the product. Currently not used."
        checked={prefs.analytics}
        onChange={(v) => save({ ...prefs, analytics: v })}
      />
      <div className="flex gap-3 pt-2">
        <button
          onClick={() => save({ essential: true, functional: false, analytics: false })}
          className="rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-2 text-sm hover:bg-neutral-900"
        >
          Reject non-essential
        </button>
        <button
          onClick={() => save({ essential: true, functional: true, analytics: true })}
          className="rounded-lg bg-yellow-500 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-400"
        >
          Allow all
        </button>
      </div>
    </div>
  )
}

function Toggle({ label, description, checked=false, onChange, disabled=false }) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-xl border border-neutral-800 bg-neutral-950 p-4">
      <div>
        <div className="font-semibold">{label}</div>
        <div className="mt-1 text-sm text-neutral-400">{description}</div>
      </div>
      <button
        type="button"
        onClick={() => !disabled && onChange && onChange(!checked)}
        className={`relative h-6 w-11 rounded-full transition ${
          checked ? 'bg-yellow-500' : 'bg-neutral-700'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        aria-pressed={checked}
      >
        <span
          className={`absolute top-[3px] h-4 w-4 rounded-full bg-black transition ${
            checked ? 'left-[22px]' : 'left-[3px]'
          }`}
        />
      </button>
    </div>
  )
}
