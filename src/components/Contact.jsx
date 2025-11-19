import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
          service: e.target.service.value,
        }),
      });
      const data = await res.json();
      if (res.ok) setStatus('Thanks! We will get back to you shortly.');
      else setStatus(data?.detail || 'Something went wrong.');
    } catch (err) {
      setStatus('Network error. Please try again.');
    }
  };

  return (
    <section id="contact" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Request a Quote</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">Tell us about your property and what you need. We’ll confirm availability and turnaround.</p>
        </div>
        <form onSubmit={submit} className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <input name="name" required placeholder="Name" className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black" />
            <input name="email" type="email" required placeholder="Email" className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black" />
            <select name="service" className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black">
              <option>Photos</option>
              <option>3D Matterport</option>
              <option>Video</option>
              <option>Drone</option>
              <option>Twilight</option>
            </select>
          </div>
          <div className="space-y-4">
            <textarea name="message" rows="5" placeholder="Property address, preferred date, square footage, and any notes" className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black" />
            <button type="submit" className="inline-flex items-center rounded-xl bg-black text-white px-6 py-3 text-sm font-medium shadow-sm hover:shadow-md transition">Send Request</button>
            <div className="text-sm text-slate-600">{status}</div>
          </div>
        </form>
      </div>
    </section>
  );
}
