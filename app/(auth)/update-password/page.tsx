'use client'

import { useActionState } from 'react'
import { updatePassword } from '../actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function UpdatePasswordPage() {
    const [state, formAction, isPending] = useActionState(updatePassword, null)

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center text-primary">Nouveau mot de passe</CardTitle>
                    <CardDescription className="text-center">
                        Choisissez un nouveau mot de passe pour votre compte
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form action={formAction} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="password">Nouveau mot de passe</Label>
                            <Input id="password" name="password" type="password" required minLength={6} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                            <Input id="confirmPassword" name="confirmPassword" type="password" required minLength={6} />
                        </div>
                        {state?.error && (
                            <p className="text-sm text-red-500">{state.error}</p>
                        )}
                        <Button type="submit" className="w-full" disabled={isPending}>
                            {isPending ? 'Mise à jour...' : 'Mettre à jour'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
