import { cn } from "@/lib/utils";

interface AnimatedContainerProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-in" | "fade-in-up" | "fade-in-down" | "scale-in" | "slide-in-right";
  delay?: number;
  stagger?: boolean;
}

export function AnimatedContainer({
  children,
  className,
  animation = "fade-in-up",
  delay = 0,
  stagger = false,
}: AnimatedContainerProps) {
  const animationMap = {
    "fade-in": "animate-[fade-in_0.3s_ease-out_forwards]",
    "fade-in-up": "animate-[fade-in-up_0.4s_ease-out_forwards]",
    "fade-in-down": "animate-[fade-in-down_0.4s_ease-out_forwards]",
    "scale-in": "animate-[scale-in_0.2s_ease-out_forwards]",
    "slide-in-right": "animate-[slide-in-right_0.3s_ease-out_forwards]",
  };

  return (
    <div
      className={cn(
        "opacity-0",
        animationMap[animation],
        className
      )}
      style={{
        animationDelay: delay ? `${delay}ms` : undefined,
        animationFillMode: "forwards",
      }}
    >
      {children}
    </div>
  );
}

interface StaggeredListProps {
  children: React.ReactNode[];
  className?: string;
  animation?: "fade-in" | "fade-in-up" | "fade-in-down" | "scale-in" | "slide-in-right";
  delayBetween?: number;
  initialDelay?: number;
}

export function StaggeredList({
  children,
  className,
  animation = "fade-in-up",
  delayBetween = 50,
  initialDelay = 0,
}: StaggeredListProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <AnimatedContainer
          key={index}
          animation={animation}
          delay={initialDelay + index * delayBetween}
        >
          {child}
        </AnimatedContainer>
      ))}
    </div>
  );
}
