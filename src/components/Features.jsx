import { motion } from 'framer-motion'
import { ShieldCheck, GlobeEurope, Zap, Cog, Server, Lock } from 'lucide-react'

const features = [
  {
    icon: GlobeEurope,
    title: 'EU-native infrastructure',
    desc: 'All data stored and processed in EU regions with low-latency networks.'
  },
  {
    icon: ShieldCheck,
    title: 'Privacy by design',
    desc: 'Built to meet GDPR and ePrivacy requirements from day one.'
  },
  { icon: Lock, title: 'Data residency', desc: 'Fine-grained controls so your data never leaves the EU.' },
  { icon: Server, title: 'Scalable cloud', desc: 'Autoscaling microservices with managed databases.' },
  { icon: Zap, title: 'Lightning performance', desc: 'Optimized edge routing and image CDN across Europe.' },
  { icon: Cog, title: 'Easy integration', desc: 'Clean APIs and SDKs so you can ship faster.' },
]

export default function Features() {
  return (
    <section id="product" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Built for the European standard</h2>
          <p className="mt-3 text-blue-100/80">Everything you need to build, run, and scale — with European compliance and aesthetics at the core.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-lg hover:bg-white/7.5 transition-colors"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-white font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-blue-100/80 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
