// Maps JSON-safe icon name strings (stored in case data) to lucide-react components.
// Keeping icons as strings keeps caseData fully serializable for a future DB/backend.
import {
  Activity, Heart, Droplet, FlaskConical, HeartPulse, TestTube, Scale,
} from 'lucide-react'

export const ICONS = { Activity, Heart, Droplet, FlaskConical, HeartPulse, TestTube, Scale }

export function getIcon(name) {
  return ICONS[name] || Activity
}

// Clinical flag -> tailwind-ish color tokens (UI adds '#').
export const FLAG_STYLES = {
  high:    { hex: 'dc2626', label: 'High',    bg: 'bg-red-50',   text: 'text-red-700',   ring: 'ring-red-200' },
  warn:    { hex: 'ca8a04', label: 'Watch',   bg: 'bg-amber-50', text: 'text-amber-700', ring: 'ring-amber-200' },
  normal:  { hex: '0d9488', label: 'Normal',  bg: 'bg-teal-50',  text: 'text-teal-700',  ring: 'ring-teal-200' },
  missing: { hex: '7c3aed', label: 'Missing', bg: 'bg-violet-50',text: 'text-violet-700',ring: 'ring-violet-200' },
}

export const ALERT_STYLES = {
  high: { bg: 'bg-red-50',   border: 'border-red-300',   text: 'text-red-800',   dot: 'dc2626' },
  warn: { bg: 'bg-amber-50', border: 'border-amber-300', text: 'text-amber-800', dot: 'ca8a04' },
  info: { bg: 'bg-sky-50',   border: 'border-sky-300',   text: 'text-sky-800',   dot: '0891b2' },
}
