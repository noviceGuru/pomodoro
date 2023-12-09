import { useState, useEffect } from "react"
import { getAllLaps } from "features/db"

export default function Stats() {
    const [tableData, setTableData] = useState<{}>()

    useEffect(() => {
        getAllLaps().then(e => setTableData(e))
    }, [])

    return <div> {JSON.stringify(tableData)} </div>
}
