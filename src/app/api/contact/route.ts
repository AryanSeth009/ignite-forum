import { getMongoDb } from '@/db';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const contactSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    subject: z.string().min(1),
    message: z.string().min(1),
});

export async function POST(req: Request) {
    try {
        const json = await req.json();
        const parsed = contactSchema.safeParse(json);
        if (!parsed.success) {
            return NextResponse.json({ error: parsed.error.format() }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: process.env.SMTP_USER,
            to: 'ignite.csbs@gmail.com',
            subject: `Ignite Forum Contact: ${parsed.data.subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                    <h2 style="color: #4CAF50;">New Message from Ignite Forum Contact Form</h2>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 20%;">Name</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${parsed.data.name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${parsed.data.email}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Subject</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${parsed.data.subject}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; vertical-align: top;">Message</td>
                            <td style="padding: 10px; border: 1px solid #ddd; white-space: pre-wrap;">${parsed.data.message}</td>
                        </tr>
                    </table>
                    <br/>
                    <p style="font-size: 0.9em; color: #777;">This email was sent from the ignite-forum website contact form.</p>
                </div>
            `,
        };

        try {
            await transporter.sendMail(mailOptions);
        } catch (emailError) {
            console.error('Failed to send email:', emailError);
            return NextResponse.json({ error: 'Failed to send email message' }, { status: 500 });
        }

        try {
            // Keep DB logic but prevent it from breaking the response if MongoDB is not initialized
            const db = await getMongoDb();
            await db.collection('contact_messages').insertOne({
                ...parsed.data,
                createdAt: new Date().toISOString(),
                status: 'new',
            });
        } catch (dbError) {
            console.warn('MongoDB not configured or unavailable, skipping DB insert:', dbError);
        }

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json({ error: 'Failed to submit message' }, { status: 500 });
    }
}
