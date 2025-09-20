import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import App from "../App"

describe("App", () => {
  test("タイトルが表示される", () => {
    render(<App />)

    expect(
      screen.getByRole("heading", { name: "Todo App" })
    ).toBeInTheDocument()
  })

  test("タスクを追加できる", () => {
    render(<App />)

    const input = screen.getByPlaceholderText("add a todo...")
    const addButton = screen.getByRole("button", { name: "add" })

    fireEvent.change(input, { target: { value: "cooking" } })
    fireEvent.click(addButton)

    expect(screen.getByText("cooking")).toBeInTheDocument()
  })
})
