import { type Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SERVICES } from '@/lib/constants';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'خدمات | بانکا',
  description: 'با خدمات نوآورانه بانکا برای صنایع مختلف آشنا شوید.',
};

export default function ServicesPage() {
  return (
    <div className="bg-secondary">
      <div className="container py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">
            خدمات جامع مالی و بانکی
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            ما مجموعه‌ای کامل از خدمات را برای بهینه‌سازی، کنترل و رشد منابع مالی شرکت شما ارائه می‌دهیم. راهکارهای ما برای تبدیل چالش‌های بانکی به فرصت‌های استراتژیک طراحی شده‌اند.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <Card key={service.title} className="flex flex-col text-center items-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center">
                    <service.icon className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="mt-4 text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild>
                    <Link href={service.href}>مشاهده جزئیات</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-24 bg-background p-8 md:p-12 rounded-lg shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">چرا خدمات بانکا؟</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                ما فراتر از یک ارائه‌دهنده خدمات هستیم؛ ما شریک استراتژیک شما برای دستیابی به اهداف مالی هستیم. انتخاب بانکا به معنای دسترسی به تخصص، تکنولوژی و تعهد است.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Check className="w-6 h-6 text-green-500" />
                  <span className="font-medium">راهکارهای یکپارچه و جامع</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-6 h-6 text-green-500" />
                  <span className="font-medium">سفارشی‌سازی بر اساس نیاز صنعت شما</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-6 h-6 text-green-500" />
                  <span className="font-medium">پشتیبانی تخصصی و مستمر</span>
                </li>
                 <li className="flex items-center gap-3">
                  <Check className="w-6 h-6 text-green-500" />
                  <span className="font-medium">تمرکز بر کاهش هزینه‌ها و افزایش سودآوری</span>
                </li>
              </ul>
            </div>
             <div className="text-center">
                <p className="text-lg font-semibold mb-4">آیا برای تحول مالی کسب‌وکارتان آماده‌اید؟</p>
                <p className="text-muted-foreground mb-6">با کارشناسان ما صحبت کنید تا یک نقشه راه اختصاصی برای شما طراحی کنیم.</p>
                <Button size="lg" asChild>
                    <Link href="/contact">درخواست مشاوره رایگان</Link>
                </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}