import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.12),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(14,165,233,0.1),transparent_35%)]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Pricing />

        {/* CTA banner */}
        <section id="cta" className="relative py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-blue-600 to-indigo-600 p-8 sm:p-12 text-center shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold">Build with a European edge</h3>
              <p className="mt-2 text-blue-100/90">Launch today with a platform that respects your users and your brand.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <a href="#pricing" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 font-semibold px-6 py-3 shadow hover:shadow-lg">See pricing</a>
                <a href="/test" className="inline-flex items-center justify-center rounded-xl bg-white/15 text-white font-semibold px-6 py-3 border border-white/30 hover:bg-white/20">Check backend</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
