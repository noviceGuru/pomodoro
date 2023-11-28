import { ReactNode } from "react"

export default function Container({ children }: { children: ReactNode }) {
    return <div className="w-full h-full p-10">{children}</div>
}
