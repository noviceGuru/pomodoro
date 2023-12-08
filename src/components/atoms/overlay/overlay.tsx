export default function Overlay({
    children,
    show,
    setShow,
}: {
    children: React.ReactNode
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}) {

    return (
        show && (
            <div className="absolute bg-slate-300 h-4/5 w-4/6 z-20 rounded-2xl p-10">
                <button
                    type="button"
                    className="absolute top-2 left-2 hover:rotate-90 hover:text-red-800 hover:font-bold transition-all duration-700"
                    onClick={() => setShow(false)}
                >
                    X
                </button>
                {children}
            </div>
        )
    )
}