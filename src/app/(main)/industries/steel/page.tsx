import { type Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check, Sparkles } from 'lucide-react';
import { CoreServicesSection } from '@/components/sections/core-services-section';

export const metadata: Metadata = {
  title: 'صنعت فولاد | بانکا',
  description: 'راهکارهای مالی یکپارچه برای تولیدکنندگان و فعالان صنعت فولاد.',
};

const challenges = [
    "مدیریت نقدینگی در چرخه‌های تولید طولانی",
    "نوسانات شدید قیمت جهانی مواد اولیه و محصول نهایی",
    "نیاز به سرمایه‌گذاری سنگین برای نوسازی و توسعه خطوط تولید",
    "پیچیدگی‌های مالی در صادرات و واردات",
];

const solutions = [
    "تامین مالی زنجیره تامین (SCF) از معدن تا محصول نهایی",
    "ابزارهای مدیریت ریسک ارز و کالا (Hedging)",
    "تامین مالی پروژه‌های توسعه‌ای (Project Finance)",
    "خدمات اعتبارات اسنادی (LC) و گشایش حساب‌های ارزی بین‌المللی",
];


export default function SteelPage() {
  return (
    <div className="bg-background">
       <section className="bg-secondary py-16 md:py-24">
        <div className="container text-center">
            <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                <Sparkles className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">
                راهکارهای مالی برای صنعت فولاد
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                از معدن تا بازار، ما در کنار شما هستیم. بانکا با ارائه راهکارهای مالی تخصصی، به شرکت‌های فولادی کمک می‌کند تا در بازارهای پرنوسان، به پایداری و رشد دست یابند.
            </p>
        </div>
      </section>

       <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
                 <Image
                    src="https://picsum.photos/500/550"
                    alt="Steel Production"
                    width={500}
                    height={550}
                    className="rounded-lg shadow-xl object-cover"
                    data-ai-hint="steel factory molten metal"
                />
            </div>
            <div className="order-1 md:order-2">
                 <h2 className="text-3xl font-bold text-primary font-headline">
                   شکل‌دهی به آینده فولاد با ابزارهای مالی مدرن
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  صنعت فولاد به عنوان یکی از صنایع مادر، با چالش‌های بزرگی در زمینه مدیریت مالی، تامین سرمایه و ریسک‌های بازار روبروست. ما در بانکا، این چالش‌ها را به خوبی درک کرده و ابزارهای لازم برای غلبه بر آنها را فراهم می‌کنیم.
                </p>
                 <div className="mt-8 grid grid-cols-1 gap-6">
                    <div>
                        <h3 className="font-semibold text-lg mb-2">چالش‌های کلیدی:</h3>
                        <ul className="space-y-2">
                           {challenges.map(c => (
                             <li key={c} className="flex items-start gap-2">
                                <span className="text-red-500 mt-1">●</span>
                                <span className="text-muted-foreground">{c}</span>
                             </li>
                           ))}
                        </ul>
                    </div>
                     <div>
                        <h3 className="font-semibold text-lg mb-2">راهکارهای بانکا:</h3>
                        <ul className="space-y-2">
                           {solutions.map(s => (
                             <li key={s} className="flex items-start gap-2">
                                <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                <span className="text-foreground">{s}</span>
                             </li>
                           ))}
                        </ul>
                    </div>
                 </div>
            </div>
          </div>
        </div>
      </section>
      
      <CoreServicesSection />

       <section className="py-16 md:py-24 text-center bg-background">
          <div className="container">
              <h2 className="text-3xl font-bold text-primary">آماده تقویت بنیان مالی شرکت خود هستید؟</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                 با تیم متخصص صنعت فولاد ما تماس بگیرید تا یک راهکار جامع و سفارشی برای کسب‌وکار شما طراحی کنیم.
              </p>
              <div className="mt-8">
                  <Button size="lg" asChild>
                      <Link href="/contact?industry=steel">درخواست مشاوره فولاد</Link>
                  </Button>
              </div>
          </div>
      </section>
    </div>
  );
}