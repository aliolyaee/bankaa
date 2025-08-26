"use client";

import { useFormState, useFormStatus } from "react-dom";
import { handleConsultationRequest } from "@/app/actions";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { INDUSTRIES } from "@/lib/constants";
import { Loader2 } from "lucide-react";


function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="ms-2 h-4 w-4 animate-spin" />
          در حال ارسال...
        </>
      ) : (
        "ارسال درخواست"
      )}
    </Button>
  );
}

export function ConsultationForm() {
  const [state, formAction] = useFormState(handleConsultationRequest, null);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!state) return;
    if (state.message.includes("موفقیت")) {
        toast({
            title: "موفقیت",
            description: state.message,
        });
        formRef.current?.reset();
    } else {
        toast({
            title: "خطا",
            description: state.message,
            variant: "destructive",
        });
    }
  }, [state, toast]);

  return (
    <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
            <CardTitle>فرم درخواست مشاوره</CardTitle>
            <CardDescription>برای دریافت مشاوره تخصصی، فرم زیر را تکمیل کنید. کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت.</CardDescription>
        </CardHeader>
        <form ref={formRef} action={formAction}>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="companyName">نام شرکت</Label>
                        <Input id="companyName" name="companyName" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="contactPerson">نام فرد مسئول</Label>
                        <Input id="contactPerson" name="contactPerson" required />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="industry">صنعت</Label>
                    <Select name="industry" required>
                        <SelectTrigger id="industry">
                            <SelectValue placeholder="صنعت خود را انتخاب کنید" />
                        </SelectTrigger>
                        <SelectContent>
                            {INDUSTRIES.map((industry) => (
                                <SelectItem key={industry.slug} value={industry.name}>
                                    {industry.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="challenges">چالش‌های بانکی فعلی</Label>
                    <Textarea id="challenges" name="challenges" rows={5} required placeholder="لطفاً به طور خلاصه چالش‌های خود را شرح دهید..." />
                </div>
            </CardContent>
            <CardFooter>
                <SubmitButton />
            </CardFooter>
        </form>
    </Card>
  );
}
