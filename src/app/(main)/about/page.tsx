import { type Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Target, Users, Eye, TrendingUp, Award, Shield, Lightbulb, ArrowLeft, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'درباره ما | بانکا',
  description: 'با داستان، ماموریت و تیم بانکا آشنا شوید.',
};

const teamMembers = [
  {
    name: 'علی محمدی',
    role: 'مدیرعامل و بنیان‌گذار',
    avatar: 'https://picsum.photos/150/150?random=10',
    expertise: 'مدیریت استراتژیک'
  },
  {
    name: 'سارا رضایی',
    role: 'مدیر ارشد فناوری (CTO)',
    avatar: 'https://picsum.photos/150/150?random=11',
    expertise: 'فین‌تک و بلاک‌چین'
  },
  {
    name: 'محمد حسینی',
    role: 'مدیر توسعه کسب‌وکار',
    avatar: 'https://picsum.photos/150/150?random=12',
    expertise: 'توسعه بازار'
  },
  {
    name: 'فاطمه کریمی',
    role: 'مدیر محصول',
    avatar: 'https://picsum.photos/150/150?random=13',
    expertise: 'تجربه کاربری'
  },
];

const values = [
  {
    icon: Target,
    title: 'مشتری‌محوری',
    description: 'موفقیت مشتریان، اولویت اصلی ماست. ما راهکارهای خود را بر اساس نیازهای واقعی آنها طراحی می‌کنیم.',
    color: 'bg-blue-50 border-blue-200'
  },
  {
    icon: Eye,
    title: 'شفافیت',
    description: 'ما به شفافیت کامل در تمام فرآیندها، از قیمت‌گذاری تا اجرا، اعتقاد داریم.',
    color: 'bg-emerald-50 border-emerald-200'
  },
  {
    icon: TrendingUp,
    title: 'نوآوری مستمر',
    description: 'دنیای مالی دائماً در حال تغییر است و ما متعهد به ارائه پیشرفته‌ترین راه‌حل‌ها هستیم.',
    color: 'bg-purple-50 border-purple-200'
  },
];

const achievements = [
  { icon: Award, title: '4 گواهینامه ISO', description: 'استانداردهای کیفیت بین‌المللی' },
  { icon: Shield, title: '100% امنیت', description: 'تضمین امنیت کامل تراکنش‌ها' },
  { icon: Users, title: '700+ عضو شبکه', description: 'بزرگترین شبکه صنفی کشور' },
  { icon: Lightbulb, title: '50+ نوآوری', description: 'راهکارهای منحصربه‌فرد طراحی شده' },
];

const milestones = [
  { year: '1398', title: 'تأسیس انجمن صنفی', description: 'شروع فعالیت با 100 عضو اولیه' },
  { year: '1400', title: 'راه‌اندازی درخت آبی', description: 'افتتاح مرکز نوآوری با 2000 متر فضا' },
  { year: '1401', title: 'تولد بانکا', description: 'عرضه اولین محصولات مالی' },
  { year: '1402', title: 'گسترش ملی', description: 'حضور در 8 استان کشور' },
  { year: '1403', title: 'رشد اکوسیستم', description: '700+ عضو و 18+ بانک همکار' },
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary via-emerald-800 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
        </div>

        <div className="container relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6">
              درباره بانکا
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              ما در بانکا، با هدف تحول در نظام مالی صنایع ایران، گرد هم آمده‌ایم.
              ماموریت ما تبدیل بانکداری از یک مرکز هزینه به یک ابزار استراتژیک برای درآمدزایی و رشد پایدار است.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link href="/contact">
                  شروع همکاری با ما
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                دانلود کاتالوگ شرکت
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div>
                <Badge className="mb-4">داستان ما</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline">
                  از ایده تا تحقق رویای بزرگ
                </h2>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  بانکا از یک ایده ساده متولد شد: چرا صنایع ایران نباید از ابزارهای مالی مدرن و کارآمدی که در سطح جهانی وجود دارد، بهره‌مند شوند؟ ما دیدیم که بسیاری از شرکت‌های بزرگ با چالش‌های پیچیده بانکی، عدم شفافیت مالی و هزینه‌های بالا دست‌وپنجه نرم می‌کنند.
                </p>
                <p>
                  به همین دلیل، تصمیم گرفتیم پلتفرمی بسازیم که نه تنها این مشکلات را حل کند، بلکه بانکداری را به یک مزیت رقابتی برای کسب‌وکارها تبدیل نماید. با ترکیب تخصص عمیق در حوزه‌های مالی، بانکی و فناوری، ما اکوسیستم‌هایی را طراحی می‌کنیم که به طور خاص برای هر صنعت سفارشی‌سازی شده‌اند.
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">ماموریت محقق شده</div>
                  <div className="text-sm text-muted-foreground">بیش از 150 پروژه موفق در 5 سال گذشته</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://picsum.photos/600/500"
                alt="تیم بانکا"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl object-cover"
              />

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5</div>
                  <div className="text-sm text-muted-foreground">سال تجربه</div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">18+</div>
                  <div className="text-sm text-muted-foreground">بانک همکار</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline mb-6">
              ارزش‌های بنیادین ما
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              اصولی که ما را در مسیر تحقق اهداف هدایت می‌کنند
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className={`hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${value.color}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline mb-6">
              دستاوردهای ما
            </h2>
            <p className="text-xl text-muted-foreground">
              نگاهی به مهم‌ترین موفقیت‌های بانکا در مسیر تحول صنایع ایران
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={achievement.title}
                className="text-center hover:shadow-lg hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <achievement.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-accent/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline mb-6">
              مسیر رشد و تکامل
            </h2>
            <p className="text-xl text-muted-foreground">
              نگاهی به مهم‌ترین رویدادهای تاریخ بانکا
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="flex gap-6 mb-8 last:mb-0"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {milestone.year}
                  </div>
                </div>
                <Card className="flex-1 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 font-headline">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline mb-6">
              تیم راهبران بانکا
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              با متخصصانی که آینده مالی صنایع ایران را شکل می‌دهند، آشنا شوید
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className="text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">
                      {member.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-lg font-headline">{member.name}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{member.role}</p>
                  <Badge variant="secondary" className="text-xs">{member.expertise}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-emerald-700 to-teal-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">
            آماده تحول مالی کسب‌وکار خود هستید؟
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            با پیوستن به خانواده بزرگ بانکا، گام اول را برای آینده‌ای متفاوت بردارید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/contact">
                درخواست مشاوره رایگان
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/services">
                مشاهده خدمات ما
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}