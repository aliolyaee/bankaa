import { type Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check, Palette, GitBranch, Users, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'طراحی اکوسیستم مالی | بانکا',
  description: 'ایجاد اکوسیستم‌های مالی خاص صنعت برای رشد پایدار و خلق ارزش افزوده.',
};

const steps = [
    { icon: GitBranch, title: "۱. تحلیل و شناخت", description: "بررسی عمیق صنعت، زنجیره ارزش، بازیگران کلیدی و جریان‌های مالی موجود." },
    { icon: Palette, title: "۲. طراحی و معماری", description: "طراحی ساختار اکوسیستم، تعریف نقش‌ها، قوانین و پلتفرم فناورانه مورد نیاز." },
    { icon: Users, title: "۳. اجرا و پیاده‌سازی", description: "توسعه پلتفرم، آنبورد کردن اعضا و اجرای پایلوت برای تضمین کارایی." },
    { icon: Award, title: "۴. رشد و بهینه‌سازی", description: "تحلیل مستمر عملکرد اکوسیستم و افزودن خدمات ارزش افزوده جدید." },
];

export default function EcosystemDesignPage() {
  return (
    <div className="bg-background">
       <section className="bg-secondary py-16 md:py-24">
        <div className="container text-center">
            <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                <Palette className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">
                طراحی اکوسیستم مالی
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                ما آینده مالی صنعت شما را طراحی می‌کنیم. با ایجاد اکوسیستم‌های یکپارچه، ما بازیگران مختلف صنعت را به هم متصل کرده و ارزشی فراتر از مجموع اجزا خلق می‌کنیم.
            </p>
        </div>
      </section>

       <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="relative">
                 <Image
                    src="https://picsum.photos/500/550"
                    alt="Ecosystem Diagram"
                    width={500}
                    height={550}
                    className="rounded-lg shadow-xl object-cover"
                    data-ai-hint="network business diagram"
                />
            </div>
            <div>
                 <h2 className="text-3xl font-bold text-primary font-headline">
                   از زنجیره ارزش تا اکوسیستم ارزش
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  در دنیای امروز، رقابت دیگر بین شرکت‌ها نیست، بلکه بین اکوسیستم‌هاست. ما به شما کمک می‌کنیم تا با تعریف مجدد روابط در صنعت خود و با استفاده از یک پلتفرم مالی مشترک، یک اکوسیستم قدرتمند بسازید.
                </p>
                 <ul className="mt-6 space-y-4">
                    <li className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>هم‌افزایی و خلق ارزش:</strong> ایجاد فرصت‌های جدید کسب‌وکار برای تمام اعضای اکوسیستم.</span>
                    </li>
                     <li className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>کاهش اصطکاک:</strong> تسهیل تبادلات مالی و اطلاعاتی و کاهش هزینه‌های مبادله.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>مزیت رقابتی پایدار:</strong> ایجاد یک شبکه قدرتمند که کپی کردن آن برای رقبا دشوار است.</span>
                    </li>
                 </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">فرآیند طراحی اکوسیستم در بانکا</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step) => (
                     <Card key={step.title} className="text-center bg-background hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                                <step.icon className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle className="text-xl">{step.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-sm">{step.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

       <section className="py-16 md:py-24 text-center bg-background">
          <div className="container">
              <h2 className="text-3xl font-bold text-primary">آیا صنعت شما برای یک تحول آماده است؟</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                 بیایید با هم گفتگو کنیم و پتانسیل‌های ایجاد یک اکوسیستم مالی قدرتمند را در صنعت شما بررسی کنیم.
              </p>
              <div className="mt-8">
                  <Button size="lg" asChild>
                      <Link href="/contact?subject=EcosystemDesign">شروع طراحی اکوسیستم</Link>
                  </Button>
              </div>
          </div>
      </section>
    </div>
  );
}