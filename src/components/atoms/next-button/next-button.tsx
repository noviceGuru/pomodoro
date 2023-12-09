import NextItem from "assets/nextItem.svg"

export default function NextButton({ handleNext }: { handleNext: () => void }) {
    return (
        <button className="flex justify-center" onClick={handleNext}>
            <img src={NextItem} alt="next-item-button" className="m-6 w-8 sm:w-14" />
        </button>
    )
}
