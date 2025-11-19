export default function Portfolio() {
  const items = [
    { title: 'Modern Loft', tag: 'Photos', img: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d91?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Lakefront Estate', tag: 'Drone', img: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1600&auto=format&fit=crop' },
    { title: 'New Build', tag: '3D Tour', img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop' },
    { title: 'City Penthouse', tag: 'Video', img: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Suburban Family', tag: 'Twilight', img: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Contemporary', tag: 'Photos', img: 'https://images.unsplash.com/photo-1502005097973-6a7082348e28?q=80&w=1600&auto=format&fit=crop' },
  ];

  return (
    <section id="portfolio" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Recent Work</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">A snapshot of the style—clean, light, and market-ready across budgets and property types.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-full bg-black text-white px-4 py-2 text-sm font-medium hover:shadow-md transition">Book Now</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <figure key={it.title} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <img src={it.img} alt={it.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between bg-gradient-to-t from-black/50 to-transparent text-white">
                <div>
                  <div className="text-sm opacity-90">{it.tag}</div>
                  <div className="font-medium">{it.title}</div>
                </div>
                <span className="text-xs rounded-full bg-white/20 px-2 py-1">HD</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
