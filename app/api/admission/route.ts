import { NextResponse } from "next/server";
import { preRegistrationSchema } from "@/lib/schemas";
import { supabase } from "@/lib/supabase";
import { resend } from "@/lib/resend";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate data
        const result = preRegistrationSchema.safeParse(body);
        if (!result.success) {
            return NextResponse.json(
                { error: "Validation failed", details: result.error.flatten() },
                { status: 400 }
            );
        }

        const data = result.data;

        // Check if Supabase is configured
        if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
            console.warn("Supabase not configured. Skipping DB insertion.");
            // For dev/demo purposes, we'll just return success
            return NextResponse.json({ success: true, message: "Mock success (DB not configured)" });
        }

        // Insert into Supabase
        const { error: dbError } = await supabase
            .from("admissions")
            .insert([
                {
                    first_name: data.personal.firstName,
                    last_name: data.personal.lastName,
                    email: data.personal.email,
                    phone: data.personal.phone,
                    date_of_birth: data.personal.dateOfBirth,
                    nationality: data.personal.nationality,
                    last_diploma: data.academic.lastDiploma,
                    school: data.academic.school,
                    year_obtained: data.academic.yearObtained,
                    average_grade: data.academic.averageGrade,
                    program_id: data.program.programId,
                    intake: data.program.intake,
                    study_mode: data.program.studyMode,
                    status: "PENDING",
                },
            ]);

        if (dbError) {
            console.error("Supabase error:", dbError);
            return NextResponse.json({ error: "Database error" }, { status: 500 });
        }

        // Send Email via Resend
        if (process.env.RESEND_API_KEY) {
            try {
                await resend.emails.send({
                    from: 'CEFAT Admission <onboarding@resend.dev>', // Update with verified domain
                    to: [data.personal.email],
                    subject: 'Confirmation de votre pré-inscription - CEFAT Business School',
                    html: `
            <h1>Bonjour ${data.personal.firstName},</h1>
            <p>Nous avons bien reçu votre demande de pré-inscription pour la formation : <strong>${data.program.programId}</strong>.</p>
            <p>Notre équipe va étudier votre dossier et vous contactera sous 48h.</p>
            <p>Cordialement,<br/>L'équipe CEFAT</p>
          `,
                });
            } catch (emailError) {
                console.error("Email error:", emailError);
                // Don't fail the request if email fails, just log it
            }
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Server error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
