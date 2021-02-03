import { shallowMount, mount } from "@vue/test-utils";
import CheckBox from "../../src/components/CheckBox.vue";

describe("CheckBox.vue", () => {
  const category = {
    id: "1",
    isChecked: true,
    name: "apple"
  };
  it("renders props when passed", () => {
    const wrapper = shallowMount(CheckBox, {
      propsData: {
        category
      }
    });

    expect(wrapper.text()).toMatch(category.name);
    expect(wrapper.find("input").attributes("id")).toMatch(category.id);
  });

  it("should click properly", async () => {
    const onClick = jest.fn();
    const wrapper = mount(CheckBox, {
      propsData: {
        category
      },
      listeners: {
        "handle-checkbox-click": onClick
      }
    });

    const checkboxWrapper = wrapper.find("input");

    await checkboxWrapper.trigger("click");
    await checkboxWrapper.trigger("click");
    await checkboxWrapper.trigger("click");
    expect(onClick).toBeCalledTimes(3);

    await checkboxWrapper.trigger("click");
    await checkboxWrapper.trigger("click");
    expect(onClick).toBeCalledTimes(5);
  });
});
