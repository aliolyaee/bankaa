import Link from "next/link";
import { Landmark, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NAV_LINKS, SERVICES, INDUSTRIES } from "@/lib/constants";

export function Footer() {
  const quickLinks = NAV_LINKS.filter(
    (l) => !l.children && l.href !== "/"
  );
  const legalLinks = [
    { href: "/privacy", label: "سیاست حفظ حریم خصوصی" },
    { href: "/terms", label: "شرایط و ضوابط" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 inline-block">
              <div className="flex items-center gap-2">
                <Landmark className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">BANKA</span>
              </div>
            </Link>
            <p className="max-w-md text-muted-foreground">
              بانکا، طراح اکوسیستم‌های مالی برای صنایع ایران. ما بانکداری سنتی را به ابزاری استراتژیک برای رشد و درآمدزایی تبدیل می‌کنیم.
            </p>
            <div className="mt-6">
              <h3 className="font-semibold">عضویت در خبرنامه</h3>
              <form className="mt-2 flex gap-2">
                <Input
                  type="email"
                  placeholder="ایمیل شما"
                  className="flex-grow bg-background"
                  aria-label="Email for newsletter"
                />
                <Button type="submit" variant="default">
                  عضویت
                </Button>
              </form>
            </div>
          </div>
          <div>
            <h3 className="font-semibold">لینک‌های سریع</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">خدمات</h3>
            <ul className="mt-4 space-y-2">
              {SERVICES.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">تماس با ما</h3>
            <div className="mt-4 space-y-2 text-muted-foreground">
              <p>تهران، خیابان آزادی، مرکز نوآوری</p>
              <p>info@banka.ir</p>
              <p>۰۲۱-۱۲۳۴۵۶۷۸</p>
            </div>
            <div className="mt-4 flex space-x-4 space-x-reverse">
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} شرکت همیار پردازان سبز ایرانیان (بانکا).
            تمامی حقوق محفوظ است.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
