"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 18, label: "اتصال به بانک‌های معتبر", suffix: "+" },
  { value: 700, label: "عضو فعال در انجمن صنفی", suffix: "+" },
  { value: 9516, label: "متر مربع فضای نوآوری", suffix: "" },
  { value: 6, label: "پروژه ملی در حال اجرا", suffix: "" },
];

function AnimatedCounter({ to }: { to: number }) {
  const [count, setCount] = useState(0);
  const duration = 2000;
  const frameRate = 1000 / 60;
  const totalFrames = Math.round(duration / frameRate);
  const step = to / totalFrames;

  useEffect(() => {
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.round(to * progress);
      setCount(currentCount);

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameRate);
    return () => clearInterval(counter);
  }, [to, totalFrames, frameRate]);

  return <span>{count.toLocaleString('fa-IR')}</span>;
}


export function StatsSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl md:text-5xl font-bold">
                {inView && <AnimatedCounter to={stat.value} />}
                {stat.suffix}
              </p>
              <p className="mt-2 text-primary-foreground/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
