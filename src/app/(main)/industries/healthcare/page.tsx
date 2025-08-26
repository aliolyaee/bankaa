import { type Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check, HeartPulse } from 'lucide-react';
import { CoreServicesSection } from '@/components/sections/core-services-section';

export const metadata: Metadata = {
  title: 'صنعت بهداشت و درمان | بانکا',
  description: 'راهکارهای مالی برای بیمارستان‌ها، کلینیک‌ها و شرکت‌های تجهیزات پزشکی.',
};

const challenges = [
    "مدیریت وصول مطالبات از سازمان‌های بیمه‌گر",
    "نیاز به تامین مالی برای خرید تجهیزات پزشکی گران‌قیمت",
    "بهینه‌سازی هزینه‌های عملیاتی و مدیریت انبار دارو و تجهیزات",
    "پیچیدگی فرآیندهای مالی و حسابداری در مراکز درمانی",
];

const solutions = [
    "راهکارهای وصول آنی مطالبات و مدیریت چرخه‌های پرداخت",
    "تسهیلات لیزینگ و خرید اقساطی برای تجهیزات پزشکی",
    "پلتفرم SCF برای بهینه‌سازی زنجیره تامین دارو و تجهیزات",
    "نرم‌افزار یکپارچه مالی مخصوص مراکز درمانی",
];


export default function HealthcarePage() {
  return (
    <div className="bg-background">
       <section className="bg-secondary py-16 md:py-24">
        <div className="container text-center">
            <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                <HeartPulse className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">
                راهکارهای مالی برای صنعت بهداشت و درمان
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
               سلامت مالی، اساس ارائه خدمات درمانی با کیفیت است. ما با ارائه راهکارهای تخصصی، به مراکز درمانی و شرکت‌های فعال در این حوزه کمک می‌کنیم تا بر چالش‌های مالی خود غلبه کرده و بر ماموریت اصلی خود تمرکز کنند.
            </p>
        </div>
      </section>

       <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
                 <Image
                    src="https://picsum.photos/500/550"
                    alt="Healthcare Professional"
                    width={500}
                    height={550}
                    className="rounded-lg shadow-xl object-cover"
                    data-ai-hint="doctor hospital technology"
                />
            </div>
            <div className="order-1 md:order-2">
                 <h2 className="text-3xl font-bold text-primary font-headline">
                  تمرکز بر بیمار، نه مشکلات مالی
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                 صنعت بهداشت و درمان با چالش‌های منحصر به فردی از جمله چرخه‌های طولانی پرداخت بیمه‌ها و نیاز دائمی به سرمایه‌گذاری در فناوری‌های جدید روبروست. راهکارهای بانکا برای ایجاد پایداری مالی و تسهیل رشد در این صنعت طراحی شده‌اند.
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
              <h2 className="text-3xl font-bold text-primary">سلامت کسب‌وکار شما، تخصص ماست</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                برای آشنایی بیشتر با راهکارهای مالی بانکا برای حوزه بهداشت و درمان، با تیم متخصص ما در ارتباط باشید.
              </p>
              <div className="mt-8">
                  <Button size="lg" asChild>
                      <Link href="/contact?industry=healthcare">دریافت مشاوره تخصصی</Link>
                  </Button>
              </div>
          </div>
      </section>
    </div>
  );
}