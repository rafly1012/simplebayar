import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi | SimpleBayar",
  description: "Kebijakan privasi penggunaan layanan SimpleBayar.",
};

export default function KebijakanPrivasi() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto py-10">
          <h1 className="text-3xl font-bold mb-2">Kebijakan Privasi</h1>
          <p className="text-muted-foreground mb-8">
            Kebijakan Privasi ini menjelaskan bagaimana SimpleBayar
            mengumpulkan, menggunakan, dan melindungi data pribadi pengguna.
          </p>
          <div className="text-muted-foreground space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                1. Informasi yang Dikumpulkan
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Informasi identitas (nama, email, nomor telepon).</li>
                <li>
                  Informasi transaksi (riwayat pembayaran, metode pembayaran).
                </li>
                <li>Data teknis (alamat IP, browser, perangkat).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                2. Penggunaan Informasi
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Untuk memproses transaksi pembayaran.</li>
                <li>Untuk memberikan dukungan layanan pelanggan.</li>
                <li>Untuk meningkatkan kualitas layanan dan keamanan.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                3. Perlindungan Data
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  SimpleBayar menggunakan langkah keamanan teknis dan
                  administratif untuk melindungi data pengguna.
                </li>
                <li>
                  Data tidak akan dibagikan kepada pihak ketiga tanpa
                  persetujuan pengguna, kecuali diwajibkan oleh hukum.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                4. Cookie &amp; Teknologi Serupa
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Website SimpleBayar dapat menggunakan cookie untuk
                  meningkatkan pengalaman pengguna.
                </li>
                <li>
                  Pengguna dapat menonaktifkan cookie melalui pengaturan
                  browser, namun beberapa layanan mungkin tidak berfungsi
                  optimal.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                5. Hak Pengguna
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Pengguna berhak meminta akses, koreksi, atau penghapusan data
                  pribadi sesuai hukum yang berlaku.
                </li>
                <li>
                  Permintaan dapat diajukan melalui email resmi SimpleBayar.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                6. Perubahan Kebijakan
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  SimpleBayar dapat memperbarui Kebijakan Privasi ini
                  sewaktu-waktu dan akan mengumumkannya di website resmi.
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
