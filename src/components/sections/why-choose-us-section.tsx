import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowLeft, Users, Award, Zap, Shield, TrendingUp } from 'lucide-react';

const advantages = [
  {
    icon: Users,
    title: "تخصص عمیق در صنایع ایران",
    description: "درک کامل از چالش‌ها و فرصت‌های منحصربه‌فرد بازار ایران"
  },
  {
    icon: Award,
    title: "راهکارهای کاملاً سفارشی‌سازی‌شده",
    description: "طراحی اختصاصی متناسب با نیازهای خاص هر صنعت و کسب‌وکار"
  },
  {
    icon: Zap,
    title: "تکنولوژی پیشرفته و APIهای انحصاری",
    description: "ابزارهای نوآورانه که در هیچ جای دیگر پیدا نخواهید کرد"
  },
  {
    icon: TrendingUp,
    title: "تمرکز بر سودآوری و رشد پایدار",
    description: "هدف اصلی ما موفقیت بلندمدت مشتریان و شرکای تجاری است"
  },
  {
    icon: Shield,
    title: "شبکه گسترده صنعتی و شرکای معتبر",
    description: "دسترسی به بزرگترین شبکه مالی و صنعتی کشور"
  },
];

const achievements = [
  { number: "98%", label: "رضایت مشتریان" },
  { number: "40%", label: "کاهش هزینه‌ها" },
  { number: "24/7", label: "پشتیبانی" },
  { number: "100%", label: "امنیت تراکنش" },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary via-white to-accent/10">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image and Stats */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative">
              <Image
                src="https://picsum.photos/600/500"
                alt="تیم بانکا در حال مشاوره"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Floating Achievement Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">4</div>
                  <div className="text-sm text-muted-foreground">گواهینامه ISO</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">700+</div>
                  <div className="text-sm text-muted-foreground">عضو شبکه</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-headline">
                چرا بانکا را انتخاب کنید؟
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                ما فقط یک ارائه‌دهنده خدمات مالی نیستیم؛ ما شریک استراتژیک شما در مسیر موفقیت هستیم.
              </p>
            </div>

            {/* Advantages List */}
            <div className="space-y-4">
              {advantages.map((advantage, index) => (
                <Card
                  key={advantage.title}
                  className="border-0 bg-white/60 hover:bg-white hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                        <advantage.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{advantage.title}</h3>
                        <p className="text-sm text-muted-foreground">{advantage.description}</p>
                      </div>
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.label}
                  className="text-center p-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="text-2xl font-bold text-primary">{achievement.number}</div>
                  <div className="text-xs text-muted-foreground mt-1">{achievement.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/contact">
                  شروع همکاری
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
                <Link href="/about">
                  بیشتر درباره ما بدانید
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 font-headline">آمار اعتماد مشتریان</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">18+</div>
                <div className="text-muted-foreground">بانک همکار</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">پروژه موفق</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-muted-foreground">مشتری فعال</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">5</div>
                <div className="text-muted-foreground">سال تجربه</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}