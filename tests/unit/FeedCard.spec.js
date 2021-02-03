import { mount, RouterLinkStub } from "@vue/test-utils";
import FeedCard from "../../src/components/Card/FeedCard.vue";

describe("FeedCard.vue", () => {
  it("renders props when passed", () => {
    const feed = {
      id: "1",
      category_id: "2",
      user_id: "43",
      created_at: "2020-05-26",
      title: "sample title",
      contents: "sample contents"
    };
    const wrapper = mount(FeedCard, {
      stubs: {
        RouterLink: RouterLinkStub
      },
      propsData: {
        feed
      }
    });

    expect(wrapper.text()).toMatch(feed.id);
    expect(wrapper.text()).toMatch(feed.category_id);
    expect(wrapper.text()).toMatch(feed.user_id);
    expect(wrapper.text()).toMatch(feed.title);
    expect(wrapper.text()).toMatch(feed.contents);
    expect(wrapper.text()).toMatch(feed.created_at);
  });
});
