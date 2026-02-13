import { cn } from "@/lib/utils";
import AnimatedGridPattern from "./animated-grid-pattern";
import TextLoop from "./text-loop";

export default function HeroSection() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full px-6 py-32">
        <AnimatedGridPattern
          className={cn(
            "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 h-full skew-y-12",
          )}
          duration={3}
          maxOpacity={0.1}
          numSquares={30}
        />
        <div className="relative flex flex-col items-center justify-center gap-5">
          <TextLoop />
        </div>
      </div>
    </div>
  );
}
