export default function Footer() {
  return (
    <footer id="about" className="relative py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-blue-100/80">
          <div>
            <h4 className="text-white font-semibold">Europa Cloud</h4>
            <p className="mt-2 text-sm">Designed in Europe. Built for privacy-first teams worldwide.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold">Company</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">Legal</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">DPA</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">Contact</h4>
            <p className="mt-2 text-sm">hello@europacloud.example</p>
          </div>
        </div>
        <div className="mt-10 border-t border-white/15 pt-6 text-center text-sm text-blue-100/70">
          © {new Date().getFullYear()} Europa Cloud — All rights reserved.
        </div>
      </div>
    </footer>
  )
}
