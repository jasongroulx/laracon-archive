import {render} from '@testing-library/vue'
import VideoSection from "./VideoSection.vue";
import { describe, expect, it } from "vitest";

describe('VideoSection', () => {

    const title = 'Recommended'
    const videos = [
        { title: 'Video 1', duration: '1:45', url: 'https://example.com/1' },
        { title: 'Video 2', duration: '1:46', url: 'https://example.com/2' },
        { title: 'Video 3', duration: '1:47', url: 'https://example.com/3' },
    ]

    const {getByText} = render(VideoSection, {
        props: { title, videos }
    })

    it('displays the section title', () => {
        getByText(title)
    })

    it('displays all video titles', () => {
        for (const video of videos) {
            getByText(video.title)
        }
    })
})
