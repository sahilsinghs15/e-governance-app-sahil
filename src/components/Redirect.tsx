"use client"

import { useRouter } from "next/router"
import { use, useEffect } from "react";

export function Redirect( { to}  : { to : string}) {
    const router = useRouter();
    useEffect(()=>{
        router.push(to)
    } , [] )
    return (
        <div></div>
    )
}