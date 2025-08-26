import { type Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Rocket, Lightbulb, Users, Handshake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'مرکز نوآوری | بانکا',
  description: 'با مرکز نوآوری درخت آبی، قلب تپنده فین‌تک در اکوسیستم بانکا، آشنا شوید.',
};

const features = [
    { icon: Lightbulb, title: "فضای کاری خلاق", description: "بیش از ۹,۵۰۰ متر مربع فضای کار اشتراکی و خصوصی برای تیم‌ها و استارت‌آپ‌ها." },
    { icon: Rocket, title: "شتاب‌دهی و سرمایه‌گذاری", description: "برنامه‌های شتاب‌دهی برای رشد سریع استارت‌آپ‌های فین‌تک و لندتک." },
    { icon: Users, title: "منتورشیپ و شبکه‌سازی", description: "دسترسی به شبکه‌ای از متخصصان و پیشکسوتان صنعت برای مشاوره و راهنمایی." },
    { icon: Handshake, title: "همکاری‌های استراتژیک", description: "ایجاد پل ارتباطی بین استارت‌آپ‌ها، صنایع بزرگ و سرمایه‌گذاران." },
]

export default function InnovationPage() {
  return (
    <div>
       <section className="relative py-24 md:py-32 bg-secondary">
          <div className="absolute inset-0">
             <Image
                src="https://picsum.photos/1200/800"
                alt="مرکز نوآوری"
                fill
                className="object-cover opacity-20"
                data-ai-hint="modern office interior"
            />
          </div>
          <div className="container relative text-center text-primary">
            <h1 className="text-4xl md:text-6xl font-bold font-headline">
              مرکز نوآوری درخت آبی
            </h1>
            <p className="mt-6 text-xl md:text-2xl max-w-3xl mx-auto">
              قلب تپنده اکوسیستم بانکا و محلی برای رشد ایده‌های تحول‌آفرین در دنیای فین‌تک و لندتک.
            </p>
          </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
                 <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">
                   ماموریت ما: پرورش آینده
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  مرکز نوآوری درخت آبی، تنها یک فضای کاری نیست؛ بلکه یک اکوسیستم کامل برای حمایت از کارآفرینان و نوآورانی است که به دنبال حل چالش‌های بزرگ صنایع ایران هستند. ما با فراهم آوردن منابع، دانش و ارتباطات لازم، به استارت‌آپ‌ها کمک می‌کنیم تا ایده‌های خود را به کسب‌وکارهای موفق و پایدار تبدیل کنند.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  ما معتقدیم که با گرد هم آوردن ذهن‌های خلاق و فراهم کردن بستری برای همکاری، می‌توانیم آینده‌ای روشن‌تر برای اقتصاد دیجیتال ایران بسازیم.
                </p>
                <Button asChild size="lg">
                    <Link href="/contact">به ما بپیوندید</Link>
                </Button>
            </div>
            <div>
                 <Image
                    src="https://picsum.photos/600/500"
                    alt="همکاری در مرکز نوآوری"
                    width={600}
                    height={500}
                    className="rounded-lg shadow-xl"
                    data-ai-hint="startup team collaboration"
                />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">امکانات و فرصت‌ها</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                    ما همه چیز را برای موفقیت شما فراهم کرده‌ایم.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature) => (
                     <Card key={feature.title} className="text-center bg-background hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                                <feature.icon className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle>{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-sm">{feature.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 text-center bg-background">
          <div className="container">
              <h2 className="text-3xl font-bold text-primary">ایده‌ای برای تغییر صنعت خود دارید؟</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  مرکز نوآوری درخت آبی آماده است تا از شما و ایده‌تان حمایت کند. با ما تماس بگیرید و داستان خود را به اشتراک بگذارید.
              </p>
              <div className="mt-8">
                  <Button size="lg" asChild>
                      <Link href="/contact?subject=InnovationCenter">ارسال طرح و ایده</Link>
                  </Button>
              </div>
          </div>
      </section>
    </div>
  );
}