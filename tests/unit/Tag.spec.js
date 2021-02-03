import { shallowMount } from "@vue/test-utils";
import Tag from "../../src/components/Tag.vue";

describe("Tag.vue", () => {
  it("renders props when passed", () => {
    const text = "TAG";
    const wrapper = shallowMount(Tag, {
      propsData: {
        text
      }
    });

    expect(wrapper.text()).toMatch(text);
  });
});
