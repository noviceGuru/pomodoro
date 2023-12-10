export default function Overlay({
    children,
    show,
    setShow,
}: {
    children: React.ReactNode
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const closeOnBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === e.currentTarget) {
            setShow(false)
        }
    }

    return (
        show && (
            <div
                id="background"
                className="fixed z-20 inset-0 bg-gray-400 bg-opacity-50 flex items-center justify-center"
                onClick={closeOnBackdropClick}
            >
                <div className="bg-slate-400 h-4/5 w-4/6 rounded-2xl p-10 opacity-100 overflow-y-scroll no-scrollbar">
                    <button
                        type="button"
                        className="mb-4 hover:rotate-90 hover:text-red-800 hover:font-bold transition-all duration-700 text-xs lg:text-base"
                        onClick={() => setShow(false)}
                    >
                        X
                    </button>
                    {children}
                </div>
            </div>
        )
    )
}