"use client";
// ログインページ

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoginButton from "@/app/_components/LoginButton";
import styles from "./page.module.css";

export default function Home() {
    const { data: session } = useSession();
    const router = useRouter();

    if (session) {
        // ログイン済みなら問題一覧へ
        router.push("/questions");
    }

  return (
    <div className={styles.page}>
        <LoginButton />
    </div>
  );
}
