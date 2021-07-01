import React from "react"

export function withSuspense(Component: any) {
    return () => {
        return <React.Suspense fallback={<div style={{color: 'white'}}>Loading...</div>}>
            <Component/>
        </React.Suspense>
    }
}