"use client";

import { useFormState, useFormStatus } from "react-dom";
import { handleAiSolutionFinder, type FormState } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Lightbulb, Loader2 } from "lucide-react";

const initialState: FormState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="ms-2 h-4 w-4 animate-spin" />
          در حال بررسی...
        </>
      ) : (
        "دریافت راهکار"
      )}
    </Button>
  );
}

export function AiSolutionFinder() {
  const [state, formAction] = useFormState(handleAiSolutionFinder, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && state.message !== "success") {
      toast({
        title: "خطا",
        description: state.message,
        variant: "destructive",
      });
    }
    if (state.message === "success") {
        formRef.current?.reset();
    }
  }, [state, toast]);

  return (
    <section id="ai-finder" className="py-16 md:py-24 bg-background">
      <div className="container">
        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                <Lightbulb className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl md:text-3xl font-bold text-primary font-headline">
              راهکار یاب هوشمند بانکا
            </CardTitle>
            <CardDescription className="text-lg">
              صنعت و چالش‌های بانکی خود را وارد کنید تا راهکارهای اختصاصی دریافت کنید.
            </CardDescription>
          </CardHeader>
          <form ref={formRef} action={formAction}>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="industry">صنعت شما</Label>
                <Input
                  id="industry"
                  name="industry"
                  placeholder="مثال: فولاد، ساخت و ساز، گردشگری"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="challenges">چالش‌های بانکی شما</Label>
                <Textarea
                  id="challenges"
                  name="challenges"
                  placeholder="شرح دهید با چه مشکلاتی در زمینه خدمات بانکی مواجه هستید..."
                  required
                  rows={5}
                />
              </div>

               {state.recommendations && (
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <h4 className="font-bold mb-2 text-primary">توصیه هوشمند:</h4>
                    <p className="text-sm text-foreground whitespace-pre-wrap">{state.recommendations}</p>
                </div>
               )}

            </CardContent>
            <CardFooter className="flex justify-center">
              <SubmitButton />
            </CardFooter>
          </form>
        </Card>
      </div>
    </section>
  );
}
