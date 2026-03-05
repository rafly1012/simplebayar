import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero";
import Layanan from "@/components/layanan";
import Tentang from "@/components/tentang";
import Mengapa from "@/components/mengapa";
import Footer from "@/components/footer";
import { LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center px-4 py-6">
        <div className="mx-auto w-full max-w-(--breakpoint-xl)">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-1 size-full overflow-hidden"
          >
            <div className="absolute inset-y-0 left-4 w-px bg-linear-to-b from-transparent via-border to-border md:left-8" />
            <div className="absolute inset-y-0 right-4 w-px bg-linear-to-b from-transparent via-border to-border md:right-8" />
            <div className="absolute inset-y-0 left-8 w-px bg-linear-to-b from-transparent via-border/50 to-border/50 md:left-12" />
            <div className="absolute inset-y-0 right-8 w-px bg-linear-to-b from-transparent via-border/50 to-border/50 md:right-12" />
          </div>
          <HeroSection />
          <section className="space-y-12">
            <div id="layanan" className="py-10">
              <Layanan />
            </div>
            <div id="tentang" className="py-10">
              <Tentang />
            </div>
            <div id="mengapa" className="py-10">
              <Mengapa />
            </div>
          </section>
        </div>
      </div>
      <Footer />

      <Button className="fixed bottom-20 right-6 z-50" asChild>
        <a
          href="https://dashboard.simplebayar.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LayoutDashboard />
          <span>Login Dashboard</span>
        </a>
      </Button>

      <Button
        className="fixed bottom-6 right-6 z-50"
        variant="secondary"
        asChild
      >
        <a
          href="https://api.whatsapp.com/send/?phone=%2B6283892906585&text=Halo+SimpleBayar&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Chat WhatsApp</span>
        </a>
      </Button>
    </>
  );
}
