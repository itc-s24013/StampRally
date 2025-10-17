"use client";
// ログインページ

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoginButton from "@/app/_components/LoginButton/index";
import { useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
    const { data: session } = useSession();
    const router = useRouter();

    // useEffect() レンダリング後に実行される→レンダリング中に画面遷移されるのを防ぐ！
    useEffect(() => {
        if (session) {
            // ログイン済みなら問題一覧へ
            router.push("/questions");
        }
    }, [session, router]);


  return (
    <div className={styles.page}>
        <LoginButton />
    </div>
  );
}
