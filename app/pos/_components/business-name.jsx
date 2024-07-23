'use client'

import { Button } from "@/components/ui/button"
import { Share } from "lucide-react"
import { toast } from "sonner"

export const BusinessName=({pos_business})=>{

    const handleShareLink=()=>{
        window.navigator.clipboard.writeText(`${window?.location?.origin}/pos?id=${pos_business?.id}`)
        toast.success("link copied to clipboard")
    }

    return(
        <div className="text-2xl flex items-center justify-between font-bold">
            <div>{pos_business?.name}</div>
            <div>
                <Button onClick={handleShareLink} variant='ghost' size="sm">
                    <Share/>
                </Button>
            </div>
        </div>
    )
}