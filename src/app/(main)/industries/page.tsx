import { type Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { INDUSTRIES } from '@/lib/constants';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'صنایع | بانکا',
  description: 'راهکارهای تخصصی بانکا برای صنایع کلیدی ایران.',
};

export default function IndustriesPage() {
  return (
    <div>
      <section className="bg-secondary">
        <div className="container py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">
              تخصص در صنایع، برای صنایع
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              ما با درک عمیق از چالش‌ها و فرصت‌های هر صنعت، راهکارهای مالی متناسبی را طراحی و اجرا می‌کنیم که به رشد و پایداری کسب‌وکار شما کمک می‌کند.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">
              صنایع تحت پوشش
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              برای آشنایی با راهکارهای تخصصی ما، صنعت خود را انتخاب کنید.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
            {INDUSTRIES.map((industry) => (
              <Link href={`/industries/${industry.slug}`} key={industry.slug}>
                <Card className="group text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden">
                  <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                    <industry.icon className="w-16 h-16 mx-auto text-primary group-hover:text-accent transition-colors" />
                    <h3 className="mt-4 text-lg font-semibold">{industry.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

       <section className="bg-secondary py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square">
                 <Image
                    src="https://picsum.photos/500/500"
                    alt="Industry Solutions"
                    width={500}
                    height={500}
                    className="rounded-lg shadow-2xl object-cover"
                    data-ai-hint="industrial factory"
                />
            </div>
            <div>
                 <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">
                    راهکار شما در لیست نیست؟
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  تخصص ما محدود به لیست بالا نیست. اگر صنعت شما در اینجا ذکر نشده، نگران نباشید. تیم ما آماده است تا چالش‌های خاص شما را بررسی کرده و یک اکوسیستم مالی سفارشی برای کسب‌وکارتان طراحی کند.
                </p>
                 <div className="mt-8">
                    <Button size="lg" asChild>
                        <Link href="/contact">تماس برای مشاوره اختصاصی</Link>
                    </Button>
                </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}