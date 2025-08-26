import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export function ProblemSolutionSection() {
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

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">
            چالش‌های دیروز، راهکارهای امروز
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            ما چالش‌های مالی صنایع را درک کرده و راهکارهای نوآورانه‌ای برای غلبه بر آنها ارائه می‌دهیم.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800/50">
            <CardHeader>
              <CardTitle className="text-red-800 dark:text-red-300">چالش‌های بانکداری سنتی</CardTitle>
              <CardDescription className="text-red-700 dark:text-red-400">موانعی که رشد صنعت شما را کند می‌کنند.</CardDescription>
            </CardHeader>
            <div className="p-6 pt-0">
              <ul className="space-y-3">
                {problems.map((problem) => (
                  <li key={problem} className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-1 rounded-full bg-red-200 dark:bg-red-900 flex items-center justify-center flex-shrink-0">
                      <ArrowLeft className="w-3 h-3 text-red-600 dark:text-red-400" />
                    </div>
                    <span className="text-muted-foreground">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
          <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800/50">
            <CardHeader>
              <CardTitle className="text-green-800 dark:text-green-300">راهکارهای نوآورانه بانکا</CardTitle>
              <CardDescription className="text-green-700 dark:text-green-400">ابزارهایی برای تبدیل چالش به فرصت.</CardDescription>
            </CardHeader>
             <div className="p-6 pt-0">
              <ul className="space-y-3">
                {solutions.map((solution) => (
                  <li key={solution} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
