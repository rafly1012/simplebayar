import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AnimateIcon } from "./animate-ui/icons/icon";
import { Router } from "./animate-ui/icons/router";
import { Bot } from "./animate-ui/icons/bot";
import { LockKeyhole } from "./animate-ui/icons/lock-keyhole";
import { CloudUpload } from "./animate-ui/icons/cloud-upload";
import { SlidersHorizontal } from "./animate-ui/icons/sliders-horizontal";
import { Layers } from "./animate-ui/icons/layers";
import Image from "next/image";

const features = [
  {
    icon: Router,
    title: "IP PUBLIC GATEWAY",
    description:
      "Menyediakan IP publik stabil dan aman untuk akses server, CCTV, atau layanan jaringan dari mana saja.",
    image: "/ip-public-gateway.png",
  },
  {
    icon: LockKeyhole,
    title: "VPN PREMIUM",
    description:
      "Layanan VPN cepat dan terenkripsi untuk keamanan akses data serta koneksi jarak jauh yang aman.",
    image: "/vpn-premium.png",
  },
  {
    icon: CloudUpload,
    title: "SETUP/BAYAR HOSTING",
    description:
      "Bantuan setup dan pembayaran hosting agar website Anda langsung online tanpa ribet.",
    image: "/setup-bayar-hosting.png",
  },
  {
    icon: Layers,
    title: "SETUP/BAYAR SERVER",
    description:
      "Konfigurasi dan manajemen server (VPS/Dedicated) yang optimal, aman, dan siap digunakan.",
    image: "/setup-bayar-server.png",
  },
  {
    icon: SlidersHorizontal,
    title: "PEMBUATAN APLIKASI/WEBSITE",
    description:
      "Pengembangan aplikasi dan website profesional, responsif, dan sesuai kebutuhan bisnis Anda.",
    image: "/pembuatan-aplikasi-website.png",
  },
  {
    icon: Bot,
    title: "KONSULTASI IT",
    description:
      "Solusi dan strategi IT yang tepat untuk meningkatkan efisiensi, keamanan, dan performa bisnis.",
    image: "/konsultasi-it.png",
  },
];

export default function Layanan() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full px-6 py-10">
        <h2 className="text-pretty font-semibold text-4xl tracking-[-0.03em] sm:max-w-xl md:text-[2.5rem] md:leading-[1.2]">
          Layanan Lengkap Kami
        </h2>
        <p className="mt-2 text-lg text-muted-foreground sm:text-xl">
          Silahkan hubungi kami untuk layanan lainnya.
        </p>
        <div className="mx-auto mt-10 grid w-full gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <AnimateIcon animateOnHover key={feature.title} asChild>
              <Card className="group flex flex-col overflow-hidden rounded-xl border pb-0 transition-all duration-300 ease-out">
                <CardHeader>
                  <feature.icon />
                  <h4 className="mt-3! font-semibold text-xl tracking-tight">
                    {feature.title}
                  </h4>
                  <p className="mt-1 text-[17px] text-muted-foreground">
                    {feature.description}
                  </p>
                </CardHeader>
                <CardContent className="mt-auto px-0 pb-0">
                  <div className="relative ml-6 h-40 w-full">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="rounded-tl-xl object-cover transform-gpu transition-transform duration-300 ease-out group-hover:scale-110"
                    />
                  </div>
                </CardContent>
              </Card>
            </AnimateIcon>
          ))}
        </div>
      </div>
    </div>
  );
}
