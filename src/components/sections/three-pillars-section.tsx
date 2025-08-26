import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PILLARS } from "@/lib/constants";

export function ThreePillarsSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">
            سه ستون اصلی اکوسیستم بانکا
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            قدرت ما در ترکیب نوآوری، تخصص بانکی و شبکه صنعتی نهفته است.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLARS.map((pillar) => (
            <Card key={pillar.title} className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <pillar.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>{pillar.title}</CardTitle>
              </CardHeader>
              <div className="p-6 pt-0">
                <CardDescription>{pillar.description}</CardDescription>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
