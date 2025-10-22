import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <header className="bg-white border-b">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-brand flex items-center justify-center text-white font-bold">NV</div>
            <div>
              <h1 className="text-lg font-semibold">Nile Valley Trade</h1>
              <p className="text-sm text-gray-500">Quality Driven</p>
            </div>
          </div>
          <nav className="flex items-center gap-4 text-sm">
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#contact">Contact</a>
            <a className="btn" href="https://wa.me/971552029146?text=Hello%20Nile%20Valley%20Trade" target="_blank" rel="noreferrer">WhatsApp</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="relative h-[420px] md:h-[520px] w-full">
          <Image src="/images/hero.jpg" alt="Logistics and trade" fill style={{ objectFit: 'cover' }} />
          <div className="absolute inset-0 bg-[rgba(0,74,173,0.45)] flex items-center">
            <div className="container text-white">
              <h2 className="text-3xl md:text-5xl font-bold">Quality Driven to Your Door</h2>
              <p className="mt-4 max-w-xl">Connecting markets through quality, trust, and taste. Strategic sourcing and timely delivery across regional and international markets.</p>
              <div className="mt-6 flex gap-3">
                <a className="btn" href="mailto:info@nilevalleytrade.com">Email Us</a>
                <a className="btn" href="https://wa.me/971552029146?text=Hello%20Nile%20Valley%20Trade" target="_blank" rel="noreferrer">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold">Who We Are</h3>
            <p className="mt-4 text-gray-700">Nile Valley Trade leverages strategic sourcing, efficient operations, and strong industry knowledge to deliver products that meet both regional and international standards. Our commitment to quality and timely delivery makes us a trusted partner.</p>
            <ul className="mt-4 space-y-2">
              <li>• Efficient & Committed</li>
              <li>• Integrity & Professionalism</li>
              <li>• Reliability & Growth</li>
              <li>• Quality & Consistency</li>
            </ul>
          </div>
          <div className="card">
            <Image src="/images/about.jpg" alt="About image" width={800} height={600} style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="container">
          <h3 className="text-2xl font-semibold">Our Product Categories</h3>
          <p className="text-gray-600 mt-2">Packed Food · Canned Food · Citrus · Seeds</p>
          <div className="grid md:grid-cols-4 gap-6 mt-6">
            <div className="card text-center">
              <Image src="/images/products/p1.jpg" alt="Packed Food" width={400} height={250} className="mx-auto" />
              <h4 className="mt-3 font-semibold">Packed Food</h4>
            </div>
            <div className="card text-center">
              <Image src="/images/products/p2.jpg" alt="Canned Food" width={400} height={250} className="mx-auto" />
              <h4 className="mt-3 font-semibold">Canned Food</h4>
            </div>
            <div className="card text-center">
              <Image src="/images/products/p3.jpg" alt="Citrus" width={400} height={250} className="mx-auto" />
              <h4 className="mt-3 font-semibold">Citrus</h4>
            </div>
            <div className="card text-center">
              <Image src="/images/products/p4.jpg" alt="Seeds" width={400} height={250} className="mx-auto" />
              <h4 className="mt-3 font-semibold">Seeds</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="container grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold">Contact Us</h3>
            <p className="mt-4 text-gray-700">Email: <a className="text-brand" href="mailto:info@nilevalleytrade.com">info@nilevalleytrade.com</a></p>
            <p>WhatsApp: <a className="text-brand" href="https://wa.me/971552029146">+971552029146</a></p>
            <p className="mt-4">Freezone, Ajman - UAE<br/>Sidigaber, Alexandria - EGYPT</p>
          </div>
          <div className="card">
            <form className="space-y-4" onSubmit={(e)=>{e.preventDefault(); alert('Form not wired — replace with your backend or Formspree.')}}>
              <input className="w-full border p-3 rounded" placeholder="Your name" />
              <input className="w-full border p-3 rounded" placeholder="Email" />
              <textarea className="w-full border p-3 rounded" rows="5" placeholder="Message" />
              <div className="flex gap-2">
                <button className="btn" type="submit">Send Message</button>
                <a className="inline-block px-4 py-2 border rounded text-sm" href="https://wa.me/971552029146">Chat on WhatsApp</a>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Nile Valley Trade — Quality Driven</p>
          <div className="text-sm text-gray-600">info@nilevalleytrade.com</div>
        </div>
      </footer>
    </main>
  )
}
