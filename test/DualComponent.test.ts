import { render } from "@testing-library/vue";
import { describe, it } from "vitest";
import {testWithinProvider} from "./testWithinProvider";

import DualComponent from "./test-components/DualComponent.vue";

describe("Two counters", async () => {
  it("increments value on click", async () => {
    render(DualComponent);

    await testWithinProvider();
  });
});
