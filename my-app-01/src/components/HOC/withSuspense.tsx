import React, {ComponentType} from "react"

export function withSuspense(Component: ComponentType) {
    return () => {
        return <React.Suspense fallback={<div style={{color: 'white'}}>Loading...</div>}>
            <Component/>
        </React.Suspense>
    }
}