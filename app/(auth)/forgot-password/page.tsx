'use client'

import { useActionState } from 'react'
import { forgotPassword } from '../actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function ForgotPasswordPage() {
    const [state, formAction, isPending] = useActionState(forgotPassword, null)

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center text-primary">Mot de passe oublié</CardTitle>
                    <CardDescription className="text-center">
                        Entrez votre email pour recevoir un lien de réinitialisation
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {state?.success ? (
                        <div className="text-green-600 text-center">
                            Un email de réinitialisation a été envoyé. Vérifiez votre boîte de réception.
                        </div>
                    ) : (
                        <form action={formAction} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" name="email" type="email" required placeholder="exemple@etudiant.cefat.com" />
                            </div>
                            {state?.error && (
                                <p className="text-sm text-red-500">{state.error}</p>
                            )}
                            <Button type="submit" className="w-full" disabled={isPending}>
                                {isPending ? 'Envoi...' : 'Envoyer le lien'}
                            </Button>
                        </form>
                    )}
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Link href="/login" className="text-sm text-gray-500 hover:text-primary hover:underline">
                        Retour à la connexion
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}
