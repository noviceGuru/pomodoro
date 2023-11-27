import { useState } from "react"

import Clock from "@/components/atoms/clock/Clock"
import Button from "@/components/atoms/button/button"

function App() {
    const [isRunning, setIsRunning] = useState<boolean>(false)

    return (
        <div className="bg-red-400">
            <Button
                className="border-2 hover:bg-yellow-200 focus:bg-red-500 active:bg-neutral-500 p-2 rounded-md"
                onClick={() => setIsRunning(!isRunning)}
            >
                Stop/Go
            </Button>
            <Clock isRunning={isRunning} />
        </div>
    )
}

export default App
