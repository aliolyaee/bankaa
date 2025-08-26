"use client";

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ChevronDown, PlayCircle, Shield, TrendingUp } from 'lucide-react';

const STATS = [
  { value: "18+", label: "بانک متصل", suffix: "" },
  { value: "700+", label: "عضو انجمن صنفی", suffix: "" },
  { value: "9516", label: "متر مربع فضای نوآوری", suffix: "" },
  { value: "6", label: "پروژه ملی فعال", suffix: "" }
];

interface AnimatedCounterProps {
  value: string;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
    const increment = numericValue / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count.toLocaleString('fa-IR')}</span>;
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-emerald-800 to-teal-900 text-white">
      {/* Pattern Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-20">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full text-sm">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              نسل جدید بانکداری صنعتی
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight font-headline">
              بانکداری سنتی را
              <span className="block bg-gradient-to-r from-accent to-teal-300 bg-clip-text text-transparent">
                متحول کنید
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed max-w-2xl">
              بانکا با طراحی اکوسیستم‌های مالی یکپارچه، صنایع ایران را به سوی آینده‌ای پایدار و سودآور هدایت می‌کند
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-primary-foreground h-14 px-8 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all"
                asChild
              >
                <Link href="/contact">
                  شروع همکاری
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 h-14 px-8 text-lg rounded-xl backdrop-blur"
              >
                <PlayCircle className="ml-2 h-5 w-5" />
                مشاهده دمو
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {STATS.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-accent">
                    <AnimatedCounter value={stat.value} />
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-primary-foreground/70 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-teal-400/20 rounded-3xl blur-3xl"></div>
            <Card className="relative backdrop-blur-sm bg-white/10 border-white/20 shadow-2xl">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-white text-xl">داشبورد مالی هوشمند</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-accent text-lg font-semibold">۱۸+</div>
                    <div className="text-white/80 text-sm">بانک متصل</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-accent text-lg font-semibold">۱۰۰%</div>
                    <div className="text-white/80 text-sm">شفافیت مالی</div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white text-sm">جریان نقدی</span>
                    <TrendingUp className="h-4 w-4 text-accent" />
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-accent to-teal-400 rounded-full w-3/4 animate-pulse"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-white/60" />
      </div>
    </section>
  );
}