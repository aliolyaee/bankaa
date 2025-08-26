import {
  Banknote,
  Building2,
  HeartPulse,
  Landmark,
  Lightbulb,
  Palette,
  Plane,
  Plus,
  Rocket,
  Scale,
  Settings,
  Ship,
  Sparkles,
  Utensils,
  Wind,
  type LucideIcon,
} from "lucide-react";

export const NAV_LINKS = [
  { href: "/", label: "خانه" },
  { href: "/about", label: "درباره ما" },
  {
    label: "خدمات",
    href: "/services",
    children: [
      { href: "/services/banking-software", label: "نرم افزار حسابداری بانکی" },
      { href: "/services/api-solutions", label: "راهکارهای API" },
      { href: "/services/scf", label: "تامین مالی زنجیره تامین" },
      { href: "/services/ecosystem-design", label: "طراحی اکوسیستم مالی" },
      { href: "/services/consulting", label: "مشاوره مالی" },
    ],
  },
  {
    label: "صنایع",
    href: "/industries",
    children: [
      { href: "/industries/steel", label: "صنعت فولاد" },
      { href: "/industries/construction", label: "ساخت و ساز" },
      { href: "/industries/tourism", label: "گردشگری" },
      { href: "/industries/healthcare", label: "مراقبت های بهداشتی" },
    ],
  },
  { href: "/ecosystems", label: "اکوسیستم‌ها" },
  { href: "/innovation", label: "مرکز نوآوری" },
  { href: "/resources", label: "منابع" },
  { href: "/contact", label: "تماس با ما" },
];

export const INDUSTRIES = [
  { name: "فولاد", icon: Sparkles, slug: "steel" },
  { name: "ساخت و ساز", icon: Building2, slug: "construction" },
  { name: "گردشگری", icon: Plane, slug: "tourism" },
  { name: "بهداشت و درمان", icon: HeartPulse, slug: "healthcare" },
  { name: "انرژی", icon: Wind, slug: "energy" },
  { name: "حمل و نقل", icon: Ship, slug: "transportation" },
  { name: "صنایع غذایی", icon: Utensils, slug: "food" },
  { name: "املاک و مستغلات", icon: Landmark, slug: "real-estate" },
];

export const SERVICES = [
    {
        icon: Banknote,
        title: "نرم افزار حسابداری بانکی",
        description: "اتصال به بیش از ۱۸ بانک و ارائه راهکارهای یکپارچه مالی.",
        href: "/services/banking-software",
    },
    {
        icon: Settings,
        title: "راهکارهای API انحصاری",
        description: "ابزارهای سفارشی‌سازی و APIهای بانکی برای نیازهای خاص شما.",
        href: "/services/api-solutions",
    },
    {
        icon: Scale,
        title: "تامین مالی زنجیره تامین (SCF)",
        description: "بهینه‌سازی جریان نقدی و تقویت روابط با تامین‌کنندگان.",
        href: "/services/scf",
    },
    {
        icon: Palette,
        title: "طراحی اکوسیستم مالی",
        description: "ایجاد اکوسیستم‌های مالی خاص صنعت برای رشد پایدار.",
        href: "/services/ecosystem-design",
    },
];

export const TESTIMONIALS = [
    {
        quote: "با کمک بانکا، فرآیندهای مالی ما متحول شد. اکنون کنترل کاملی بر جریان نقدی خود داریم و توانسته‌ایم سودآوری را به طور چشمگیری افزایش دهیم.",
        name: "احمد رضایی",
        title: "مدیرعامل، فولاد مبارکه",
        companyLogo: "/placeholder.svg",
    },
    {
        quote: "راهکارهای نوآورانه بانکا در زمینه تامین مالی زنجیره تامین، روابط ما با تامین‌کنندگان را بهبود بخشید و باعث کاهش هزینه‌ها شد.",
        name: "مریم حسینی",
        title: "مدیر مالی، گروه صنعتی انتخاب",
        companyLogo: "/placeholder.svg",
    },
    {
        quote: "طراحی اکوسیستم مالی اختصاصی برای صنعت گردشگری توسط بانکا، یک نقطه عطف برای کسب‌وکار ما بود. این راهکار به ما در ارائه خدمات بهتر به مشتریان کمک شایانی کرده است.",
        name: "علی اکبری",
        title: "بنیانگذار، هلدینگ گردشگری مارکوپولو",
        companyLogo: "/placeholder.svg",
    },
];


export const PILLARS = [
    {
        icon: Landmark,
        title: "بانکا نئو-بانک",
        description: "راهکارهای بانکی سفارشی‌شده برای صنایع، تبدیل بانکداری سنتی به ابزاری استراتژیک برای درآمدزایی.",
    },
    {
        icon: Rocket,
        title: "مرکز نوآوری درخت آبی",
        description: "مرکز فین‌تک و لندتک با فضای کاری ۹,۵۱۶ متر مربع، محلی برای رشد و توسعه استارت‌آپ‌های نوآور.",
    },
    {
        icon: Lightbulb,
        title: "انجمن صنفی طراحان داخلی",
        description: "شبکه‌ای صنعتی با بیش از ۷۰۰ عضو فعال، ایجاد هم‌افزایی و فرصت‌های جدید در صنعت.",
    },
];
