"use client";

import Image from "next/image";
import { useRouter } from 'next/navigation'

export default function Correct() {
    const router = useRouter()
    return (
        <div className="text-center">
            <br/>
            <h1>正解！</h1>
            <Image src="/images/mark_maru.png" alt="" width={540} height={540} />
            <br />
            <button className="btn btn-outline-secondary mx-2" onClick={() => router.push('http://localhost:3000/questions')}>
                一覧へ
            </button>
        </div>
    )
}