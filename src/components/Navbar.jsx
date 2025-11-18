import { useState } from 'react'
import { Menu, X, Globe2 } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: 'Product', href: '#product' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl backdrop-blur-md bg-white/10 border border-white/15 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
          <div className="flex items-center justify-between px-4 py-3 sm:py-4">
            <a href="#" className="inline-flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg">
                <Globe2 size={18} />
              </span>
              <span className="text-white font-semibold text-lg tracking-tight">Europa Cloud</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="text-white/80 hover:text-white transition-colors">
                  {item.name}
                </a>
              ))}
              <a href="#cta" className="inline-flex items-center rounded-xl bg-white text-slate-900 font-semibold px-4 py-2 shadow hover:shadow-md transition-all">
                Start free
              </a>
            </nav>

            <button className="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-white/90 hover:text-white" onClick={() => setOpen(!open)}>
              {open ? <X /> : <Menu />}
            </button>
          </div>
          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a key={item.name} href={item.href} className="block rounded-lg px-3 py-2 text-white/90 hover:bg-white/10">
                    {item.name}
                  </a>
                ))}
                <a href="#cta" className="block text-center rounded-lg bg-white text-slate-900 font-semibold px-3 py-2">
                  Start free
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
