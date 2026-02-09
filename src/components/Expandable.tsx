import { useState, ReactNode } from 'react'

interface ExpandableProps {
  label: ReactNode
  className?: string
  children: ReactNode
}

export default function Expandable({ label, className = '', children }: ExpandableProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className={className}>
      <div className={`${className}-header ${open ? 'active' : ''}`} onClick={() => setOpen(!open)}>
        <span className="arrow">{open ? '▼' : '▶'}</span>
        {label}
      </div>
      {open && children}
    </div>
  )
}