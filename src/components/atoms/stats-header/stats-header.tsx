export default function StatsHeader({
    setShow,
    handleDeleteAll,
    showClearAll,
}: {
    setShow: (value: React.SetStateAction<boolean>) => void
    handleDeleteAll: () => void
    showClearAll?: boolean
}) {
    return (
        <div className="flex justify-between">
            <button
                className="mb-4 w-4 hover:rotate-90 hover:text-red-800 hover:font-bold transition-all duration-700 text-xs lg:text-base"
                onClick={() => setShow(false)}
            >
                X
            </button>
            {showClearAll && (
                <button
                    className="mb-4 hover:text-red-800 transition-all duration-700 text-xs lg:text-base"
                    onClick={handleDeleteAll}
                >
                    Clear
                </button>
            )}
        </div>
    )
}
