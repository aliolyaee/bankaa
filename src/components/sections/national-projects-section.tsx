import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink } from 'lucide-react';

const projects = [
  {
    name: "BankaHome",
    description: "اکوسیستم املاک و مستغلات",
    image: "https://picsum.photos/400/300?random=1",
    status: "در حال توسعه",
    category: "املاک",
    features: ["مدیریت املاک", "تامین مالی", "قراردادهای هوشمند"],
    color: "bg-gradient-to-br from-blue-50 to-blue-100"
  },
  {
    name: "BankaTrip",
    description: "اکوسیستم گردشگری",
    image: "https://picsum.photos/400/300?random=2",
    status: "پایلوت",
    category: "گردشگری",
    features: ["پرداخت آنلاین", "مدیریت رزرو", "کیف پول دیجیتال"],
    color: "bg-gradient-to-br from-emerald-50 to-emerald-100"
  },
  {
    name: "BankaHealth",
    description: "اکوسیستم بهداشت و درمان",
    image: "https://picsum.photos/400/300?random=3",
    status: "تحقیق و توسعه",
    category: "سلامت",
    features: ["پرداخت بیمه", "مدیریت هزینه", "شبکه درمانی"],
    color: "bg-gradient-to-br from-purple-50 to-purple-100"
  },
  {
    name: "BankaEnergy",
    description: "اکوسیستم انرژی",
    image: "https://picsum.photos/400/300?random=4",
    status: "طراحی",
    category: "انرژی",
    features: ["پروژه‌های انرژی", "تامین مالی", "معاملات کربن"],
    color: "bg-gradient-to-br from-yellow-50 to-yellow-100"
  },
  {
    name: "BankaMove",
    description: "اکوسیستم حمل و نقل",
    image: "https://picsum.photos/400/300?random=5",
    status: "مطالعه امکان‌سنجی",
    category: "حمل‌ونقل",
    features: ["لجستیک", "پرداخت کرایه", "مدیریت ناوگان"],
    color: "bg-gradient-to-br from-indigo-50 to-indigo-100"
  },
  {
    name: "BankaFood",
    description: "اکوسیستم صنایع غذایی",
    image: "https://picsum.photos/400/300?random=6",
    status: "ایده‌پردازی",
    category: "غذا",
    features: ["زنجیره غذا", "کشاورزی", "توزیع مواد غذایی"],
    color: "bg-gradient-to-br from-rose-50 to-rose-100"
  },
];

const statusColors = {
  "در حال توسعه": "bg-green-100 text-green-800",
  "پایلوت": "bg-blue-100 text-blue-800",
  "تحقیق و توسعه": "bg-purple-100 text-purple-800",
  "طراحی": "bg-yellow-100 text-yellow-800",
  "مطالعه امکان‌سنجی": "bg-orange-100 text-orange-800",
  "ایده‌پردازی": "bg-gray-100 text-gray-800",
};

export function NationalProjectsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-headline">
            پروژه‌های ملی اکوسیستم بانکا
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            ساخت آینده مالی ایران، یک اکوسیستم در هر زمان
          </p>

          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4">
              <div className="text-2xl font-bold text-primary">6</div>
              <div className="text-sm text-muted-foreground">اکوسیستم ملی</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 rounded-xl p-4">
              <div className="text-2xl font-bold text-emerald-600">8</div>
              <div className="text-sm text-muted-foreground">صنعت هدف</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-xl p-4">
              <div className="text-2xl font-bold text-blue-600">50M+</div>
              <div className="text-sm text-muted-foreground">کاربر پتانسیل</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-xl p-4">
              <div className="text-2xl font-bold text-purple-600">2025</div>
              <div className="text-sm text-muted-foreground">راه‌اندازی</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.name}
              className={`group overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-0 ${project.color}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className={`${statusColors[project.status as keyof typeof statusColors]} border-0`}>
                    {project.status}
                  </Badge>
                </div>

                {/* Category Badge */}
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-800">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6 bg-white/80 backdrop-blur">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground font-headline group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-muted-foreground mt-2">{project.description}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <Button
                    variant="ghost"
                    className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                    size="sm"
                  >
                    اطلاعات بیشتر
                    <ExternalLink className="mr-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 font-headline">
              می‌خواهید بخشی از این تحول باشید؟
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              با پیوستن به اکوسیستم‌های ملی بانکا، آینده مالی صنعت خود را شکل دهید
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/ecosystems">
                کاوش در اکوسیستم‌ها
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}