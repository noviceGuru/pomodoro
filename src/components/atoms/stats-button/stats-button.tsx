import ListIcon from "assets/list.svg"

export default function StatsButton({
    setShowOverlay,
}: {
    setShowOverlay: (value: React.SetStateAction<boolean>) => void
}) {
    return (
        <button
            className="flex justify-center absolute right-2 top-1"
            onClick={() => setShowOverlay(true)}
        >
            <img src={ListIcon} alt="show-list-button" className="m-6 w-8 sm:w-14" />
        </button>
    )
}
