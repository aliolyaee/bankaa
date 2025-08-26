import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { INDUSTRIES } from "@/lib/constants";
import { Button } from "../ui/button";

export function IndustryFocusSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">
            تخصص ما، صنایع شما
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            ارائه راهکارهای مالی سفارشی برای صنایع کلیدی ایران.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {INDUSTRIES.map((industry) => (
            <Link href={`/industries/${industry.slug}`} key={industry.name}>
              <Card className="group text-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <industry.icon className="w-12 h-12 mx-auto text-primary group-hover:text-primary-foreground transition-colors" />
                  <h3 className="mt-4 font-semibold">{industry.name}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
                <Link href="/industries">کاوش در صنایع</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
