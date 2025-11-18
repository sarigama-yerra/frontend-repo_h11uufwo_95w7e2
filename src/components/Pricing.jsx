import { motion } from 'framer-motion'

const tiers = [
  { name: 'Starter', price: '€0', desc: 'For trying things out', features: ['1 project', 'EU hosting', 'Community support'], cta: 'Get started' },
  { name: 'Growth', price: '€29', desc: 'For growing teams', features: ['Unlimited projects', 'EU + UK regions', 'Email support'], cta: 'Start 14-day trial', highlighted: true },
  { name: 'Enterprise', price: '€199', desc: 'For large organizations', features: ['Custom SLA', 'Data residency controls', 'Dedicated support'], cta: 'Contact sales' },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-blue-100/80">Start for free, scale as you grow. All plans include EU data residency and core compliance features.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`relative rounded-2xl border p-6 backdrop-blur-lg ${t.highlighted ? 'bg-white text-slate-900 border-white shadow-2xl' : 'bg-white/5 text-white border-white/15'}`}
            >
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <div className="mt-4 text-4xl font-bold">{t.price}<span className="text-base font-medium text-white/60">/mo</span></div>
              <p className={`mt-2 text-sm ${t.highlighted ? 'text-slate-700' : 'text-blue-100/80'}`}>{t.desc}</p>
              <ul className="mt-6 space-y-2">
                {t.features.map((f) => (
                  <li key={f} className={`text-sm ${t.highlighted ? 'text-slate-700' : 'text-blue-100/90'}`}>• {f}</li>
                ))}
              </ul>
              <a href="#cta" className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 font-semibold shadow ${t.highlighted ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-white text-slate-900 hover:bg-blue-50'}`}>
                {t.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
