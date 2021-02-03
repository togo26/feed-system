import { shallowMount } from "@vue/test-utils";
import ModalView from "../../src/components/ModalView.vue";

describe("ModalView.vue", () => {
  it("renders slots when passed", () => {
    const text = "MODAL";
    const wrapper = shallowMount(ModalView, {
      slots: {
        default: text
      }
    });

    expect(wrapper.text()).toMatch(text);
    expect(wrapper.classes("modal")).toBe(true);
    expect(wrapper.find(".overlay").exists()).toBe(true);
    expect(wrapper.find(".modal-card").exists()).toBe(true);
  });
});
