import {
  BookCheck,
  ChartPie,
  FolderSync,
  Goal,
  Users,
  Zap,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AnimateIcon } from "./animate-ui/icons/icon";
import { Router } from "./animate-ui/icons/router";
import { Bot } from "./animate-ui/icons/bot";
import { LockKeyhole } from "./animate-ui/icons/lock-keyhole";
import { CloudUpload } from "./animate-ui/icons/cloud-upload";
import { SlidersHorizontal } from "./animate-ui/icons/sliders-horizontal";
import { Layers } from "./animate-ui/icons/layers";

const features = [
  {
    icon: Router,
    title: "IP PUBLIC GATEWAY",
    description:
      "Easily uncover untapped areas to explore and expand your reach effortlessly.",
  },
  {
    icon: LockKeyhole,
    title: "VPN PREMIUM",
    description:
      "Create valuable content that resonates, inspires trust, and positions you as an expert.",
  },
  {
    icon: CloudUpload,
    title: "SETUP/BAYAR HOSTING",
    description:
      "Gain immediate, actionable insights with a quick glance, enabling fast decision-making.",
  },
  {
    icon: Layers,
    title: "SETUP/BAYAR SERVER",
    description:
      "Boost audience engagement with interactive features like polls, quizzes, and forms.",
  },
  {
    icon: SlidersHorizontal,
    title: "PEMBUATAN APLIKASI/WEBSITE",
    description:
      "Streamline your processes by automating repetitive tasks, saving time and reducing effort.",
  },
  {
    icon: Bot,
    title: "KONSULTASI IT",
    description:
      "Supercharge your growth by implementing strategies that drive results quickly and efficiently.",
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
                  <div className="ml-6 h-40 rounded-tl-xl bg-muted transform-gpu transition-transform duration-300 ease-out group-hover:scale-110" />
                </CardContent>
              </Card>
            </AnimateIcon>
          ))}
        </div>
      </div>
    </div>
  );
}
