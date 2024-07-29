"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function LoginPage() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
            
        }
    }

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
            
        }
    }


    return (
        <main className="bg-slate-950 p-2 m-2 h-screen">
            <h1 className="text-4xl font-bold text-white">Shopping List App</h1>
                {
                    user ? (
                        <div className="text-lg text-white">
                            <p>Signed in as {user.displayName} ({user.email} -  {user.uid}).</p>
                            <p>
                                <button onClick={handleSignOut} className="text-lg hover:underline">Sign out</button>
                            </p>
                            <Link href="/week-10/shopping-list/">Continue to your Shopping List</Link>
                        </div>
                    ) : (
                        <div className="text-lg text-white">
                            <button onClick={handleSignIn}>Sign in with GitHub</button>
                        </div>
                    )
                }
        </main>
   );
}