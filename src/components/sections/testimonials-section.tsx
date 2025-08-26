"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/lib/constants";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">
            داستان‌های موفقیت مشتریان ما
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            بشنوید از رهبران صنایعی که با ما به موفقیت رسیده‌اند.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
            direction: "rtl",
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {TESTIMONIALS.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-start text-right p-6">
                      <div className="flex text-yellow-400 mb-2">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                      </div>
                      <p className="text-muted-foreground mb-4 h-32">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center gap-3 pt-4 border-t w-full">
                        {/* Placeholder for company logo */}
                        <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                            <Image src="https://picsum.photos/48/48" width={48} height={48} alt="Company logo" data-ai-hint="company logo" className="rounded-full" />
                        </div>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
