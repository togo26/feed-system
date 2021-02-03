import { mount } from "@vue/test-utils";
import CloseButton from "../../src/components/Button/CloseButton.vue";

describe("CloseButton.vue", () => {
  it("should click properly", async () => {
    const onClick = jest.fn();
    const wrapper = mount(CloseButton, {
      listeners: {
        close: onClick
      }
    });

    await wrapper.trigger("click");
    await wrapper.trigger("click");
    expect(onClick).toBeCalledTimes(2);

    await wrapper.trigger("click");
    await wrapper.trigger("click");
    expect(onClick).toBeCalledTimes(4);
  });
});
