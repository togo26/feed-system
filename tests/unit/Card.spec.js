import { shallowMount } from "@vue/test-utils";
import Card from "../../src/components/Card/Card.vue";

describe("Card.vue", () => {
  it("renders slots when passed", () => {
    const text = "CARD";
    const wrapper = shallowMount(Card, {
      slots: {
        default: text
      }
    });

    expect(wrapper.text()).toMatch(text);
  });
});
