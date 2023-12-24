import StatsHeader from "components/atoms/stats-header/stats-header"
import StatsTable from "components/atoms/stats-table/stats-table"

import useStats from "components/molecules/stats/useStats"

export default function Stats({
    setShow,
}: {
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const { tableData, handleDeleteAll, handleDeleteOne } = useStats()

    return (
        <div className="bg-slate-400 h-4/5 w-4/6 rounded-2xl p-10 opacity-100 overflow-y-scroll no-scrollbar">
            <StatsHeader
                handleDeleteAll={handleDeleteAll}
                setShow={setShow}
                showClearAll={tableData.length > 0}
            />
            <StatsTable tableData={tableData} deleteOne={handleDeleteOne} />
        </div>
    )
}
