import React from 'react';
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Shield, Zap, TrendingUp, Palette } from 'lucide-react';

const SERVICES = [
  {
    icon: Shield,
    title: "نرم‌افزار یکپارچه بانکی",
    description: "اتصال به بیش از ۱۸ بانک در یک داشبورد واحد",
    features: ["مدیریت چندبانکه", "گزارش‌گیری لحظه‌ای", "امنیت بانکی"],
    href: "/services/banking-software",
    color: "bg-blue-50 border-blue-200 hover:bg-blue-100"
  },
  {
    icon: Zap,
    title: "API های انحصاری",
    description: "ابزارهای سفارشی برای نیازهای خاص شما",
    features: ["یکپارچه‌سازی آسان", "مستندات کامل", "پشتیبانی ۲۴/۷"],
    href: "/services/api-solutions",
    color: "bg-purple-50 border-purple-200 hover:bg-purple-100"
  },
  {
    icon: TrendingUp,
    title: "تامین مالی زنجیره‌ای",
    description: "بهینه‌سازی جریان نقدی در زنجیره تامین",
    features: ["SCF پیشرفته", "کاهش ریسک", "افزایش نقدینگی"],
    href: "/services/scf",
    color: "bg-emerald-50 border-emerald-200 hover:bg-emerald-100"
  },
  {
    icon: Palette,
    title: "طراحی اکوسیستم مالی",
    description: "ایجاد اکوسیستم‌های مالی خاص صنعت",
    features: ["طراحی اختصاصی", "یکپارچگی کامل", "رشد پایدار"],
    href: "/services/ecosystem-design",
    color: "bg-orange-50 border-orange-200 hover:bg-orange-100"
  }
];

export function CoreServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-headline">
            خدمات کلیدی ما
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            مجموعه‌ای جامع از راهکارهای مالی برای تحول دیجیتال صنایع
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-0 ${service.color}`}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white group-hover:scale-110 transition-all shadow-lg">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {service.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs bg-white/60">
                      {feature}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="group-hover:bg-white/80 group-hover:text-primary transition-colors w-full"
                  asChild
                >
                  <Link href={service.href}>
                    بیشتر بدانید
                    <ArrowLeft className="mr-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="hover:bg-primary hover:text-white border-primary text-primary" asChild>
            <Link href="/services">
              مشاهده همه خدمات
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}