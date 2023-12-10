import { useEffect, useState } from "react"
import Stats from "components/stats/stats"
import { Lap, deleteAllLaps, deleteOneLap, getAllLaps } from "features/db"

export default function Overlay({
    show,
    setShow,
}: {
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const [tableData, setTableData] = useState<Lap[]>([])

    useEffect(() => {
        //@ts-ignore
        getAllLaps().then((e: Lap) => setTableData(e))
    }, [show])

    const closeOnBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === e.currentTarget) {
            setShow(false)
        }
    }

    const handleDeleteAll = () => {
        //@ts-ignore
        deleteAllLaps().then(res => getAllLaps().then((e: Lap) => setTableData(e)))
    }

    const handleDeleteOne = (id: string) => {
        //@ts-ignore
        deleteOneLap(id).then(res => getAllLaps().then((e: Lap) => setTableData(e)))
    }

    return (
        show && (
            <div
                id="background"
                className="fixed z-20 inset-0 bg-gray-400 bg-opacity-50 flex items-center justify-center"
                onClick={closeOnBackdropClick}
            >
                <div className="bg-slate-400 h-4/5 w-4/6 rounded-2xl p-10 opacity-100 overflow-y-scroll no-scrollbar">
                    <div className="flex justify-between">
                        <button
                            className="mb-4 w-4 hover:rotate-90 hover:text-red-800 hover:font-bold transition-all duration-700 text-xs lg:text-base"
                            onClick={() => setShow(false)}
                        >
                            X
                        </button>
                        {tableData.length > 0 && (
                            <button
                                className="mb-4 hover:text-red-800 transition-all duration-700 text-xs lg:text-base"
                                onClick={handleDeleteAll}
                            >
                                Clear
                            </button>
                        )}
                    </div>
                    <Stats tableData={tableData} deleteOne={handleDeleteOne} />
                </div>
            </div>
        )
    )
}
