import { type Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check, Scale, Link2, Truck, Droplets } from 'lucide-react';

export const metadata: Metadata = {
  title: 'تامین مالی زنجیره تامین (SCF) | بانکا',
  description: 'بهینه‌سازی جریان نقدی و تقویت روابط با تامین‌کنندگان از طریق راهکارهای SCF.',
};

const benefits = [
    { icon: Droplets, title: "بهبود جریان نقدی", description: "پرداخت زودهنگام به تامین‌کنندگان و افزایش دوره بازپرداخت برای خریداران." },
    { icon: Link2, title: "تقویت زنجیره تامین", description: "ایجاد روابط پایدارتر و منصفانه‌تر با تامین‌کنندگان و کاهش ریسک زنجیره." },
    { icon: Truck, title: "افزایش سرمایه در گردش", description: "آزاد کردن نقدینگی حبس شده در حساب‌های دریافتنی و پرداختنی." },
];

export default function ScfPage() {
  return (
    <div className="bg-background">
       <section className="bg-secondary py-16 md:py-24">
        <div className="container text-center">
            <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                <Scale className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">
                تامین مالی زنجیره تامین (SCF)
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                جریان نقدی خود را بهینه کنید و زنجیره تامین خود را تقویت نمایید. راهکارهای SCF بانکا به شما و شرکای تجاری‌تان کمک می‌کند تا به سلامت مالی پایدار دست یابید.
            </p>
        </div>
      </section>

       <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="relative">
                 <Image
                    src="https://picsum.photos/500/550"
                    alt="Supply Chain Finance Diagram"
                    width={500}
                    height={550}
                    className="rounded-lg shadow-xl object-cover"
                    data-ai-hint="logistics cargo network"
                />
            </div>
            <div>
                 <h2 className="text-3xl font-bold text-primary font-headline">
                    یک بازی برد-برد برای شما و تامین‌کنندگان
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  تامین مالی زنجیره تامین (Supply Chain Finance) یک راهکار نوآورانه است که با استفاده از اعتبار شرکت‌های بزرگ (خریداران)، امکان تامین مالی ارزان‌قیمت را برای تامین‌کنندگان آنها فراهم می‌کند. این فرآیند به نفع هر دو طرف است.
                </p>
                 <ul className="mt-6 space-y-4">
                    <li className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>برای خریداران:</strong> افزایش دوره پرداخت بدون آسیب به روابط با تامین‌کنندگان و بهبود سرمایه در گردش.</span>
                    </li>
                     <li className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>برای تامین‌کنندگان:</strong> دسترسی به نقدینگی فوری با هزینه کمتر، کاهش وابستگی به وام‌های بانکی و بهبود جریان نقدی.</span>
                    </li>
                 </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">مزایای کلیدی پلتفرم SCF بانکا</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit) => (
                     <Card key={benefit.title} className="text-center bg-background hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                                <benefit.icon className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle>{benefit.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{benefit.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

       <section className="py-16 md:py-24 text-center bg-background">
          <div className="container">
              <h2 className="text-3xl font-bold text-primary">زنجیره تامین خود را قدرتمندتر کنید</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                 با کارشناسان ما تماس بگیرید تا بررسی کنیم چگونه راهکار SCF می‌تواند به بهینه‌سازی مالی و تقویت زنجیره تامین شما کمک کند.
              </p>
              <div className="mt-8">
                  <Button size="lg" asChild>
                      <Link href="/contact?subject=SCF">درخواست مشاوره SCF</Link>
                  </Button>
              </div>
          </div>
      </section>
    </div>
  );
}