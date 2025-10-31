"use client";

import {signIn} from "next-auth/react";
import Image from "next/image";

export default function Index() {

    return (
        <>
            <button className="btn border-0 position-absolute top-50 start-50 translate-middle" onClick={() => signIn("google" , {callbackUrl: "/questions"})}>
                <Image src="/images/web_light_sq_SI@3x.png" alt="" width={567} height={120} className="w-100 h-100" />
            </button>
        </>
    );
}