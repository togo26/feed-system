import { mount } from "@vue/test-utils";
import FeedDetailCard from "../../src/components/Card/FeedDetailCard.vue";

describe("FeedDetailCard.vue", () => {
  it("renders props when passed", () => {
    const feed = {
      id: "1",
      category_id: "2",
      user_id: "43",
      created_at: "2020-05-26",
      title: "sample title",
      contents: "sample contents"
    };
    const wrapper = mount(FeedDetailCard, {
      propsData: {
        feed
      }
    });

    expect(wrapper.text()).toMatch(feed.title);
    expect(wrapper.text()).toMatch(feed.contents);
    expect(wrapper.text()).toMatch(feed.created_at);
  });
});
