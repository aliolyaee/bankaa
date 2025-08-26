import React from 'react';
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, CheckCircle } from 'lucide-react';

const partners = [
  { name: "بانک ملی", logo: "https://picsum.photos/140/70?random=7", type: "بانک" },
  { name: "بانک صادرات", logo: "https://picsum.photos/140/70?random=8", type: "بانک" },
  { name: "بانک پاسارگاد", logo: "https://picsum.photos/140/70?random=9", type: "بانک" },
  { name: "بانک کشاورزی", logo: "https://picsum.photos/140/70?random=10", type: "بانک" },
  { name: "سپه", logo: "https://picsum.photos/140/70?random=11", type: "بانک" },
  { name: "تجارت", logo: "https://picsum.photos/140/70?random=12", type: "بانک" },
];

const certifications = [
  {
    icon: Shield,
    title: "ISO 9001:2015",
    description: "مدیریت کیفیت",
    color: "bg-blue-50 text-blue-700"
  },
  {
    icon: CheckCircle,
    title: "ISO 14001:2015",
    description: "مدیریت زیست‌محیطی",
    color: "bg-emerald-50 text-emerald-700"
  },
  {
    icon: Award,
    title: "ISO 45001:2018",
    description: "ایمنی و بهداشت",
    color: "bg-purple-50 text-purple-700"
  },
];

export function PartnersSection() {
  return (
    <section className="py-16 bg-white border-b">
      <div className="container">
        {/* Trust Indicators */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-headline">
            مورد اعتماد بزرگترین نهادهای مالی کشور
          </h2>
          <p className="text-muted-foreground">
            با پشتیبانی شرکای معتبر و گواهینامه‌های بین‌المللی
          </p>
        </div>

        {/* Partners Logos */}
        <div className="mb-16">
          <h3 className="text-center text-lg font-semibold text-muted-foreground mb-8">
            بانک‌های همکار
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={140}
                    height={70}
                    className="object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <Badge
                  className="absolute -top-2 -right-2 bg-primary text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                  variant="default"
                >
                  {partner.type}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-center text-lg font-semibold text-muted-foreground mb-8">
            گواهینامه‌ها و استانداردها
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className={`${cert.color} rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/50 rounded-xl mb-4">
                  <cert.icon className="h-8 w-8" />
                </div>
                <h4 className="font-bold text-lg mb-2">{cert.title}</h4>
                <p className="text-sm opacity-80">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary">18+</div>
              <div className="text-sm text-muted-foreground">بانک همکار</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">4</div>
              <div className="text-sm text-muted-foreground">گواهینامه ISO</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">امنیت تراکنش</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}