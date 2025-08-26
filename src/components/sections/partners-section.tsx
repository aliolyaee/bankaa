import Image from "next/image";

const partners = [
  { name: "Partner 1", logo: "https://picsum.photos/120/60?random=7", hint: "company logo" },
  { name: "Partner 2", logo: "https://picsum.photos/120/60?random=8", hint: "company logo" },
  { name: "Partner 3", logo: "https://picsum.photos/120/60?random=9", hint: "company logo" },
  { name: "Partner 4", logo: "https://picsum.photos/120/60?random=10", hint: "company logo" },
  { name: "Partner 5", logo: "https://picsum.photos/120/60?random=11", hint: "company logo" },
  { name: "Partner 6", logo: "https://picsum.photos/120/60?random=12", hint: "company logo" },
];

export function PartnersSection() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container">
        <h2 className="text-center text-2xl font-semibold text-muted-foreground mb-8">
          شرکا و گواهینامه‌های ما
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <div key={partner.name} className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="object-contain"
                  data-ai-hint={partner.hint}
                />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
