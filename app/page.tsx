export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">

        <h1 className="text-6xl md:text-8xl font-extrabold text-yellow-500">
          KYREYDEV
        </h1>

        <p className="mt-6 text-xl text-gray-300 max-w-2xl">
          Solusi Website, Mobile Apps dan Software Custom
          untuk membantu bisnis berkembang lebih cepat.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">

          <a
            href="https://wa.me/6285177897643"
            className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
          >
            Konsultasi Gratis
          </a>

          <a
            href="#portfolio"
            className="border border-yellow-500 px-8 py-4 rounded-xl hover:bg-yellow-500 hover:text-black transition"
          >
            Lihat Portfolio
          </a>

        </div>

      </section>

      {/* STATISTIK */}
      <section className="py-20 px-6">

        <div className="grid md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="text-4xl font-bold text-yellow-500">50+</h3>
            <p>Project Selesai</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-yellow-500">20+</h3>
            <p>Klien Aktif</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-yellow-500">99%</h3>
            <p>Kepuasan Klien</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-yellow-500">24/7</h3>
            <p>Support</p>
          </div>

        </div>

      </section>

      {/* LAYANAN */}
      <section className="py-20 px-6">

        <h2 className="text-5xl font-bold text-center text-yellow-500 mb-12">
          Layanan Kami
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border border-yellow-500 rounded-2xl p-6">
            <h3 className="text-2xl font-bold mb-3">Website</h3>
            <p>
              Company Profile, Landing Page, Toko Online,
              Website Sekolah dan lainnya.
            </p>
          </div>

          <div className="border border-yellow-500 rounded-2xl p-6">
            <h3 className="text-2xl font-bold mb-3">Aplikasi Android</h3>
            <p>
              Aplikasi Android custom sesuai kebutuhan bisnis.
            </p>
          </div>

          <div className="border border-yellow-500 rounded-2xl p-6">
            <h3 className="text-2xl font-bold mb-3">Software Custom</h3>
            <p>
              Sistem informasi, dashboard admin dan ERP.
            </p>
          </div>

        </div>

      </section>

      {/* PORTFOLIO */}
      <section
        id="portfolio"
        className="py-20 px-6 bg-zinc-950"
      >

        <h2 className="text-5xl font-bold text-center mb-12 text-yellow-500">
          Portfolio
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border border-yellow-500 rounded-xl p-6">
            <h3 className="text-xl font-bold">
              Sistem Informasi Sekolah
            </h3>
            <p className="mt-3">
              Manajemen siswa, guru dan laporan sekolah.
            </p>
          </div>

          <div className="border border-yellow-500 rounded-xl p-6">
            <h3 className="text-xl font-bold">
              E-Commerce
            </h3>
            <p className="mt-3">
              Toko online lengkap dengan pembayaran.
            </p>
          </div>

          <div className="border border-yellow-500 rounded-xl p-6">
            <h3 className="text-xl font-bold">
              Aplikasi Android
            </h3>
            <p className="mt-3">
              Aplikasi custom untuk bisnis dan UMKM.
            </p>
          </div>

        </div>

      </section>

      {/* TESTIMONI */}
      <section className="py-20 px-6">

        <h2 className="text-5xl font-bold text-center mb-12 text-yellow-500">
          Testimoni Klien
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border rounded-xl p-6">
            <p>⭐⭐⭐⭐⭐</p>
            <p className="mt-3">
              Pengerjaan cepat dan hasil memuaskan.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <p>⭐⭐⭐⭐⭐</p>
            <p className="mt-3">
              Website profesional dan responsive.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <p>⭐⭐⭐⭐⭐</p>
            <p className="mt-3">
              Support sangat membantu dan ramah.
            </p>
          </div>

        </div>

      </section>

      {/* KEUNGGULAN */}
      <section className="py-20 px-6 bg-zinc-950">

        <h2 className="text-5xl font-bold text-center mb-12 text-yellow-500">
          Kenapa Memilih Kami
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">

          <div className="border border-yellow-500 rounded-xl p-8">
            ⚡<br />
            Pengerjaan Cepat
          </div>

          <div className="border border-yellow-500 rounded-xl p-8">
            🛡️<br />
            Garansi Support
          </div>

          <div className="border border-yellow-500 rounded-xl p-8">
            🚀<br />
            Teknologi Modern
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 text-center px-6">

        <h2 className="text-5xl font-bold text-yellow-500">
          Hubungi Kami
        </h2>

        <p className="mt-4 text-gray-300">
          Konsultasi Gratis Untuk Website, Android dan Software Custom.
        </p>

        <a
          href="https://wa.me/6285177897643"
          className="inline-block mt-8 bg-green-500 text-white px-10 py-4 rounded-xl font-bold"
        >
          Chat WhatsApp
        </a>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-12">

        <div className="text-center">

          <h3 className="text-3xl font-bold text-yellow-500">
            KYREYDEV
          </h3>

          <p className="mt-3 text-gray-400">
            Website Development • Android Development • Software House
          </p>

          <p className="mt-6 text-gray-500">
            © 2026 KYREYDEV. All Rights Reserved.
          </p>

        </div>

      </footer>

    </main>
  );
}