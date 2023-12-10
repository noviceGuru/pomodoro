import { Lap } from "features/db"
import { convertSecsToMins } from "features/utils"

export default function Stats({
    tableData,
    deleteOne,
}: {
    tableData: Lap[]
    deleteOne: (id: string) => void
}) {
    return tableData.length > 0 ? (
        <table className="w-full rounded-2xl border-collapse bg-blue-300">
            <tbody>
                {tableData.reverse().map(({ id, type, time }) => (
                    <tr
                        className={`w-full rounded-2xl ${
                            type === "pomodoro" ? "bg-rose-400" : "bg-slate-300"
                        }`}
                        key={id}
                    >
                        <td className="p-2">{type}</td>
                        <td className="w-20">{convertSecsToMins(time)}</td>
                        <td
                            className="cursor-pointer hover:text-red-900 text-center"
                            onClick={() => deleteOne(id)}
                        >
                            x
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    ) : (
        <div className="h-full flex justify-center items-center">
            <p> No laps yet</p>
        </div>
    )
}
