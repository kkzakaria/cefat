import { z } from "zod";

export const personalInfoSchema = z.object({
    firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
    lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
    email: z.string().email("Email invalide"),
    phone: z.string().min(10, "Numéro de téléphone invalide"),
    dateOfBirth: z.string().min(1, "Date de naissance requise"),
    nationality: z.string().min(1, "Nationalité requise"),
});

export const academicInfoSchema = z.object({
    lastDiploma: z.string().min(1, "Dernier diplôme requis"),
    school: z.string().min(1, "Établissement requis"),
    yearObtained: z.string().min(4, "Année d'obtention requise"),
    averageGrade: z.string().optional(),
});

export const programSelectionSchema = z.object({
    programId: z.string().min(1, "Veuillez sélectionner une formation"),
    intake: z.enum(["SEPTEMBER", "JANUARY"]),
    studyMode: z.enum(["INITIAL", "ALTERNANCE"]),
});

export const preRegistrationSchema = z.object({
    personal: personalInfoSchema,
    academic: academicInfoSchema,
    program: programSelectionSchema,
});

export type PreRegistrationData = z.infer<typeof preRegistrationSchema>;
