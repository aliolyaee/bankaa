import { type Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Zap, ShieldCheck, ArrowDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'اکوسیستم‌ها | بانکا',
  description: 'با پروژه‌های ملی اکوسیستم بانکا آشنا شوید.',
};

const projects = [
  { name: "BankaHome", description: "اکوسیستم املاک و مستغلات", image: "https://picsum.photos/400/300?random=1", hint: "modern house" },
  { name: "BankaTrip", description: "اکوسیستم گردشگری", image: "https://picsum.photos/400/300?random=2", hint: "travel destination" },
  { name: "BankaHealth", description: "اکوسیستم بهداشت و درمان", image: "https://picsum.photos/400/300?random=3", hint: "medical equipment" },
  { name: "BankaEnergy", description: "اکوسیستم انرژی", image: "https://picsum.photos/400/300?random=4", hint: "wind turbine" },
  { name: "BankaMove", description: "اکوسیستم حمل و نقل", image: "https://picsum.photos/400/300?random=5", hint: "cargo ship" },
  { name: "BankaFood", description: "اکوسیستم صنایع غذایی", image: "https://picsum.photos/400/300?random=6", hint: "fresh food" },
];


export default function EcosystemsPage() {
  return (
    <div className="bg-background">
      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">
            اکوسیستم‌های ملی بانکا
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-3xl mx-auto">
            ما با نگاهی کلان و آینده‌نگر، در حال ساخت اکوسیستم‌های مالی یکپارچه‌ای هستیم که صنایع حیاتی ایران را متحول کرده و زمینه‌ساز رشد پایدار اقتصادی می‌شوند.
          </p>
           <div className="mt-8">
            <Button variant="secondary" size="lg" asChild>
                <Link href="#projects">کاوش در پروژه‌ها <ArrowDown className="mr-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                 <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">
                    اکوسیستم مالی چیست؟
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  یک اکوسیستم مالی، شبکه‌ای یکپارچه از خدمات، فناوری‌ها و بازیگران مختلف یک صنعت است که حول یک پلتفرم مالی مشترک گرد هم می‌آیند. هدف از ایجاد این اکوسیستم، تسهیل تبادلات مالی، افزایش شفافیت، کاهش هزینه‌ها و خلق ارزش افزوده برای تمام اعضای آن است.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <Zap className="w-8 h-8 text-accent mt-1 flex-shrink-0"/>
                    <div>
                      <h3 className="font-semibold">کارایی و سرعت</h3>
                      <p className="text-muted-foreground text-sm">حذف فرآیندهای زائد و تسریع در تبادلات مالی بین تمام ذی‌نفعان.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="w-8 h-8 text-accent mt-1 flex-shrink-0"/>
                    <div>
                      <h3 className="font-semibold">امنیت و شفافیت</h3>
                      <p className="text-muted-foreground text-sm">ایجاد یک محیط امن و شفاف برای تمام تراکنش‌ها با استفاده از فناوری‌های نوین.</p>
                    </div>
                  </div>
                </div>
            </div>
             <div className="relative aspect-square">
                 <Image
                    src="https://picsum.photos/500/500"
                    alt="Financial Ecosystem Diagram"
                    width={500}
                    height={500}
                    className="rounded-lg shadow-2xl object-cover"
                    data-ai-hint="financial data network"
                />
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">
              پروژه‌های در حال توسعه
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              نگاهی به پروژه‌های بزرگ ما که آینده مالی صنایع مختلف ایران را شکل می‌دهند.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.name} className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative h-56">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint={project.hint}
                  />
                </div>
                <CardContent className="p-6 bg-background">
                  <h3 className="text-xl font-bold text-primary">{project.name}</h3>
                  <p className="text-muted-foreground mt-2">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}