import { shallowMount } from "@vue/test-utils";
import Loading from "../../src/components/Loading.vue";

describe("Loading.vue", () => {
  it("renders properly", () => {
    const wrapper = shallowMount(Loading);
    expect(wrapper.findAll("span").length).toEqual(2);
  });

  it("renders slots when passed", () => {
    const text = "LOADING";
    const wrapper = shallowMount(Loading, {
      slots: {
        default: text
      }
    });

    expect(wrapper.text()).toMatch(text);
  });
});
