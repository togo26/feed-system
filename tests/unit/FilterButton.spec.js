import { shallowMount, mount } from "@vue/test-utils";
import FilterButton from "../../src/components/Button/FilterButton.vue";

describe("FilterButton.vue", () => {
  it("renders slots when passed", () => {
    const text = "FILTER";
    const wrapper = shallowMount(FilterButton, {
      slots: {
        default: text
      }
    });

    expect(wrapper.text()).toMatch(text);
  });

  it("should click properly", async () => {
    const onClick = jest.fn();
    const wrapper = mount(FilterButton, {
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
