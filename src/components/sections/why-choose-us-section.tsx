import Image from "next/image";
import { Check } from "lucide-react";

const advantages = [
    "تخصص عمیق در صنایع ایران",
    "راهکارهای کاملاً سفارشی‌سازی‌شده",
    "تکنولوژی پیشرفته و APIهای انحصاری",
    "تمرکز بر سودآوری و رشد پایدار مشتری",
    "شبکه گسترده صنعتی و شرکای معتبر",
];

export function WhyChooseUsSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://picsum.photos/500/500"
              alt="Team discussing strategy"
              width={500}
              height={500}
              className="rounded-lg shadow-xl"
              data-ai-hint="business meeting"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">
              چرا بانکا را انتخاب کنید؟
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              ما فقط یک ارائه‌دهنده خدمات مالی نیستیم؛ ما شریک استراتژیک شما در مسیر موفقیت هستیم.
            </p>
            <ul className="mt-8 space-y-4">
              {advantages.map((advantage) => (
                <li key={advantage} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="font-medium">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
