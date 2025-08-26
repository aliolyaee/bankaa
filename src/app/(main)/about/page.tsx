import { type Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Target, Users, Eye, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'درباره ما | بانکا',
  description: 'با داستان، ماموریت و تیم بانکا آشنا شوید.',
};

const teamMembers = [
    { name: 'علی محمدی', role: 'مدیرعامل و بنیان‌گذار', avatar: 'https://picsum.photos/100/100?random=10' },
    { name: 'سارا رضایی', role: 'مدیر ارشد فناوری (CTO)', avatar: 'https://picsum.photos/100/100?random=11' },
    { name: 'محمد حسینی', role: 'مدیر توسعه کسب‌وکار', avatar: 'https://picsum.photos/100/100?random=12' },
    { name: 'فاطمه کریمی', role: 'مدیر محصول', avatar: 'https://picsum.photos/100/100?random=13' },
];

const values = [
    { icon: Target, title: 'مشتری‌محوری', description: 'موفقیت مشتریان، اولویت اصلی ماست. ما راهکارهای خود را بر اساس نیازهای واقعی آنها طراحی می‌کنیم.' },
    { icon: Eye, title: 'شفافیت', description: 'ما به شفافیت کامل در تمام فرآیندها، از قیمت‌گذاری تا اجرا، اعتقاد داریم.' },
    { icon: TrendingUp, title: 'نوآوری مستمر', description: 'دنیای مالی دائماً در حال تغییر است و ما متعهد به ارائه پیشرفته‌ترین راه‌حل‌ها هستیم.' },
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">
            درباره بانکا
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            ما در بانکا، با هدف تحول در نظام مالی صنایع ایران، گرد هم آمده‌ایم. ماموریت ما تبدیل بانکداری از یک مرکز هزینه به یک ابزار استراتژیک برای درآمدزایی و رشد پایدار کسب‌وکار شماست.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
                <h2 className="text-3xl font-bold text-primary">داستان ما</h2>
                <p className="text-muted-foreground leading-relaxed">
                    بانکا از یک ایده ساده متولد شد: چرا صنایع ایران نباید از ابزارهای مالی مدرن و کارآمدی که در سطح جهانی وجود دارد، بهره‌مند شوند؟ ما دیدیم که بسیاری از شرکت‌های بزرگ با چالش‌های پیچیده بانکی، عدم شفافیت مالی و هزینه‌های بالا دست‌وپنجه نرم می‌کنند. به همین دلیل، تصمیم گرفتیم پلتفرمی بسازیم که نه تنها این مشکلات را حل کند، بلکه بانکداری را به یک مزیت رقابتی برای کسب‌وکارها تبدیل نماید.
                </p>
                 <p className="text-muted-foreground leading-relaxed">
                   با ترکیب تخصص عمیق در حوزه‌های مالی، بانکی و فناوری، ما اکوسیستم‌هایی را طراحی می‌کنیم که به طور خاص برای هر صنعت سفارشی‌سازی شده‌اند و به مشتریانمان کمک می‌کنند تا کنترل کاملی بر منابع مالی خود داشته باشند، هزینه‌ها را بهینه کنند و فرصت‌های جدیدی برای رشد ایجاد نمایند.
                </p>
            </div>
             <div>
                <Image 
                    src="https://picsum.photos/600/400" 
                    alt="تیم بانکا"
                    width={600}
                    height={400} 
                    className="rounded-lg shadow-xl"
                    data-ai-hint="team working office"
                />
            </div>
        </div>

        <div className="mt-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">ارزش‌های ما</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">اصولی که ما را در مسیرمان هدایت می‌کنند.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((value) => (
                    <Card key={value.title} className="text-center">
                        <CardHeader>
                             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                                <value.icon className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle>{value.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{value.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>

        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">
              تیم راهبران بانکا
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              با متخصصانی که آینده مالی صنایع ایران را شکل می‌دهند، آشنا شوید.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}