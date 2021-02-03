import { mount } from "@vue/test-utils";
import ReplyCard from "../../src/components/Card/ReplyCard.vue";

describe("ReplyCard.vue", () => {
  it("renders props when passed", () => {
    const reply = {
      user: { name: "John" },
      created_at: "2020-05-26",
      contents: "sample contents"
    };
    const wrapper = mount(ReplyCard, {
      propsData: {
        reply
      }
    });

    expect(wrapper.text()).toMatch(reply.user.name);
    expect(wrapper.text()).toMatch(reply.contents);
    expect(wrapper.text()).toMatch(reply.created_at);
  });
});
