import ServerProtectedComponent from "@/components/ServerProtectedComponents";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ServerProtectedComponent>
                {children}
            </ServerProtectedComponent>
        </>
    )
}