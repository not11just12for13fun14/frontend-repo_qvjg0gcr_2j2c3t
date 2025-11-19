export default function Services() {
  const services = [
    {
      title: 'Photos',
      desc: 'Crisp, bright imagery with clean lines and true-to-life color. Delivered in web and print resolutions.',
      price: 'From $179',
    },
    {
      title: '3D Matterport',
      desc: 'Immersive virtual tours with measurement, floor plans, and dollhouse views to showcase flow and scale.',
      price: 'From $249',
    },
    {
      title: 'Video',
      desc: 'Cinematic property films with smooth gimbal movement, detail shots, and dynamic pacing for social and MLS.',
      price: 'From $299',
    },
    {
      title: 'Drone',
      desc: 'FAA-compliant aerials that highlight location, lot lines, and neighborhood amenities with a fresh perspective.',
      price: 'From $149',
    },
    {
      title: 'Twilight',
      desc: 'Blue-hour magic—warm glow, balanced exposures, and sky swaps when needed to elevate curb appeal.',
      price: 'From $129',
    },
  ];

  return (
    <section id="services" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Services</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">Built for speed, clarity and impact. Choose a package or mix and match deliverables for your listing.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium text-slate-900">{s.title}</h3>
                <span className="text-sm text-slate-500">{s.price}</span>
              </div>
              <p className="mt-3 text-slate-600 text-sm leading-6">{s.desc}</p>
              <div className="mt-6 flex gap-3">
                <a href="#contact" className="inline-flex items-center rounded-full bg-black text-white px-4 py-2 text-sm font-medium hover:shadow-md transition">Book</a>
                <a href="#portfolio" className="inline-flex items-center rounded-full bg-white text-slate-900 ring-1 ring-slate-200 px-4 py-2 text-sm font-medium hover:bg-slate-50 transition">Samples</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
