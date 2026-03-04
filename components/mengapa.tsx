import {
  BadgeCentIcon,
  Zap,
  Blocks,
  HeartHandshake,
  Cpu,
  PackageOpen,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    icon: Zap,
    title: "Sangat Cepat",
    description:
      "Performa bukanlah pemikiran belakangan; kami mengutamakannya sejak awal!",
  },
  {
    icon: HeartHandshake,
    title: "Mudah Digunakan",
    description: "Proses pembayaran yang sederhana dan cepat, tanpa ribet.",
  },
  {
    icon: Cpu,
    title: "Teknologi Terdepan",
    description:
      "SimpleBayar didukung oleh teknologi terkini untuk keamanan dan keandalan.",
  },
  {
    icon: Blocks,
    title: "Sangat Fleksibel",
    description:
      "Dibuat untuk beradaptasi dengan kebutuhan teknologi Anda yang beragam.",
  },
  {
    icon: PackageOpen,
    title: "Beragam Layanan",
    description: "Berbagai layanan tekonologi siap membantu keperluan Anda.",
  },
  {
    icon: BadgeCentIcon,
    title: "Gratis Biaya",
    description:
      "Pendaftaran Tidak ada biaya tersembunyi, sehingga Anda bisa fokus pada kebutuhan Anda yang lain.",
  },
];

export default function Mengapa() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full px-6 py-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-10">
            <header className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
                Mengapa pilih kami
              </h2>
              <p className="text-muted-foreground text-base text-pretty md:text-lg">
                Kami percaya bahwa untuk menciptakan layanan yang luar biasa,
                diperlukan komitmen terhadap kualitas dan inovasi dalam setiap
                langkah.
              </p>
            </header>

            <div className="grid gap-6 sm:grid-cols-3 sm:gap-8">
              {features.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="group flex flex-col items-start gap-3 rounded-lg"
                >
                  <Badge className="inline-flex items-center justify-center rounded-full p-3">
                    <Icon
                      className="size-5! group-hover:scale-110 transition-transform"
                      aria-hidden="true"
                    />
                  </Badge>
                  <div className="space-y-1.5">
                    <h3 className="text-foreground text-base font-semibold md:text-lg">
                      {title}
                    </h3>
                    <p className="text-muted-foreground text-sm text-balance">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-muted relative z-10 overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="relative aspect-4/3 w-full overflow-hidden">
                <Image
                  src="/mengapa.jpg"
                  alt="Mengapa Kami"
                  fill
                  className="object-cover grayscale"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
