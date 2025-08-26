import { type Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'منابع | بانکا',
  description: 'مقالات، گزارش‌ها و مطالعات موردی برای درک بهتر دنیای فین‌تک و راهکارهای بانکا.',
};

const articles = [
    { 
        title: "تحول دیجیتال در بانکداری صنعتی: یک ضرورت انکارناپذیر", 
        category: "مقالات", 
        image: "https://picsum.photos/400/250?random=20", 
        hint: "digital finance",
        summary: "بررسی چالش‌ها و فرصت‌های پیش روی صنایع ایران در مسیر دیجیتالی شدن خدمات مالی و نقش اکوسیستم‌های یکپارچه.",
        href: "#"
    },
     { 
        title: "تامین مالی زنجیره تامین (SCF): راهکاری برای تقویت تولید ملی", 
        category: "مطالعه موردی", 
        image: "https://picsum.photos/400/250?random=21",
        hint: "supply chain",
        summary: "مطالعه موردی پیاده‌سازی موفق SCF در یکی از بزرگترین هلدینگ‌های صنعتی کشور و نتایج شگفت‌انگیز آن.",
        href: "#"
    },
     { 
        title: "گزارش سالانه فین‌تک ایران ۱۴۰۲", 
        category: "گزارش", 
        image: "https://picsum.photos/400/250?random=22", 
        hint: "financial charts",
        summary: "تحلیل جامع از آخرین روندها، آمارها و بازیگران کلیدی حوزه فناوری‌های مالی در ایران.",
        href: "#"
    },
    { 
        title: "چگونه API های بانکی باز، مدل‌های کسب‌وکار را دگرگون می‌کنند؟", 
        category: "مقالات", 
        image: "https://picsum.photos/400/250?random=23",
        hint: "api code",
        summary: "نگاهی عمیق به پتانسیل بانکداری باز و چگونگی استفاده از APIها برای خلق محصولات و خدمات نوآورانه.",
        href: "#"
    },
    { 
        title: "آینده لندتک (LandTech) در ایران", 
        category: "مقالات", 
        image: "https://picsum.photos/400/250?random=24",
        hint: "smart city",
        summary: "بررسی نقش فناوری در تحول صنعت املاک و مستغلات، از ساخت‌وساز هوشمند تا مدیریت دیجیتال املاک.",
        href: "#"
    },
    { 
        title: "نقش هوش مصنوعی در پیش‌بینی ریسک اعتباری", 
        category: "مطالعه موردی", 
        image: "https://picsum.photos/400/250?random=25",
        hint: "artificial intelligence",
        summary: "چگونه با استفاده از الگوریتم‌های هوش مصنوعی، دقت اعتبارسنجی مشتریان را تا ۴۰٪ افزایش دادیم.",
        href: "#"
    },
];

export default function ResourcesPage() {
  return (
    <div className="bg-background">
        <section className="bg-secondary py-16 md:py-24">
             <div className="container text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">
                مرکز دانش بانکا
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                دانش خود را با آخرین تحلیل‌ها، گزارش‌های صنعتی و داستان‌های موفقیت ما به‌روز کنید و در دنیای پیچیده مالی، هوشمندانه‌تر تصمیم بگیرید.
                </p>
                <div className="mt-8 max-w-lg mx-auto">
                     <form className="mt-2 flex gap-2">
                        <Input
                        type="search"
                        placeholder="جستجو در مقالات..."
                        className="flex-grow bg-background text-base"
                        aria-label="Search articles"
                        />
                        <Button type="submit" variant="default" size="lg">
                        جستجو
                        </Button>
                    </form>
                </div>
            </div>
        </section>

      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
                 <Card key={article.title} className="overflow-hidden group flex flex-col">
                    <div className="relative h-56">
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            data-ai-hint={article.hint}
                        />
                         <Badge className="absolute top-4 right-4">{article.category}</Badge>
                    </div>
                    <CardContent className="p-6 flex-grow">
                        <h2 className="text-xl font-bold text-primary mb-2 leading-snug">{article.title}</h2>
                        <p className="text-muted-foreground text-sm">{article.summary}</p>
                    </CardContent>
                    <CardFooter>
                         <Button variant="link" asChild className="p-0">
                            <Link href={article.href}>ادامه مطلب <ArrowLeft className="mr-2 h-4 w-4" /></Link>
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
         <div className="text-center mt-16">
            <Button size="lg" variant="outline">
                مشاهده بیشتر
            </Button>
        </div>
      </section>
    </div>
  );
}