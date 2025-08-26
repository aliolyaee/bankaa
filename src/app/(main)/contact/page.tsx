import { ConsultationForm } from "@/components/forms/consultation-form";
import { Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تماس با ما | بانکا",
  description: "با تیم بانکا تماس بگیرید و مشاوره تخصصی دریافت کنید.",
};


export default function ContactPage() {
    return (
        <div className="bg-secondary">
            <div className="container py-16 md:py-24">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">تماس با ما</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        ما همیشه برای شنیدن صدای شما آماده‌ایم. از طریق راه‌های زیر با ما در ارتباط باشید یا فرم مشاوره را تکمیل کنید.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="flex flex-col items-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                            <MapPin className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">آدرس</h3>
                        <p className="text-muted-foreground mt-2">تهران، خیابان آزادی، مرکز نوآوری درخت آبی</p>
                    </div>
                     <div className="flex flex-col items-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                            <Phone className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">تلفن</h3>
                        <p className="text-muted-foreground mt-2" dir="ltr">۰۲۱-۱۲۳۴۵۶۷۸</p>
                    </div>
                     <div className="flex flex-col items-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                            <Mail className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">ایمیل</h3>
                        <p className="text-muted-foreground mt-2">info@banka.ir</p>
                    </div>
                </div>

                <div className="mt-20">
                    <ConsultationForm />
                </div>
            </div>
        </div>
    );
}
