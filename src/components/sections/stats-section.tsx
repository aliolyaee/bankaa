"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 18, label: "اتصال به بانک‌های معتبر", suffix: "+" },
  { value: 700, label: "عضو فعال در انجمن صنفی", suffix: "+" },
  { value: 9516, label: "متر مربع فضای نوآوری", suffix: "" },
  { value: 6, label: "پروژه ملی در حال اجرا", suffix: "" },
];

interface AnimatedCounterProps {
  to: number;
  inView: boolean;
}

function AnimatedCounter({ to, inView }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const duration = 2000;
  const frameRate = 1000 / 60;
  const totalFrames = Math.round(duration / frameRate);
  const step = to / totalFrames;

  useEffect(() => {
    if (!inView) return;

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
  }, [to, totalFrames, frameRate, inView]);

  return <span>{count.toLocaleString('fa-IR')}</span>;
}

export function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-primary via-emerald-700 to-teal-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M20 20c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm0 0c0 11 9 20 20 20s20-9 20-20-9-20-20-20-20 9-20 20z'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      <div className="container relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">
            اعداد و ارقام موفقیت
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            نگاهی به دستاوردهای ما در مسیر تحول صنایع ایران
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 mb-4 group-hover:bg-white/20 transition-colors">
                <div className="text-4xl md:text-6xl font-bold text-accent mb-2">
                  {inView && <AnimatedCounter to={stat.value} inView={inView} />}
                  {stat.suffix}
                </div>
                <div className="text-sm md:text-base text-white/80 font-medium leading-tight">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-teal-400/20 rounded-full blur-2xl"></div>
      </div>
    </section>
  );
}