import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

// The component to test
const MessageComponent = {
  template: "<p>{{ msg }}</p>",
  props: ["msg"],
};

describe("should", () => {
  it("exported", () => {
    const wrapper = mount(MessageComponent, {
      props: {
        msg: "Hello world",
      },
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain("Hello world");
    expect(1).toEqual(1);
  });
});
