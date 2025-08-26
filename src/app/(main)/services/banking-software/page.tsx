import { type Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check, Banknote, GitMerge, BarChart, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'نرم افزار حسابداری بانکی | بانکا',
  description: 'اتصال به بیش از ۱۸ بانک و ارائه راهکارهای یکپارچه مالی.',
};

const features = [
    { icon: GitMerge, title: "یکپارچگی کامل", description: "اتصال به بیش از ۱۸ بانک و موسسه مالی معتبر کشور در یک پلتفرم واحد." },
    { icon: BarChart, title: "گزارشات جامع", description: "داشبوردهای مدیریتی و گزارشات تحلیلی برای تصمیم‌گیری‌های هوشمندانه." },
    { icon: ShieldCheck, title: "امنیت و پایداری", description: "زیرساخت امن و پایدار برای تضمین عملکرد بدون وقفه کسب‌وکار شما." },
];

export default function BankingSoftwarePage() {
  return (
    <div className="bg-background">
       <section className="bg-secondary py-16 md:py-24">
        <div className="container text-center">
            <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                <Banknote className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">
                نرم‌افزار یکپارچه حسابداری بانکی
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                تمام حساب‌های بانکی خود را در یک داشبورد واحد مدیریت کنید. نرم‌افزار بانکا با ارائه دیدی ۳۶۰ درجه از وضعیت مالی، کنترل و شفافیت بی‌سابقه‌ای را برای شما به ارمغان می‌آورد.
            </p>
        </div>
      </section>

       <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
                 <Image
                    src="https://picsum.photos/550/500"
                    alt="Dashboard Screenshot"
                    width={550}
                    height={500}
                    className="rounded-lg shadow-xl object-cover"
                    data-ai-hint="financial dashboard analytics"
                />
            </div>
            <div>
                 <h2 className="text-3xl font-bold text-primary font-headline">
                    پایان سردرگمی، آغاز شفافیت
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  مدیریت چندین حساب بانکی در پلتفرم‌های مختلف، پیچیده، زمان‌بر و مستعد خطا است. نرم‌افزار ما با تجمیع تمام اطلاعات مالی شما در یک مکان، این چالش‌ها را برای همیشه از بین می‌برد.
                </p>
                 <ul className="mt-6 space-y-4">
                    <li className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>مدیریت نقدینگی:</strong> مشاهده آنی موجودی تمام حساب‌ها و برنامه‌ریزی دقیق برای جریان نقدی.</span>
                    </li>
                     <li className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>پرداخت‌های گروهی:</strong> انجام پرداخت‌های انبوه به سادگی و با چند کلیک.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>مغایرت‌گیری خودکار:</strong> تطبیق خودکار صورت‌حساب‌های بانکی با اسناد حسابداری.</span>
                    </li>
                 </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">چرا نرم‌افزار بانکا؟</h2>
                <p className="mt-4 text-lg text-muted-foreground">راهکاری فراتر از یک نرم‌افزار حسابداری ساده</p>
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
              <h2 className="text-3xl font-bold text-primary">برای مشاهده دموی نرم‌افزار آماده‌اید؟</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                 با ما تماس بگیرید تا یک جلسه دموی اختصاصی برای شما ترتیب دهیم و ببینید چگونه بانکا می‌تواند عملیات مالی شما را متحول کند.
              </p>
              <div className="mt-8">
                  <Button size="lg" asChild>
                      <Link href="/contact?subject=SoftwareDemo">درخواست دموی نرم‌افزار</Link>
                  </Button>
              </div>
          </div>
      </section>
    </div>
  );
}