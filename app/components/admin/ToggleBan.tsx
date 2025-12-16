"use client";

import { toggleBanAction } from "@/app/actions/admin/toggleBanAction";
import { useState } from "react";

export const ToggleBan = ({userId, isBanned}: {userId: number, isBanned: boolean}
    
) => {
console.log(isBanned)
console.log(userId)
    const [banStatus, setBanStatus] = useState(isBanned)
    const ban = !banStatus

    return (
                <form action={toggleBanAction} className="flex flex-col w-100 gap-1 p-1 m-1 border">
                    <input type="hidden" name="userId" value={userId} />
                    <input type="hidden" name="isBanned" value={ban.toString()} />
                    <button type="submit" onClick={() => {setBanStatus(!banStatus)}}>{banStatus?"Débannir":"Bannir"}</button>
                </form>
        
    ) 
        
}