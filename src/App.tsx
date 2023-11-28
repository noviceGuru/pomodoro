import { useState } from "react"

import Clock from "components/atoms/clock/Clock"
import Button from "components/atoms/button/button"
import Container from "components/atoms/container/container"

function App() {
    const [isRunning, setIsRunning] = useState<boolean>(false)

    return (
        <Container>
            <Button
                className="border-2 hover:bg-yellow-200 focus:bg-red-500 active:bg-neutral-500 p-2 rounded-md"
                onClick={() => setIsRunning(!isRunning)}
            >
                {isRunning ? `Stop` : `Go`}
            </Button>
            <Clock isRunning={isRunning} />
        </Container>
    )
}

export default App
