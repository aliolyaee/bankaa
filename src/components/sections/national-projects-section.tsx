import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  { name: "BankaHome", description: "اکوسیستم املاک و مستغلات", image: "https://picsum.photos/400/300?random=1", hint: "modern house" },
  { name: "BankaTrip", description: "اکوسیستم گردشگری", image: "https://picsum.photos/400/300?random=2", hint: "travel destination" },
  { name: "BankaHealth", description: "اکوسیستم بهداشت و درمان", image: "https://picsum.photos/400/300?random=3", hint: "medical equipment" },
  { name: "BankaEnergy", description: "اکوسیستم انرژی", image: "https://picsum.photos/400/300?random=4", hint: "wind turbine" },
  { name: "BankaMove", description: "اکوسیستم حمل و نقل", image: "https://picsum.photos/400/300?random=5", hint: "cargo ship" },
  { name: "BankaFood", description: "اکوسیستم صنایع غذایی", image: "https://picsum.photos/400/300?random=6", hint: "fresh food" },
];

export function NationalProjectsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">
            پروژه‌های ملی اکوسیستم بانکا
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            ساخت آینده مالی ایران، یک اکوسیستم در هر زمان.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.name} className="overflow-hidden group">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={project.hint}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
