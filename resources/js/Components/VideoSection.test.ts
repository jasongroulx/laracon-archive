import {render} from '@testing-library/vue'
import VideoSection from "./VideoSection.vue";
import { describe, it } from "vitest";
import {IVideo} from "../Interfaces";

describe('VideoSection', () => {

    const title = 'Recommended'
    const videos: IVideo[] = [
        { title: 'Video 1', duration: '1:45', id: 1, thumbnailUrl: 'http://videos/thumbnail_1.jpg', src: 'https://videoUrl1.com'},
        { title: 'Video 2', duration: '1:46', id: 2, thumbnailUrl: 'http://videos/thumbnail_2.jpg', src: 'https://videoUrl2.com'},
        { title: 'Video 3', duration: '1:47', id: 3, thumbnailUrl: 'http://videos/thumbnail_3.jpg', src: 'https://videoUrl3.com'},
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
