import { expect, test } from "vitest"
import { sum } from "../sample"

test("add関数が正しく動作する", () => {
  expect(sum(1, 1)).toBe(2)
})
