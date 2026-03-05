import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syarat dan Ketentuan | SimpleBayar",
  description: "Syarat dan ketentuan penggunaan layanan SimpleBayar.",
};

export default function SyaratDanKetentuan() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto py-10">
          <h1 className="text-3xl font-bold mb-2">Syarat dan Ketentuan</h1>
          <p className="text-muted-foreground mb-8">
            Selamat datang di SimpleBayar. Dengan menggunakan layanan kami, Anda
            menyetujui Syarat &amp; Ketentuan berikut:
          </p>
          <div className="text-muted-foreground space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                1. Definisi
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-medium text-foreground">Pengguna</span>{" "}
                  adalah setiap individu atau entitas yang mengakses dan
                  menggunakan layanan SimpleBayar.
                </li>
                <li>
                  <span className="font-medium text-foreground">Layanan</span>{" "}
                  adalah semua fitur, produk, dan jasa yang disediakan melalui
                  platform SimpleBayar.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                2. Penggunaan Layanan
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Pengguna wajib memberikan informasi yang benar, akurat, dan
                  terbaru saat mendaftar maupun menggunakan layanan.
                </li>
                <li>
                  Pengguna tidak diperkenankan menggunakan layanan untuk tujuan
                  yang melanggar hukum, menipu, atau merugikan pihak lain.
                </li>
                <li>
                  SimpleBayar berhak menangguhkan atau menghentikan layanan
                  kepada pengguna yang melanggar ketentuan.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                3. Pembayaran dan Transaksi
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Semua transaksi yang dilakukan melalui SimpleBayar dianggap
                  sah apabila telah sesuai dengan prosedur pembayaran yang
                  berlaku.
                </li>
                <li>
                  SimpleBayar tidak bertanggung jawab atas kesalahan input atau
                  kelalaian pengguna saat melakukan transaksi.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                4. Batasan Tanggung Jawab
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  SimpleBayar berupaya menjaga layanan tetap berjalan dengan
                  baik, namun tidak menjamin layanan bebas dari gangguan teknis.
                </li>
                <li>
                  SimpleBayar tidak bertanggung jawab atas kerugian langsung
                  maupun tidak langsung yang timbul akibat penggunaan layanan.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                5. Perubahan Ketentuan
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  SimpleBayar berhak mengubah Syarat &amp; Ketentuan ini
                  sewaktu-waktu. Perubahan akan diumumkan melalui website resmi.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                6. Hukum yang Berlaku
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Syarat &amp; Ketentuan ini tunduk pada hukum Republik
                  Indonesia.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
