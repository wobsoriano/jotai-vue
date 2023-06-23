import { render, fireEvent, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";

import DualComponent from "./DualComponent.vue";

it("increments value on click", async () => {
  render(DualComponent);

  // screen has all queries that you can use in your tests.
  // getByText returns the first matching node for the provided text, and
  // throws an error if no elements match or if more than one match is found.
  screen.getByText("Times clicked: 0", { selector: "[data-test-id=1] *" });
  screen.getByText("Times clicked: 0", { selector: "[data-test-id=2] *" });

  const button = screen.getByText("increment", {
    selector: "[data-test-id=1] *",
  });

  // Dispatch a native click event to our button element.
  await fireEvent.click(button);
  await fireEvent.click(button);

  screen.getByText("Times clicked: 2", { selector: "[data-test-id=1] *" });
  screen.getByText("Times clicked: 2", { selector: "[data-test-id=2] *" });

  const button2 = screen.getByText("increment", {
    selector: "[data-test-id=2] *",
  });

  // Dispatch a native click event to our button element.
  await fireEvent.click(button2);
  await fireEvent.click(button2);

  screen.getByText("Times clicked: 4", { selector: "[data-test-id=1] *" });
  screen.getByText("Times clicked: 4", { selector: "[data-test-id=2] *" });
});
