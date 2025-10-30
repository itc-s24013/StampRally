"use client";

import {signOut} from "next-auth/react";

export default function Index() {

    return (
        <>
            <button className="btn btn-outline-secondary" onClick={() => signOut({ callbackUrl: "http://localhost:3000/" })}>
                ログアウト
            </button>
        </>
    );
}