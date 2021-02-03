import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import Header from "../../src/components/Header.vue";

describe("Header.vue", () => {
  it("renders props when passed", async () => {
    const text = "HEADER";
    const wrapper = shallowMount(Header, {
      stubs: {
        RouterLink: RouterLinkStub
      },
      data() {
        return {
          description: text
        };
      }
    });

    expect(wrapper.text()).toMatch(text);
  });
});
