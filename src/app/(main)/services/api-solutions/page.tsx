import { type Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check, Settings, Zap, ShieldCheck, Code } from 'lucide-react';

export const metadata: Metadata = {
  title: 'راهکارهای API انحصاری | بانکا',
  description: 'ابزارهای سفارشی‌سازی و APIهای بانکی برای نیازهای خاص شما.',
};

const features = [
    { icon: Zap, title: "اتصال سریع و آسان", description: "مستندات کامل و SDK های آماده برای تسریع فرآیند یکپارچه‌سازی." },
    { icon: ShieldCheck, title: "امنیت در سطح بانکی", description: "رعایت بالاترین استانداردهای امنیتی برای حفاظت از داده‌های شما." },
    { icon: Settings, title: "سفارشی‌سازی کامل", description: "APIهایی که می‌توانند دقیقاً مطابق با فرآیندهای کسب‌وکار شما تنظیم شوند." },
];

export default function ApiSolutionsPage() {
  return (
    <div className="bg-background">
       <section className="bg-secondary py-16 md:py-24">
        <div className="container text-center">
            <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                <Code className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">
                راهکارهای API انحصاری
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                قدرت بانکداری را در دستان خود بگیرید. با APIهای بانکی بانکا، زیرساخت مالی خود را بسازید، فرآیندها را خودکار کنید و محصولات نوآورانه‌ای خلق کنید.
            </p>
        </div>
      </section>

       <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                 <h2 className="text-3xl font-bold text-primary font-headline">
                    بانکداری باز، متناسب با کسب‌وکار شما
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  دیگر نیازی نیست کسب‌وکار خود را با محدودیت‌های سیستم‌های بانکی سنتی تطبیق دهید. ما با ارائه APIهای قدرتمend و انعطاف‌پذیر، به شما این امکان را می‌دهیم که خدمات بانکی را به طور کامل در پلتفرم‌ها و نرم‌افزارهای خود ادغام کنید.
                </p>
                 <ul className="mt-6 space-y-4">
                    <li className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>کاهش وابستگی:</strong> استقلال از پلتفرم‌های بانکی و کنترل کامل بر تجربه کاربری.</span>
                    </li>
                     <li className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>افزایش بهره‌وری:</strong> خودکارسازی پرداخت‌ها، استعلامات و سایر عملیات‌های مالی.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>خلق نوآوری:</strong> ایجاد خدمات ارزش افزوده جدید برای مشتریان بر پایه زیرساخت بانکی.</span>
                    </li>
                 </ul>
            </div>
             <div className="relative">
                 <Image
                    src="https://picsum.photos/500/550"
                    alt="API Integration Diagram"
                    width={500}
                    height={550}
                    className="rounded-lg shadow-xl object-cover"
                    data-ai-hint="data flow diagram"
                />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">ویژگی‌های کلیدی APIهای بانکا</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature) => (
                     <Card key={feature.title} className="text-center bg-background hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                                <feature.icon className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle>{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

       <section className="py-16 md:py-24 text-center bg-background">
          <div className="container">
              <h2 className="text-3xl font-bold text-primary">آینده مالی خود را برنامه‌نویسی کنید</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                 برای دسترسی به مستندات API و شروع یکپارچه‌سازی، با تیم فنی ما تماس بگیرید.
              </p>
              <div className="mt-8">
                  <Button size="lg" asChild>
                      <Link href="/contact?subject=API">درخواست دسترسی به API</Link>
                  </Button>
              </div>
          </div>
      </section>
    </div>
  );
}