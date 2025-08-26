import { ConsultationForm } from "@/components/forms/consultation-form";
import { Mail, MapPin, Phone, Clock, Users, Award, MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export const metadata: Metadata = {
    title: "تماس با ما | بانکا",
    description: "با تیم بانکا تماس بگیرید و مشاوره تخصصی دریافت کنید.",
};

const contactInfo = [
    {
        icon: MapPin,
        title: "آدرس",
        content: "تهران، خیابان آزادی، مرکز نوآوری درخت آبی",
        description: "ساختمان مرکزی، طبقه ۵"
    },
    {
        icon: Phone,
        title: "تلفن",
        content: "۰۲۱-۱۲۳۴۵۶۷۸",
        description: "شنبه تا پنج‌شنبه، ۹ تا ۱۸"
    },
    {
        icon: Mail,
        title: "ایمیل",
        content: "info@banka.ir",
        description: "پاسخ در کمتر از ۲۴ ساعت"
    },
    {
        icon: Clock,
        title: "ساعات کاری",
        content: "شنبه تا پنج‌شنبه",
        description: "۹:۰۰ صبح تا ۶:۰۰ عصر"
    }
];

const teamMembers = [
    { name: "مهندس علی محمدی", role: "مدیر فروش", specialty: "راهکارهای صنعت فولاد", phone: "۰۹۱۲-۱۲۳۴۵۶۷" },
    { name: "دکتر سارا رضایی", role: "مدیر فناوری", specialty: "APIها و راهکارهای فنی", phone: "۰۹۱۲-۱۲۳۴۵۶۸" },
    { name: "مهندس محمد حسینی", role: "مشاور ارشد", specialty: "طراحی اکوسیستم", phone: "۰۹۱۲-۱۲۳۴۵۶۹" },
    { name: "خانم فاطمه کریمی", role: "مدیر پشتیبانی", specialty: "خدمات مشتریان", phone: "۰۹۱۲-۱۲۳۴۵۷۰" }
];

const reasons = [
    { icon: Users, title: "تیم متخصص", description: "بیش از ۱۰ سال تجربه در حوزه مالی" },
    { icon: Award, title: "کیفیت تضمین‌شده", description: "رضایت ۹۸٪ مشتریان ما" },
    { icon: MessageCircle, title: "پشتیبانی ۲۴/۷", description: "همیشه در کنار شما هستیم" }
];

export default function ContactPage() {
    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section className="bg-secondary py-16 md:py-24">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">
                                با ما در ارتباط باشید
                            </h1>
                            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                                ما همیشه برای شنیدن صدای شما آماده‌ایم. تیم متخصص بانکا آماده ارائه بهترین راهکارهای مالی برای کسب‌وکار شماست.
                            </p>
                            <div className="mt-8 grid grid-cols-3 gap-6">
                                {reasons.map((reason) => (
                                    <div key={reason.title} className="text-center">
                                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-3">
                                            <reason.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <h3 className="font-semibold text-sm">{reason.title}</h3>
                                        <p className="text-xs text-muted-foreground mt-1">{reason.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="https://picsum.photos/600/500"
                                alt="تیم پشتیبانی بانکا"
                                width={600}
                                height={500}
                                className="rounded-lg shadow-xl"
                                data-ai-hint="customer service team"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">
                            راه‌های ارتباط با ما
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            از هر طریق که برایتان راحت‌تر است، با ما تماس بگیرید.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {contactInfo.map((item) => (
                            <Card key={item.title} className="text-center hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                                        <item.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="font-semibold text-foreground">{item.content}</p>
                                    <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Members */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">
                            با متخصصان ما گفتگو کنید
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            هر یک از اعضای تیم ما در حوزه‌ای خاص متخصص هستند.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {teamMembers.map((member) => (
                            <Card key={member.name} className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Users className="w-8 h-8 text-primary" />
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="font-bold text-lg text-primary">{member.name}</h3>
                                            <p className="text-accent font-medium">{member.role}</p>
                                            <p className="text-muted-foreground text-sm mt-2">{member.specialty}</p>
                                            <p className="text-foreground font-medium mt-3" dir="ltr">{member.phone}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">
                            درخواست مشاوره رایگان
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                            فرم زیر را تکمیل کنید تا کارشناسان ما در اسرع وقت با شما تماس بگیرند و بهترین راهکار را برای کسب‌وکار شما پیشنهاد دهند.
                        </p>
                    </div>

                    <ConsultationForm />
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">
                            محل ما را پیدا کنید
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            در قلب تهران، آماده پذیرایی از شما هستیم.
                        </p>
                    </div>

                    <div className="bg-background rounded-lg p-8 shadow-lg">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-4">مرکز نوآوری درخت آبی</h3>
                                <p className="text-muted-foreground mb-6">
                                    دفتر مرکزی بانکا در یکی از معتبرترین مراکز نوآوری تهران قرار دارد. این مکان به عنوان قلب تپنده فعالیت‌های ما، میزبان تیم‌های مختلف و جلسات مشاوره است.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <MapPin className="w-5 h-5 text-primary" />
                                        <span>تهران، خیابان آزادی، مرکز نوآوری درخت آبی</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-5 h-5 text-primary" />
                                        <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Clock className="w-5 h-5 text-primary" />
                                        <span>شنبه تا پنج‌شنبه، ۹ صبح تا ۶ عصر</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                                {/* Placeholder for map */}
                                <div className="text-center">
                                    <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                                    <p className="text-muted-foreground">نقشه محل</p>
                                    <p className="text-sm text-muted-foreground">مرکز نوآوری درخت آبی</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}