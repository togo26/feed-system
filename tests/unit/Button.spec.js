import { shallowMount, mount } from "@vue/test-utils";
import Button from "../../src/components/Button/Button.vue";

describe("Button.vue", () => {
  it("renders slots when passed", () => {
    const text = "BUTTON";
    const wrapper = shallowMount(Button, {
      slots: {
        default: text
      }
    });

    expect(wrapper.text()).toMatch(text);
  });

  it("should click properly", async () => {
    const onClick = jest.fn();
    const wrapper = mount(Button, {
      listeners: {
        "handle-click": onClick
      }
    });

    await wrapper.trigger("click");
    await wrapper.trigger("click");
    await wrapper.trigger("click");
    expect(onClick).toBeCalledTimes(3);

    await wrapper.trigger("click");
    await wrapper.trigger("click");
    expect(onClick).toBeCalledTimes(5);
  });
});
