import { useState, useEffect } from "react"
import { getAllLaps, Lap } from "features/db"
import { convertSecsToMins } from "features/utils"

export default function Stats() {
    const [tableData, setTableData] = useState<Lap[]>([])

    useEffect(() => {
        //@ts-ignore
        getAllLaps().then((e: Lap) => setTableData(e))
    }, [])

    return (
        <table className="w-full rounded-2xl border-collapse bg-blue-300">
            {tableData.reverse().map(({ id, type, time }) => (
                <tr
                    className={`w-full rounded-2xl  ${
                        type === "pomodoro" ? "bg-rose-400" : "bg-slate-300"
                    }`}
                    key={id}
                >
                    <td className="p-2">{type}</td>
                    <td className="w-20">{convertSecsToMins(time)}</td>
                </tr>
            ))}
        </table>
    )
}
