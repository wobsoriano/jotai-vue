import { render, screen, within } from "@testing-library/vue";
import { describe, it } from "vitest";
import { testWithinProvider } from "./testWithinProvider";

import DualProvider from "./test-components/DualProvider.vue";

describe("Two providers", () => {
  it("increments value on click", async () => {
    render(DualProvider);

    const providerOne = screen.getByTestId("provider-1");
    const providerTwo = screen.getByTestId("provider-2");

    within(providerOne).getByText("Provider");
    within(providerTwo).getByText("Provider");

    await testWithinProvider(providerOne);
    // await testWithinProvider(providerTwo);
  });
});
