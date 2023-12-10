import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import { expect, test } from "vitest"
import Clock from "./clock"

test("if Running, it has border-4 bg-amber-600 classes ", () => {
    render(
        <Clock
            seconds={45}
            setSeconds={() => {}}
            isRunning={true}
            setIsRunning={() => {}}
            selectedTime={25}
        />
    )
    const clock = screen.getByTestId("clock")
    expect(clock).toHaveClass("border-4 bg-amber-600")
})
