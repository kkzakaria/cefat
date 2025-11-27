'use client'

import { useActionState } from 'react'
import { signup } from '../actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function RegisterPage() {
    const [state, formAction, isPending] = useActionState(signup, null)

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center text-primary">Inscription Étudiant</CardTitle>
                    <CardDescription className="text-center">
                        Créez votre compte pour accéder à l'espace étudiant
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form action={formAction} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="fullName">Nom complet</Label>
                            <Input id="fullName" name="fullName" type="text" required placeholder="Jean Dupont" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" required placeholder="exemple@etudiant.cefat.com" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Mot de passe</Label>
                            <Input id="password" name="password" type="password" required minLength={6} />
                        </div>
                        {state?.error && (
                            <p className="text-sm text-red-500">{state.error}</p>
                        )}
                        <Button type="submit" className="w-full" disabled={isPending}>
                            {isPending ? 'Inscription...' : 'S\'inscrire'}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <p className="text-sm text-gray-500">
                        Déjà un compte ?{' '}
                        <Link href="/login" className="text-primary hover:underline">
                            Se connecter
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}
