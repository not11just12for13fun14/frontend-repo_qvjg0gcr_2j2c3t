import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-white overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft light gradient overlay for readability (doesn't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/65 to-white/90" />

      {/* Content */}
      <div className="relative z-10">
        {/* Simple top nav */}
        <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-black/80 text-white flex items-center justify-center font-semibold">RP</div>
            <span className="font-semibold tracking-tight text-slate-900">RealPrime Media</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-slate-700">
            <a href="#services" className="hover:text-black transition">Services</a>
            <a href="#portfolio" className="hover:text-black transition">Portfolio</a>
            <a href="#contact" className="hover:text-black transition">Contact</a>
            <a href="#contact" className="ml-3 inline-flex items-center rounded-full bg-black text-white px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md transition">Book a Shoot</a>
          </nav>
        </header>

        {/* Hero copy */}
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-24 sm:pt-20 md:pt-28 lg:pt-36">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-slate-900 tracking-tight">
              Light-filled real estate visuals that sell the story of your space
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-slate-600">
              Premium photography, cinematic video, immersive 3D tours, drone and twilight packages—crafted for agents, builders and designers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center rounded-full bg-black text-white px-6 py-3 text-sm font-medium shadow-sm hover:shadow-md transition">
                Get a Quote
              </a>
              <a href="#portfolio" className="inline-flex items-center rounded-full bg-white text-slate-900 ring-1 ring-slate-200 px-6 py-3 text-sm font-medium hover:bg-slate-50 transition">
                View Work
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-slate-500">
              <div className="text-sm">24–48h Delivery</div>
              <div className="h-1 w-1 rounded-full bg-slate-300" />
              <div className="text-sm">MLS & Web-Ready</div>
              <div className="h-1 w-1 rounded-full bg-slate-300" />
              <div className="text-sm">Licensed & Insured</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
