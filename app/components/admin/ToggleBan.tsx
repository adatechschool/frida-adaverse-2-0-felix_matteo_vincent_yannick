"use client";

import { useState } from "react";

export const ToggleBan = ({userId, isBanned}) => {

    const [banStatus, setBanStatus] = useState(false)

    return <button onClick={()=>{!setBanStatus}}>{banStatus?"Débannir":"Bannir"}</button>
}