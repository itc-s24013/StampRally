"use client"

import Image from "next/image";
import { useRouter } from 'next/navigation'

type Props = {
    id: number;
}

export default function Correct({id}: Props) {
    const router = useRouter()
    return (
        <div className="text-center">
            <br/>
            <h1 className="fw-bold">不正解！</h1>
            <Image src="/images/mark_batsu.png" alt="" width={540} height={540} />
            <br />
            <button className="btn btn-outline-secondary mx-2" onClick={() => router.push('http://localhost:3000/questions')}>
                一覧へ
            </button>
            <button className="btn btn-outline-primary" onClick={() => router.push(`http://localhost:3000/questions/${id}`)}>
                再挑戦
            </button>
        </div>
    )
}