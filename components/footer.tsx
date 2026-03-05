import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-(--breakpoint-xl)">
        <div className="flex flex-col items-center justify-between gap-x-2 gap-y-5 px-6 py-8 sm:flex-row xl:px-0">
          <div className="text-muted-foreground flex h-5 items-center justify-center gap-4 sm:order-last">
            <Link href="/syarat-dan-ketentuan" className="hover:underline">
              Syarat dan Ketentuan
            </Link>
            <Separator orientation="vertical" className="mx-2" />
            <Link href="/kebijakan-privasi" className="hover:underline">
              Kebijakan Privasi
            </Link>
          </div>

          <span className="text-muted-foreground text-center sm:text-left">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="/" target="_blank">
              SimpleBayar
            </Link>
            , siap melayani.
          </span>
        </div>
      </div>
    </footer>
  );
}
