import { useState, useEffect } from "react"
import { getAllLaps, Lap, deleteAllLaps, deleteOneLap } from "features/db"

export default function useStats() {
    const [tableData, setTableData] = useState<Lap[]>([])

    useEffect(() => {
        //@ts-ignore
        getAllLaps().then((e: Lap) => setTableData(e))
    }, [])

    const handleDeleteAll = () => {
        //@ts-ignore
        deleteAllLaps().then(res => getAllLaps().then((e: Lap) => setTableData(e)))
    }

    const handleDeleteOne = (id: string) => {
        //@ts-ignore
        deleteOneLap(id).then(res => getAllLaps().then((e: Lap) => setTableData(e)))
    }

    return { tableData, handleDeleteAll, handleDeleteOne }
}
