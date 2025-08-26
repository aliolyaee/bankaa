"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "با کمک بانکا، فرآیندهای مالی ما متحول شد. اکنون کنترل کاملی بر جریان نقدی خود داریم و توانسته‌ایم سودآوری را به طور چشمگیری افزایش دهیم.",
    name: "احمد رضایی",
    title: "مدیرعامل، فولاد مبارکه",
    rating: 5,
    avatar: "https://picsum.photos/100/100?random=1"
  },
  {
    quote: "راهکارهای نوآورانه بانکا در زمینه تامین مالی زنجیره تامین، روابط ما با تامین‌کنندگان را بهبود بخشید و باعث کاهش هزینه‌ها شد.",
    name: "مریم حسینی",
    title: "مدیر مالی، گروه صنعتی انتخاب",
    rating: 5,
    avatar: "https://picsum.photos/100/100?random=2"
  },
  {
    quote: "طراحی اکوسیستم مالی اختصاصی برای صنعت گردشگری توسط بانکا، یک نقطه عطف برای کسب‌وکار ما بود. این راهکار به ما در ارائه خدمات بهتر کمک کرد.",
    name: "علی اکبری",
    title: "بنیانگذار، هلدینگ گردشگری مارکوپولو",
    rating: 5,
    avatar: "https://picsum.photos/100/100?random=3"
  },
];

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary via-emerald-800 to-teal-900 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M0 100h100V0L0 100z' fill-opacity='.1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      <div className="container relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headline">
            داستان‌های موفقیت مشتریان
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            صدای مشتریانمان، بهترین گواه کیفیت خدمات ما
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white shadow-2xl relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 opacity-20">
              <Quote className="h-16 w-16" />
            </div>

            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Avatar */}
                <div className="text-center md:text-right">
                  <div className="relative inline-block">
                    <Image
                      src={TESTIMONIALS[currentTestimonial].avatar}
                      alt={TESTIMONIALS[currentTestimonial].name}
                      width={120}
                      height={120}
                      className="rounded-full border-4 border-white/20 shadow-xl"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-accent rounded-full p-2">
                      <Star className="h-4 w-4 text-white fill-current" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-2 space-y-6">
                  {/* Stars */}
                  <div className="flex justify-center md:justify-start">
                    {[...Array(TESTIMONIALS[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl leading-relaxed text-center md:text-right">
                    "{TESTIMONIALS[currentTestimonial].quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="text-center md:text-right">
                    <div className="font-bold text-xl text-accent">
                      {TESTIMONIALS[currentTestimonial].name}
                    </div>
                    <div className="text-white/80 mt-1">
                      {TESTIMONIALS[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 gap-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevTestimonial}
              className="text-white hover:bg-white/10 rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${index === currentTestimonial
                    ? 'bg-accent scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                    }`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextTestimonial}
              className="text-white hover:bg-white/10 rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-teal-400/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}