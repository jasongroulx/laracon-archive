import { mount } from "@vue/test-utils";
import Video from "./Video.vue";
import { describe, expect, it } from "vitest";

describe('Video', () => {
    it('renders', () => {
        const wrapper = mount(Video);
        expect(wrapper.text()).toContain('Hello World')
    })
})
