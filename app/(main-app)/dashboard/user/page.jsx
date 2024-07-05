import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserTable } from "./_components/user-table";
import { db } from "@/utils/db";

export default async function UserPage(){
    const users=await db.user.findMany()

    return (
        <Card className="shadow-none border-none">
            <CardHeader>
                <CardTitle>Manage All Platform Users</CardTitle>
            </CardHeader>
            <CardContent>
                <UserTable users={users}/>
            </CardContent>
        </Card>
    )
}