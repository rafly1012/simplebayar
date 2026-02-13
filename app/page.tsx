import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero";
import Layanan from "@/components/layanan";
import Tentang from "@/components/tentang";
import Mengapa from "@/components/mengapa";
import Footer from "@/components/footer";

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
    </>
  );
}
