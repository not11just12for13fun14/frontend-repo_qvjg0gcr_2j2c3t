import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <Portfolio />
      <Contact />

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-black text-white flex items-center justify-center font-semibold">RP</div>
            <span className="text-slate-700">RealPrime Media</span>
          </div>
          <div className="text-sm text-slate-500">© {new Date().getFullYear()} RealPrime Media · Real estate photography</div>
        </div>
      </footer>
    </div>
  )
}

export default App
