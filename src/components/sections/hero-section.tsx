import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative bg-secondary overflow-hidden">
      <div className="container py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-center md:text-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary font-headline">
              بانکداری سنتی را به ابزار رشد صنعت خود تبدیل کنید
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0">
              بانکا با طراحی اکوسیستم‌های مالی یکپارچه، به صنایع ایران کمک می‌کند تا با کنترل هزینه‌ها، تثبیت درآمد و ایجاد سود مرکب، به رشد پایدار دست یابند.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" asChild>
                <Link href="/contact">شروع کنید</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">بیشتر بدانید</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-auto">
             <Image
                src="https://picsum.photos/600/500"
                alt="Financial Ecosystem"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl object-cover"
                data-ai-hint="financial technology"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
