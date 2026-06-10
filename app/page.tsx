export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-yellow-400">
          KYREYDEV
        </h1>

        <p className="mt-6 text-xl text-gray-300 max-w-2xl">
          Jasa Pembuatan Website, Aplikasi Android, dan Software Custom
          untuk UMKM, Sekolah, Bisnis, dan Perusahaan.
        </p>

        <a
          href="https://wa.me/6285177897643"
          target="_blank"
          className="mt-8 bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
        >
          Mulai Project
        </a>
      </section>

      {/* LAYANAN */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
          Layanan Kami
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-yellow-500 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-3">Website</h3>
            <p>
              Company Profile, Landing Page, Toko Online, Website Sekolah
              dan lainnya.
            </p>
          </div>

          <div className="border border-yellow-500 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-3">Aplikasi Android</h3>
            <p>
              Aplikasi Android custom sesuai kebutuhan bisnis.
            </p>
          </div>

          <div className="border border-yellow-500 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-3">Software Custom</h3>
            <p>
              Sistem kasir, dashboard, ERP dan aplikasi internal perusahaan.
            </p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
          Portfolio
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-yellow-500 rounded-xl p-6">
            <h3 className="text-xl font-bold">Website Sekolah</h3>
            <p className="mt-2 text-gray-300">
              Sistem informasi sekolah modern.
            </p>
          </div>

          <div className="border border-yellow-500 rounded-xl p-6">
            <h3 className="text-xl font-bold">Toko Online</h3>
            <p className="mt-2 text-gray-300">
              E-Commerce custom dengan pembayaran online.
            </p>
          </div>

          <div className="border border-yellow-500 rounded-xl p-6">
            <h3 className="text-xl font-bold">Dashboard ERP</h3>
            <p className="mt-2 text-gray-300">
              Sistem manajemen bisnis terintegrasi.
            </p>
          </div>
        </div>
      </section>

      {/* KONTAK */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">
          Hubungi Kami
        </h2>

        <p className="text-gray-300 mb-8">
          Konsultasi Gratis Untuk Website, Android dan Software Custom.
        </p>

        <a
          href="https://wa.me/6285177897643"
          target="_blank"
          className="bg-green-500 px-8 py-4 rounded-xl font-bold text-white"
        >
          Chat WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-400">
        <h3 className="text-xl font-bold text-yellow-400 mb-2">
          KYREYDEV
        </h3>

        <p>Website Development • Android Development • Software Development</p>

        <p className="mt-4">
          © 2026 KYREYDEV. All Rights Reserved.
        </p>
      </footer>

    </main>
  );
}