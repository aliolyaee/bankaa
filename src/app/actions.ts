"use server";

import { aiSolutionFinder } from "@/ai/flows/ai-solution-finder";
import { z } from "zod";

const solutionFinderSchema = z.object({
  industry: z.string().min(2, "لطفاً صنعت خود را وارد کنید."),
  challenges: z.string().min(10, "لطفاً چالش‌های خود را با جزئیات بیشتری شرح دهید."),
});

export type FormState = {
  message: string;
  recommendations?: string;
  fields?: {
    industry?: string;
    challenges?: string;
  };
};

export async function handleAiSolutionFinder(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = solutionFinderSchema.safeParse({
    industry: formData.get("industry"),
    challenges: formData.get("challenges"),
  });

  if (!validatedFields.success) {
    const fieldErrors = validatedFields.error.flatten().fieldErrors;
    return {
      message: "لطفاً خطاهای فرم را برطرف کنید.",
      fields: {
        industry: formData.get("industry")?.toString(),
        challenges: formData.get("challenges")?.toString(),
      },
    };
  }

  try {
    const { recommendations } = await aiSolutionFinder({
      industry: validatedFields.data.industry,
      challenges: validatedFields.data.challenges,
    });
    return { message: "success", recommendations };
  } catch (error) {
    console.error("AI Solution Finder Error:", error);
    return {
      message: "متاسفانه در دریافت پاسخ از هوش مصنوعی خطایی رخ داد. لطفاً دوباره تلاش کنید.",
    };
  }
}

const consultationSchema = z.object({
    companyName: z.string().min(2, "نام شرکت الزامی است."),
    industry: z.string().min(1, "انتخاب صنعت الزامی است."),
    contactPerson: z.string().min(2, "نام فرد مسئول الزامی است."),
    challenges: z.string().min(10, "شرح چالش‌ها الزامی است."),
});

export async function handleConsultationRequest(prevState: any, formData: FormData) {
    const validatedFields = consultationSchema.safeParse(Object.fromEntries(formData.entries()));

    if (!validatedFields.success) {
        return {
            message: "لطفاً فیلدهای ضروری را پر کنید.",
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    // Here you would typically send an email, save to a database, etc.
    console.log("New Consultation Request:", validatedFields.data);

    return { message: "درخواست شما با موفقیت ثبت شد. به زودی با شما تماس خواهیم گرفت." };
}
