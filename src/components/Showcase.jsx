import { motion } from 'framer-motion'

const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/5/5c/Stars_gold.svg',
  'https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg',
  'https://upload.wikimedia.org/wikipedia/commons/5/5c/Stars_gold.svg',
  'https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg',
]

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Inspired by European design</h2>
            <p className="mt-3 text-blue-100/80 max-w-xl">
              Minimal, timeless, and elegant. Thoughtful typography, generous white space, and precise micro-interactions make every touchpoint feel premium.
            </p>

            <div className="mt-8 grid grid-cols-4 gap-4 opacity-80">
              {logos.map((src, i) => (
                <motion.img
                  key={i}
                  src={src}
                  alt="European emblem"
                  className="h-10 w-auto object-contain"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                />
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=1600&auto=format&fit=crop"
              alt="European architecture"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
