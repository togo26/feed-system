import { shallowMount } from "@vue/test-utils";
import AdCard from "../../src/components/Card/AdCard.vue";

describe("AdCard.vue", () => {
  it("renders props when passed", () => {
    const ad = {
      img: "https://www.example.com",
      title: "sample title",
      contents: "sample contents"
    };
    const wrapper = shallowMount(AdCard, {
      propsData: {
        ad
      }
    });

    expect(wrapper.text()).toMatch("sponsored");
    expect(wrapper.text()).toMatch(ad.title);
    expect(wrapper.text()).toMatch(ad.contents);
    expect(wrapper.find("img").attributes("alt")).toMatch(ad.img);
  });
});
