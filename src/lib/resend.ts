"use server"
import { Resend } from "resend";
import { candidateInfo } from "@/constants/data";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (email: string, name: string, message: string) => {
    await resend.emails.send({
        from: `Acme <onboarding@resend.dev>`,
        replyTo: email,
        to: candidateInfo.email,
        subject: "Contact from my portfolio",
        html: `<p>Hey, I am ${name}</p><p>${message}</p>${email}</p>`,
    })
};
