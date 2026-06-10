export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/6285177897643"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 px-5 py-4 rounded-full shadow-lg z-50 font-bold"
      >
        WA
      </a>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur border-b border-yellow-500 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-yellow-400 font-bold text-2xl">
            KYREYDEV
          </h1>

          <div className="hidden md:flex gap-6">
            <a href="#tentang">Tentang</a>
            <a href="#layanan">Layanan</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#faq">FAQ</a>
            <a href="#kontak">Kontak</a>
          </div>

        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

        <h1 className="text-6xl md:text-8xl font-extrabold text-yellow-400">
          KYREYDEV
        </h1>

        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Jasa Pembuatan Website, Aplikasi Android,
          Sistem Informasi, Dashboard dan Software Custom
          Profesional untuk UMKM, Sekolah dan Perusahaan.
        </p>

        <div className="mt-10 flex gap-4 flex-wrap justify-center">

          <a
            href="https://wa.me/6285177897643"
            target="_blank"
            className="bg-green-500 px-8 py-4 rounded-xl font-semibold"
          >
            Konsultasi Gratis
          </a>

          <a
            href="#portfolio"
            className="border border-yellow-500 px-8 py-4 rounded-xl"
          >
            Lihat Portfolio
          </a>

        </div>

      </section>

      {/* Tentang */}
      <section id="tentang" className="py-24 px-6 bg-zinc-950">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-yellow-400">
            Tentang KYREYDEV
          </h2>

          <p className="mt-6 text-gray-300">
            KYREYDEV adalah jasa pengembangan Website,
            Android dan Software Custom yang membantu
            bisnis berkembang melalui teknologi modern.
          </p>

        </div>

      </section>

      {/* Statistik */}
      <section className="py-20 px-6">

        <div className="grid md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="text-5xl font-bold text-yellow-400">50+</h3>
            <p>Project Selesai</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-yellow-400">20+</h3>
            <p>Klien Aktif</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-yellow-400">99%</h3>
            <p>Kepuasan Klien</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-yellow-400">24/7</h3>
            <p>Support</p>
          </div>

        </div>

      </section>

      {/* Layanan */}
      <section id="layanan" className="py-24 px-6">

        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-16">
          Layanan Kami
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="border border-yellow-500 rounded-2xl p-6">
            <h3 className="text-2xl font-bold mb-3">Website</h3>
            <p>Company Profile, Landing Page, Toko Online dan Sistem Informasi.</p>
          </div>

          <div className="border border-yellow-500 rounded-2xl p-6">
            <h3 className="text-2xl font-bold mb-3">Android App</h3>
            <p>Aplikasi Android custom sesuai kebutuhan bisnis.</p>
          </div>

          <div className="border border-yellow-500 rounded-2xl p-6">
            <h3 className="text-2xl font-bold mb-3">Software Custom</h3>
            <p>ERP, Dashboard, Inventori dan Otomatisasi Bisnis.</p>
          </div>

        </div>

      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24 px-6 bg-zinc-950">

        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-16">
          Portfolio
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="border border-gray-700 rounded-xl p-6">
            <h3 className="font-bold text-xl">
              Sistem Informasi Sekolah
            </h3>
            <p className="text-gray-400 mt-2">
              Absensi, pembayaran dan manajemen siswa.
            </p>
          </div>

          <div className="border border-gray-700 rounded-xl p-6">
            <h3 className="font-bold text-xl">
              E-Commerce
            </h3>
            <p className="text-gray-400 mt-2">
              Toko online modern dengan pembayaran digital.
            </p>
          </div>

          <div className="border border-gray-700 rounded-xl p-6">
            <h3 className="font-bold text-xl">
              Dashboard Bisnis
            </h3>
            <p className="text-gray-400 mt-2">
              Monitoring data dan laporan realtime.
            </p>
          </div>

        </div>

      </section>

      {/* Keunggulan */}
      <section className="py-24 px-6">

        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-16">
          Kenapa Memilih Kami
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">

          <div className="border border-yellow-500 rounded-xl p-8">
            ⚡<br />Pengerjaan Cepat
          </div>

          <div className="border border-yellow-500 rounded-xl p-8">
            🛡️<br />Garansi Support
          </div>

          <div className="border border-yellow-500 rounded-xl p-8">
            🚀<br />Teknologi Modern
          </div>

        </div>

      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 bg-zinc-950">

        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-16">
          FAQ
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">

          <div className="border border-yellow-500 rounded-xl p-5">
            <h3 className="font-bold">Berapa harga website?</h3>
            <p>Harga menyesuaikan kebutuhan project.</p>
          </div>

          <div className="border border-yellow-500 rounded-xl p-5">
            <h3 className="font-bold">Berapa lama pengerjaan?</h3>
            <p>Rata-rata 3–14 hari kerja.</p>
          </div>

          <div className="border border-yellow-500 rounded-xl p-5">
            <h3 className="font-bold">Apakah ada revisi?</h3>
            <p>Ya, tersedia revisi sesuai kesepakatan.</p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section id="kontak" className="py-24 px-6 text-center">

        <h2 className="text-5xl font-bold text-yellow-400">
          Siap Memulai Project?
        </h2>

        <p className="text-gray-300 mt-6">
          Konsultasi GRATIS melalui WhatsApp.
        </p>

        <a
          href="https://wa.me/6285177897643"
          target="_blank"
          className="inline-block mt-10 bg-green-500 px-10 py-5 rounded-xl font-semibold"
        >
          Chat WhatsApp
        </a>

      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-10 text-center">

        <h3 className="text-2xl font-bold text-yellow-400">
          KYREYDEV
        </h3>

        <p className="text-gray-400 mt-3">
          Website Development • Android Development • Software Custom
        </p>

        <p className="text-gray-500 mt-4">
          © 2026 KYREYDEV. All Rights Reserved.
        </p>

      </footer>

    </main>
  );
}