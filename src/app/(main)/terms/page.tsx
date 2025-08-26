import { type Metadata } from 'next';
import { ClientDate } from '@/components/client-date';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'شرایط و ضوابط | بانکا',
  description: 'شرایط و ضوابط استفاده از خدمات بانکا.',
};

export default function TermsPage() {
  return (
    <div className="bg-secondary">
      <div className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">
              شرایط و ضوابط
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              آخرین به‌روزرسانی: <ClientDate />
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">مقدمه</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">
                  استفاده از وب‌سایت و خدمات «بانکا» (متعلق به شرکت همیار پردازان سبز ایرانیان) به منزله پذیرش کامل شرایط و ضوابط زیر است. لطفاً این موارد را با دقت مطالعه فرمایید. ادامه استفاده شما از این سایت به معنی موافقت با تمامی این شرایط است.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">۱. تعاریف</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 leading-relaxed text-muted-foreground">
                  <li><strong>بانکا:</strong> اشاره به شرکت همیار پردازان سبز ایرانیان با نام تجاری بانکا دارد.</li>
                  <li><strong>کاربر:</strong> هر شخص حقیقی یا حقوقی که از خدمات وب‌سایت بانکا استفاده می‌کند.</li>
                  <li><strong>خدمات:</strong> شامل کلیه نرم‌افزارها، ابزارها، مشاوره‌ها و محتوای ارائه‌شده توسط بانکا.</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">۲. حساب کاربری و اطلاعات</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">
                  کاربر متعهد می‌شود که اطلاعات صحیح و کاملی را هنگام ثبت‌نام و درخواست مشاوره ارائه دهد. مسئولیت صحت اطلاعات بر عهده کاربر است. بانکا متعهد به حفظ حریم خصوصی اطلاعات کاربران طبق «سیاست حفظ حریم خصوصی» است.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">۳. مالکیت معنوی</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">
                  کلیه محتوا، کدها، لوگوها، و طراحی‌های موجود در این وب‌سایت متعلق به شرکت همیار پردازان سبز ایرانیان (بانکا) است و هرگونه کپی‌برداری، تکثیر، یا استفاده تجاری بدون مجوز کتبی ممنوع و قابل پیگرد قانونی است.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">۴. محدودیت مسئولیت</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">
                  اطلاعات و مشاوره‌های ارائه‌شده توسط بانکا، به ویژه از طریق ابزارهای هوش مصنوعی، جنبه پیشنهادی دارند و نباید به عنوان تنها مبنای تصمیم‌گیری‌های مالی و تجاری در نظر گرفته شوند. بانکا مسئولیتی در قبال سود یا زیان ناشی از تصمیمات کاربران بر اساس این اطلاعات نخواهد داشت. مسئولیت نهایی تحلیل و استفاده از اطلاعات بر عهده کاربر است.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">۵. تغییرات در شرایط و ضوابط</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">
                  بانکا این حق را برای خود محفوظ می‌دارد که در هر زمان شرایط و ضوابط را تغییر دهد. نسخه به‌روز شده همیشه در این صفحه در دسترس خواهد بود و استفاده مستمر کاربر از سایت به منزله پذیرش تغییرات است.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
}
