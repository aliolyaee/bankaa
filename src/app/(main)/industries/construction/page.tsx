import { type Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check, Building2 } from 'lucide-react';
import { CoreServicesSection } from '@/components/sections/core-services-section';

export const metadata: Metadata = {
  title: 'صنعت ساخت و ساز | بانکا',
  description: 'راهکارهای مالی تخصصی برای پروژه‌های ساختمانی و شرکت‌های عمرانی.',
};

const challenges = [
    "نیاز به نقدینگی بالا و مدیریت جریان نقدی پیچیده پروژه‌ها",
    "فرآیندهای زمان‌بر برای تضامین بانکی و اعتبارات",
    "مدیریت پرداخت‌ها به پیمانکاران متعدد و تامین‌کنندگان مصالح",
    "ریسک‌های ناشی از نوسانات قیمت مصالح و تاخیر در پروژه‌ها",
];

const solutions = [
    "تامین مالی پروژه‌ها از طریق مدل‌های نوین و SCF",
    "صدور آنلاین و سریع انواع ضمانت‌نامه‌های بانکی",
    "پلتفرم یکپارچه برای مدیریت پرداخت‌ها و صورت وضعیت‌ها",
    "ابزارهای مدیریت ریسک و پوشش نوسانات مالی",
];


export default function ConstructionPage() {
  return (
    <div className="bg-background">
       <section className="bg-secondary py-16 md:py-24">
        <div className="container text-center">
            <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                <Building2 className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">
                راهکارهای مالی برای صنعت ساخت و ساز
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                ما با درک پویایی و چالش‌های مالی پروژه‌های عمرانی، راهکارهایی برای تسریع در اجرا، بهینه‌سازی هزینه‌ها و مدیریت ریسک‌های مالی صنعت ساخت و ساز ارائه می‌دهیم.
            </p>
        </div>
      </section>

       <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
                 <Image
                    src="https://picsum.photos/500/550"
                    alt="Construction Site"
                    width={500}
                    height={550}
                    className="rounded-lg shadow-xl object-cover"
                    data-ai-hint="construction site crane"
                />
            </div>
            <div className="order-1 md:order-2">
                 <h2 className="text-3xl font-bold text-primary font-headline">
                   ساخت آینده، با بنیان مالی مستحکم
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  صنعت ساخت و ساز با ماهیت پروژمحور خود، نیازمند راهکارهای مالی انعطاف‌پذیر و سریع است. ما در بانکا، ابزارهایی را طراحی کرده‌ایم که به شما کمک می‌کند تا بر چالش‌های نقدینگی غلبه کرده و پروژه‌های خود را با موفقیت به اتمام برسانید.
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
              <h2 className="text-3xl font-bold text-primary">پروژه بعدی خود را با بانکا بسازید</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                برای دریافت مشاوره تخصصی و آشنایی با راهکارهای مالی ما برای صنعت ساخت و ساز، با کارشناسان ما تماس بگیرید.
              </p>
              <div className="mt-8">
                  <Button size="lg" asChild>
                      <Link href="/contact?industry=construction">شروع همکاری</Link>
                  </Button>
              </div>
          </div>
      </section>
    </div>
  );
}