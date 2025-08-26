import { type Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check, Lightbulb, TrendingUp, Users, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'مشاوره مالی و استراتژیک | بانکا',
  description: 'از تخصص ما برای تدوین استراتژی‌های مالی و رشد پایدار کسب‌وکارتان بهره‌مند شوید.',
};

const areas = [
    { icon: TrendingUp, title: "استراتژی‌های رشد مالی", description: "تحلیل بازار، شناسایی فرصت‌های درآمدی جدید و بهینه‌سازی مدل‌های کسب‌وکار." },
    { icon: Target, title: "بهینه‌سازی ساختار سرمایه", description: "ارزیابی و ارائه پیشنهاد برای بهترین ترکیب بدهی و سهام جهت کاهش هزینه‌ها." },
    { icon: Users, title: "جذب سرمایه و ادغام و تملیک (M&A)", description: "مشاوره در فرآیندهای جذب سرمایه‌گذار، ارزش‌گذاری و مذاکرات." },
];

export default function ConsultingPage() {
  return (
    <div className="bg-background">
       <section className="bg-secondary py-16 md:py-24">
        <div className="container text-center">
            <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                <Lightbulb className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">
                مشاوره مالی و استراتژیک
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                دانش و تجربه ما، راهنمای شما در تصمیم‌گیری‌های کلان. ما به عنوان شریک استراتژیک شما، به شما کمک می‌کنیم تا از پیچیدگی‌های مالی عبور کرده و به رشد پایدار دست یابید.
            </p>
        </div>
      </section>

       <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="relative">
                 <Image
                    src="https://picsum.photos/500/550"
                    alt="Financial Consulting"
                    width={500}
                    height={550}
                    className="rounded-lg shadow-xl object-cover"
                    data-ai-hint="business people planning"
                />
            </div>
            <div>
                 <h2 className="text-3xl font-bold text-primary font-headline">
                    فراتر از اعداد، نگاهی به آینده
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  مشاوران ما ترکیبی از متخصصان مالی، استراتژیست‌های کسب‌وکار و کارشناسان صنعت هستند. ما با درک عمیق از محیط کسب‌وکار ایران، راهکارهایی عملی و سفارشی‌سازی‌شده ارائه می‌دهیم که نتایج ملموسی به همراه دارند.
                </p>
                 <ul className="mt-6 space-y-4">
                    <li className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>تحلیل ۳۶۰ درجه:</strong> بررسی کامل وضعیت مالی، عملیاتی و استراتژیک شرکت شما.</span>
                    </li>
                     <li className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>نقشه راه عملی:</strong> ارائه برنامه‌های اجرایی گام‌به‌گام برای رسیدن به اهداف.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>همراهی در اجرا:</strong> ما تنها مشاور نیستیم، بلکه در مسیر پیاده‌سازی راهکارها نیز در کنار شماییم.</span>
                    </li>
                 </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">حوزه‌های تخصصی مشاوره</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {areas.map((area) => (
                     <Card key={area.title} className="text-center bg-background hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                                <area.icon className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle>{area.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{area.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

       <section className="py-16 md:py-24 text-center bg-background">
          <div className="container">
              <h2 className="text-3xl font-bold text-primary">آماده‌اید تا کسب‌وکارتان را به سطح بعدی ببرید؟</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                 برای یک جلسه مشاوره اولیه رایگان با متخصصان ما تماس بگیرید تا در مورد چالش‌ها و اهداف شما گفتگو کنیم.
              </p>
              <div className="mt-8">
                  <Button size="lg" asChild>
                      <Link href="/contact?subject=Consulting">رزرو جلسه مشاوره</Link>
                  </Button>
              </div>
          </div>
      </section>
    </div>
  );
}