import { type Metadata } from 'next';
import { ClientDate } from '@/components/client-date';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'سیاست حفظ حریم خصوصی | بانکا',
  description: 'سیاست حفظ حریم خصوصی و نحوه استفاده از اطلاعات کاربران در بانکا.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-secondary">
      <div className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">
              سیاست حفظ حریم خصوصی
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              آخرین به‌روزرسانی: <ClientDate />
            </p>
          </div>

          <div className="space-y-6 text-right">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">تعهد ما به حریم خصوصی شما</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">
                  در بانکا، ما به حریم خصوصی شما احترام می‌گذاریم و متعهد به حفاظت از اطلاعات شخصی شما هستیم. این سند توضیح می‌دهد که چه اطلاعاتی را جمع‌آوری می‌کنیم، چگونه از آن استفاده می‌کنیم و چه گزینه‌هایی در اختیار شما قرار دارد.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">۱. اطلاعاتی که جمع‌آوری می‌کنیم</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">
                  ما ممکن است اطلاعات زیر را جمع‌آوری کنیم:
                </p>
                <ul className="list-disc list-inside space-y-2 leading-relaxed mt-4 text-muted-foreground">
                  <li><strong>اطلاعات هویتی:</strong> نام شرکت، نام فرد مسئول، و سایر اطلاعاتی که در فرم‌های تماس و مشاوره وارد می‌کنید.</li>
                  <li><strong>اطلاعات فنی:</strong> آدرس IP، نوع مرورگر، سیستم‌عامل و اطلاعات مربوط به بازدید شما از سایت.</li>
                  <li><strong>اطلاعات کسب‌وکار:</strong> صنعت، چالش‌های بانکی و سایر جزئیاتی که برای دریافت مشاوره یا استفاده از راهکاریاب هوشمند ارائه می‌دهید.</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">۲. نحوه استفاده از اطلاعات</CardTitle>
              </CardHeader>
              <CardContent>
                 <p className="leading-relaxed text-muted-foreground">
                  از اطلاعات جمع‌آوری شده برای اهداف زیر استفاده می‌شود:
                </p>
                <ul className="list-disc list-inside space-y-2 leading-relaxed mt-4 text-muted-foreground">
                  <li>ارائه خدمات و مشاوره‌های درخواستی شما.</li>
                  <li>بهبود و شخصی‌سازی تجربه کاربری شما در وب‌سایت.</li>
                  <li>ارتباط با شما در مورد خدمات، به‌روزرسانی‌ها و پیشنهادات.</li>
                  <li>تحلیل داده‌ها برای بهبود خدمات و توسعه راهکارهای جدید.</li>
                  <li>پاسخ به سوالات و درخواست‌های پشتیبانی شما.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">۳. اشتراک‌گذاری اطلاعات</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">
                  بانکا اطلاعات شخصی شما را تحت هیچ شرایطی به اشخاص ثالث نمی‌فروشد یا اجاره نمی‌دهد. اطلاعات ممکن است تنها در موارد زیر و با رعایت قوانین با دیگران به اشتراک گذاشته شود:
                </p>
                 <ul className="list-disc list-inside space-y-2 leading-relaxed mt-4 text-muted-foreground">
                  <li>با رضایت صریح شما.</li>
                  <li>برای ارائه خدماتی که درخواست کرده‌اید (مانند ارتباط با شرکای بانکی).</li>
                  <li>در صورت وجود الزام قانونی یا درخواست از سوی مراجع قضایی.</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">۴. امنیت اطلاعات</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">
                  ما از تدابیر امنیتی فنی و سازمانی مناسب برای محافظت از اطلاعات شما در برابر دسترسی غیرمجاز، افشا، تغییر یا تخریب استفاده می‌کنیم. با این حال، هیچ روش انتقال اطلاعات از طریق اینترنت یا ذخیره‌سازی الکترونیکی ۱۰۰٪ امن نیست.
                </p>
              </CardContent>
            </Card>

             <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">۵. حقوق شما</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">
                 شما حق دسترسی، اصلاح یا حذف اطلاعات شخصی خود را دارید. برای اعمال این حقوق، لطفاً از طریق اطلاعات موجود در صفحه «تماس با ما» با ما در ارتباط باشید.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
}
