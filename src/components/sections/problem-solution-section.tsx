import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const problems = [
  "عدم شفافیت و پیچیدگی فرآیندهای بانکی",
  "کارمزدهای بالا و هزینه‌های پنهان",
  "دسترسی محدود به ابزارهای مالی مدرن",
  "عدم تطابق خدمات بانکی با نیازهای خاص صنعت",
];

const solutions = [
  "شفافیت کامل با نرم‌افزار یکپارچه حسابداری",
  "کاهش هزینه‌ها از طریق بهینه‌سازی فرآیندها",
  "ارائه APIهای بانکی انحصاری و ابزارهای سفارشی",
  "طراحی اکوسیستم مالی متناسب با هر صنعت",
];

export function ProblemSolutionSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-secondary to-accent/5">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-headline">
            چالش‌های امروز، راهکارهای فردا
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            صنایع ایران با چالش‌های پیچیده مالی روبرو هستند. ما این چالش‌ها را به فرصت‌هایی برای رشد تبدیل می‌کنیم
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Problems */}
          <Card className="border-red-200 bg-red-50/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-red-800 text-2xl flex items-center gap-3 font-headline">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  ⚠️
                </div>
                چالش‌های بانکداری سنتی
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{problem}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Solutions */}
          <Card className="border-primary/30 bg-primary/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-primary text-2xl flex items-center gap-3 font-headline">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  ✨
                </div>
                راهکارهای نوآورانه بانکا
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{solution}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}