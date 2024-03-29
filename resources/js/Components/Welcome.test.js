import { mount } from "@vue/test-utils";
import Welcome from "./Welcome.vue";
import { describe, expect, it } from "vitest";

describe('Welcome', () => {
    it('renders', () => {
        const wrapper = mount(Welcome);
        expect(wrapper.text()).toContain('Welcome to your Jetstream application!')
    })
})
