import { Mail, MessageCircleMore } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Tentang() {
  return (
    <div className="flex items-center justify-center">
      <div className="mx-auto grid w-full gap-12 px-6 py-10 lg:grid-cols-2">
        <div>
          <h2 className="text-pretty font-semibold text-4xl tracking-[-0.03em] sm:max-w-xl md:text-[2.5rem] md:leading-[1.2]">
            Tentang Kami
          </h2>
          <p className="mt-6 max-w-[60ch] text-foreground/80 sm:text-lg">
            SimpleBayar adalah penyedia solusi teknologi yang membantu bisnis di
            Indonesia dengan hosting website, keamanan siber, dan konsultasi IT.
            Kami berkomitmen untuk memberikan layanan yang aman, cepat, dan
            mudah digunakan untuk mendukung pertumbuhan digital bisnis Anda.
          </p>
          <p className="mt-6 max-w-[60ch] text-foreground/80 sm:text-lg">
            Visi Kami Menjadi mitra terpercaya dalam menyediakan solusi
            teknologi yang inovatif dan aman bagi bisnis Anda.
          </p>
          <div className="mt-12 flex items-center gap-4">
            <Button size="lg" className="rounded-full group" asChild>
              <a href="mailto:mail@simplebayar.store">
                Email
                <Mail className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              className="rounded-full group"
              size="lg"
              variant="outline"
              asChild
            >
              <Link
                href="https://api.whatsapp.com/send/?phone=%2B6283892906585&text=Halo+SimpleBayar&type=phone_number&app_absent=0"
                target="_blank"
              >
                WhatsApp
                <MessageCircleMore className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-accent">
          <Image
            src="/tentang.jpg"
            alt="Tentang Kami"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
