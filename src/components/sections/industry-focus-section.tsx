import React from 'react';
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building2, Plane, HeartPulse, Sparkles, Wind, Ship, Utensils, Landmark } from 'lucide-react';

const INDUSTRIES = [
  {
    name: "فولاد",
    icon: Sparkles,
    slug: "steel",
    color: "bg-gradient-to-br from-slate-50 to-slate-100 hover:from-slate-100 hover:to-slate-200",
    iconColor: "text-slate-600"
  },
  {
    name: "ساخت و ساز",
    icon: Building2,
    slug: "construction",
    color: "bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200",
    iconColor: "text-orange-600"
  },
  {
    name: "گردشگری",
    icon: Plane,
    slug: "tourism",
    color: "bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200",
    iconColor: "text-blue-600"
  },
  {
    name: "بهداشت و درمان",
    icon: HeartPulse,
    slug: "healthcare",
    color: "bg-gradient-to-br from-emerald-50 to-emerald-100 hover:from-emerald-100 hover:to-emerald-200",
    iconColor: "text-emerald-600"
  },
  {
    name: "انرژی",
    icon: Wind,
    slug: "energy",
    color: "bg-gradient-to-br from-yellow-50 to-yellow-100 hover:from-yellow-100 hover:to-yellow-200",
    iconColor: "text-yellow-600"
  },
  {
    name: "حمل و نقل",
    icon: Ship,
    slug: "transportation",
    color: "bg-gradient-to-br from-indigo-50 to-indigo-100 hover:from-indigo-100 hover:to-indigo-200",
    iconColor: "text-indigo-600"
  },
  {
    name: "صنایع غذایی",
    icon: Utensils,
    slug: "food",
    color: "bg-gradient-to-br from-rose-50 to-rose-100 hover:from-rose-100 hover:to-rose-200",
    iconColor: "text-rose-600"
  },
  {
    name: "املاک و مستغلات",
    icon: Landmark,
    slug: "real-estate",
    color: "bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200",
    iconColor: "text-purple-600"
  },
];

export function IndustryFocusSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary to-accent/5">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-headline">
            تخصص ما، صنایع شما
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            راهکارهای تخصصی برای هر صنعت، متناسب با چالش‌ها و فرصت‌های منحصربه‌فرد
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {INDUSTRIES.map((industry, index) => (
            <Link href={`/industries/${industry.slug}`} key={index}>
              <Card className={`group cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-0 overflow-hidden ${industry.color}`}>
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 bg-white/60 group-hover:bg-white group-hover:scale-110 transition-all shadow-lg`}>
                    <industry.icon className={`h-8 w-8 ${industry.iconColor}`} />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors font-headline">
                    {industry.name}
                  </h3>
                  <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-xs text-muted-foreground">راهکارهای اختصاصی</div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="hover:bg-primary hover:text-white border-primary text-primary"
            asChild
          >
            <Link href="/industries">
              مشاهده همه صنایع
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}