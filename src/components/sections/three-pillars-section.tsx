import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Landmark, Rocket, Lightbulb, ArrowLeft, Users, Building, Zap } from 'lucide-react';
import Link from 'next/link';

const PILLARS = [
  {
    icon: Landmark,
    title: "بانکا نئو-بانک",
    subtitle: "قلب اکوسیستم مالی",
    description: "راهکارهای بانکی سفارشی‌شده برای صنایع، تبدیل بانکداری سنتی به ابزاری استراتژیک برای درآمدزایی و رشد.",
    features: ["نرم‌افزار یکپارچه", "API های انحصاری", "SCF پیشرفته"],
    stats: { value: "18+", label: "بانک متصل" },
    color: "bg-gradient-to-br from-blue-50 to-indigo-100",
    iconBg: "bg-blue-500",
    href: "/services"
  },
  {
    icon: Rocket,
    title: "مرکز نوآوری درخت آبی",
    subtitle: "هاب فین‌تک و لندتک",
    description: "مرکز نوآوری با فضای کاری ۹,۵۱۶ متر مربع، محلی برای رشد و توسعه استارتاپ‌های نوآور و فناوری‌های پیشرفته مالی.",
    features: ["فضای کار اشتراکی", "شتابدهی استارتاپ", "توسعه فناوری"],
    stats: { value: "9516", label: "متر مربع فضا" },
    color: "bg-gradient-to-br from-emerald-50 to-green-100",
    iconBg: "bg-emerald-500",
    href: "/innovation"
  },
  {
    icon: Lightbulb,
    title: "انجمن صنفی طراحان",
    subtitle: "شبکه صنعتی قدرتمند",
    description: "شبکه‌ای صنعتی با بیش از ۷۰۰ عضو فعال، ایجاد هم‌افزایی و فرصت‌های جدید برای توسعه و گسترش در صنعت.",
    features: ["شبکه‌سازی حرفه‌ای", "آموزش تخصصی", "پشتیبانی صنفی"],
    stats: { value: "700+", label: "عضو فعال" },
    color: "bg-gradient-to-br from-purple-50 to-pink-100",
    iconBg: "bg-purple-500",
    href: "/about"
  },
];

export function ThreePillarsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary via-white to-accent/5">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-headline">
            سه ستون اصلی اکوسیستم بانکا
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            قدرت ما در ترکیب منحصربه‌فرد نوآوری، تخصص بانکی و شبکه صنعتی نهفته است
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {PILLARS.map((pillar, index) => (
            <Card
              key={pillar.title}
              className={`group hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border-0 overflow-hidden ${pillar.color}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="text-center pb-6">
                <div className={`mx-auto w-20 h-20 ${pillar.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xl`}>
                  <pillar.icon className="h-10 w-10 text-white" />
                </div>

                <div className="space-y-2">
                  <Badge variant="secondary" className="mb-2 bg-white/60">
                    {pillar.subtitle}
                  </Badge>
                  <CardTitle className="text-2xl font-headline">{pillar.title}</CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-center">
                  {pillar.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {pillar.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/50 rounded-lg p-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="bg-white/60 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-primary">
                    {pillar.stats.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {pillar.stats.label}
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                  variant="outline"
                  asChild
                >
                  <Link href={pillar.href}>
                    بیشتر بدانید
                    <ArrowLeft className="mr-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-4 font-headline">
            آماده همکاری با اکوسیستم جامع بانکا هستید؟
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            با ترکیب قدرت سه ستون اصلی ما، تجربه‌ای منحصربه‌فرد از بانکداری مدرن را کسب کنید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/contact">
                شروع همکاری
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
              <Link href="/about">
                درباره ما بیشتر بدانید
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}