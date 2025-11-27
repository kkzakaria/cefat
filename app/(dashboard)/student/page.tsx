import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function StudentDashboard() {
    return (
        <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Mes Cours</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-500">Aucun cours disponible pour le moment.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Mes Documents</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-500">Aucun document disponible.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Notifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-500">Aucune nouvelle notification.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
