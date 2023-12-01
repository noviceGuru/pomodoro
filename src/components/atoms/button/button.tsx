import { ReactNode } from "react"

export default function Button({
    text,
    onClick,
    children,
    className,
}: {
    text?: string
    onClick: () => void
    children?: ReactNode
    className?: string
}) {
    return (
        <button type="button" onClick={onClick} className={className || ""}>
            {text}
            {children}
        </button>
    )
}
