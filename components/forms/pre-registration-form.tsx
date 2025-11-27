"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { motion, AnimatePresence } from "framer-motion"
import { Loader2, CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    personalInfoSchema,
    academicInfoSchema,
    programSelectionSchema,
    type PreRegistrationData,
} from "@/lib/schemas"

// Combine schemas for the full form
const formSchema = z.object({
    personal: personalInfoSchema,
    academic: academicInfoSchema,
    program: programSelectionSchema,
})

const steps = [
    { id: "personal", title: "Informations Personnelles" },
    { id: "academic", title: "Parcours Académique" },
    { id: "program", title: "Choix de la Formation" },
    { id: "review", title: "Récapitulatif" },
]

export function PreRegistrationForm() {
    const [currentStep, setCurrentStep] = useState(0)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const form = useForm<PreRegistrationData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            personal: {
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                dateOfBirth: "",
                nationality: "",
            },
            academic: {
                lastDiploma: "",
                school: "",
                yearObtained: "",
                averageGrade: "",
            },
            program: {
                programId: "",
                intake: "SEPTEMBER",
                studyMode: "INITIAL",
            },
        },
        mode: "onChange",
    })

    const {
        register,
        trigger,
        getValues,
        setValue,
        watch,
        formState: { errors, isValid },
    } = form

    const nextStep = async () => {
        let stepValid = false
        if (currentStep === 0) {
            stepValid = await trigger("personal")
        } else if (currentStep === 1) {
            stepValid = await trigger("academic")
        } else if (currentStep === 2) {
            stepValid = await trigger("program")
        }

        if (stepValid) {
            setCurrentStep((prev) => prev + 1)
        }
    }
    const prevStep = () => {
        setCurrentStep((prev) => prev - 1)
    }

    const onSubmit = async (data: PreRegistrationData) => {
        setIsSubmitting(true)
        try {
            const response = await fetch("/api/admission", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                throw new Error("Erreur lors de l'envoi")
            }

            const result = await response.json()
            console.log("Success:", result)
            setIsSuccess(true)
        } catch (error) {
            console.error("Submission error:", error)
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isSuccess) {
        return (
            <Card className="w-full max-w-2xl mx-auto text-center py-12">
                <CardContent className="flex flex-col items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-cefat-blue">Candidature envoyée !</h2>
                    <p className="text-cefat-gray max-w-md mx-auto">
                        Nous avons bien reçu votre demande de pré-inscription. Un email de confirmation vous a été envoyé. Notre équipe vous contactera très prochainement.
                    </p>
                    <Button onClick={() => window.location.href = "/"} className="mt-4 bg-cefat-blue hover:bg-cefat-blue-light">
                        Retour à l&apos;accueil
                    </Button>
                </CardContent>
            </Card>
        )
    }

    return (
        <div className="w-full max-w-3xl mx-auto">
            {/* Progress Steps */}
            <div className="mb-8">
                <div className="flex justify-between items-center relative">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 -z-10"></div>
                    <div
                        className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-cefat-blue -z-10 transition-all duration-300"
                        style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                    ></div>
                    {steps.map((step, index) => (
                        <div key={step.id} className="flex flex-col items-center gap-2 bg-white px-2">
                            <div
                                className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium border-2 transition-colors ${index <= currentStep
                                    ? "bg-cefat-blue border-cefat-blue text-white"
                                    : "bg-white border-gray-300 text-gray-400"
                                    }`}
                            >
                                {index + 1}
                            </div>
                            <span className={`text-xs font-medium ${index <= currentStep ? "text-cefat-blue" : "text-gray-400"} hidden md:block`}>
                                {step.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>{steps[currentStep].title}</CardTitle>
                    <CardDescription>
                        Veuillez remplir les informations ci-dessous.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <AnimatePresence mode="wait">
                            {currentStep === 0 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    className="space-y-4"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName">Prénom</Label>
                                            <Input id="firstName" {...register("personal.firstName")} placeholder="Jean" />
                                            {errors.personal?.firstName && <p className="text-xs text-red-500">{errors.personal.firstName.message}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName">Nom</Label>
                                            <Input id="lastName" {...register("personal.lastName")} placeholder="Dupont" />
                                            {errors.personal?.lastName && <p className="text-xs text-red-500">{errors.personal.lastName.message}</p>}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" {...register("personal.email")} placeholder="jean.dupont@example.com" />
                                        {errors.personal?.email && <p className="text-xs text-red-500">{errors.personal.email.message}</p>}
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Téléphone</Label>
                                            <Input id="phone" {...register("personal.phone")} placeholder="+225 07..." />
                                            {errors.personal?.phone && <p className="text-xs text-red-500">{errors.personal.phone.message}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="dateOfBirth">Date de naissance</Label>
                                            <Input id="dateOfBirth" type="date" {...register("personal.dateOfBirth")} />
                                            {errors.personal?.dateOfBirth && <p className="text-xs text-red-500">{errors.personal.dateOfBirth.message}</p>}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="nationality">Nationalité</Label>
                                        <Input id="nationality" {...register("personal.nationality")} placeholder="Ivoirienne" />
                                        {errors.personal?.nationality && <p className="text-xs text-red-500">{errors.personal.nationality.message}</p>}
                                    </div>
                                </motion.div>
                            )}

                            {currentStep === 1 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    className="space-y-4"
                                >
                                    <div className="space-y-2">
                                        <Label htmlFor="lastDiploma">Dernier diplôme obtenu</Label>
                                        <Input id="lastDiploma" {...register("academic.lastDiploma")} placeholder="Baccalauréat, Licence..." />
                                        {errors.academic?.lastDiploma && <p className="text-xs text-red-500">{errors.academic.lastDiploma.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="school">Établissement</Label>
                                        <Input id="school" {...register("academic.school")} placeholder="Lycée Classique, Université..." />
                                        {errors.academic?.school && <p className="text-xs text-red-500">{errors.academic.school.message}</p>}
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="yearObtained">Année d&apos;obtention</Label>
                                            <Input id="yearObtained" {...register("academic.yearObtained")} placeholder="2023" />
                                            {errors.academic?.yearObtained && <p className="text-xs text-red-500">{errors.academic.yearObtained.message}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="averageGrade">Moyenne (Optionnel)</Label>
                                            <Input id="averageGrade" {...register("academic.averageGrade")} placeholder="14/20" />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {currentStep === 2 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    className="space-y-4"
                                >
                                    <div className="space-y-2">
                                        <Label htmlFor="programId">Formation souhaitée</Label>
                                        <Select onValueChange={(value) => setValue("program.programId", value)} defaultValue={watch("program.programId")}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Sélectionnez une formation" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="licence-gestion">Licence en Gestion des Entreprises</SelectItem>
                                                <SelectItem value="master-audit">Master Audit et Contrôle de Gestion</SelectItem>
                                                <SelectItem value="mba-marketing">MBA Marketing Digital</SelectItem>
                                                <SelectItem value="certif-rh">Certificat RH</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        {errors.program?.programId && <p className="text-xs text-red-500">{errors.program.programId.message}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="intake">Rentrée souhaitée</Label>
                                        <Select onValueChange={(value: "SEPTEMBER" | "JANUARY") => setValue("program.intake", value)} defaultValue={watch("program.intake")}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Sélectionnez une rentrée" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="SEPTEMBER">Septembre</SelectItem>
                                                <SelectItem value="JANUARY">Janvier</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="studyMode">Rythme</Label>
                                        <Select onValueChange={(value: "INITIAL" | "ALTERNANCE") => setValue("program.studyMode", value)} defaultValue={watch("program.studyMode")}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Sélectionnez un rythme" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="INITIAL">Formation Initiale</SelectItem>
                                                <SelectItem value="ALTERNANCE">Alternance</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </motion.div>
                            )}

                            {currentStep === 3 && (
                                <motion.div
                                    key="step4"
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    className="space-y-6"
                                >
                                    <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                                        <div>
                                            <h4 className="font-semibold text-cefat-blue mb-2">Informations Personnelles</h4>
                                            <p className="text-sm text-gray-600">{getValues("personal.firstName")} {getValues("personal.lastName")}</p>
                                            <p className="text-sm text-gray-600">{getValues("personal.email")}</p>
                                            <p className="text-sm text-gray-600">{getValues("personal.phone")}</p>
                                        </div>
                                        <div className="border-t border-gray-200 pt-4">
                                            <h4 className="font-semibold text-cefat-blue mb-2">Formation</h4>
                                            <p className="text-sm text-gray-600">Programme : {getValues("program.programId")}</p>
                                            <p className="text-sm text-gray-600">Rentrée : {getValues("program.intake")}</p>
                                            <p className="text-sm text-gray-600">Rythme : {getValues("program.studyMode")}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-500 italic">
                                        En soumettant ce formulaire, vous acceptez que CEFAT Business School traite vos données personnelles pour gérer votre candidature.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button
                        variant="outline"
                        onClick={prevStep}
                        disabled={currentStep === 0 || isSubmitting}
                        className={currentStep === 0 ? "invisible" : ""}
                    >
                        <ChevronLeft className="mr-2 h-4 w-4" /> Précédent
                    </Button>

                    {currentStep < steps.length - 1 ? (
                        <Button onClick={nextStep} className="bg-cefat-blue hover:bg-cefat-blue-light">
                            Suivant <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                    ) : (
                        <Button onClick={form.handleSubmit(onSubmit)} disabled={isSubmitting} className="bg-cefat-red hover:bg-cefat-red-dark text-white">
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Envoi...
                                </>
                            ) : (
                                "Confirmer la candidature"
                            )}
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </div>
    )
}
