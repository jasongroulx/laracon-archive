import {render} from '@testing-library/vue'
import WatchTalk from "./WatchTalk.vue";
import {describe, expect, it} from "vitest";
import {IVideo} from "../Interfaces";

describe('WatchTalk', () => {


    const video: IVideo = { title: 'Video 1', duration: '1:45', id: 1, thumbnailUrl: 'http://videos/thumbnail_1.jpg', url: 'https://videoUrl1.com'}


    const {getByText, getByTitle} = render(WatchTalk, {
        props: { video }
    })

    it('displays the video title', () => {
        getByText(video.title)
    })

    it('should render an iframe for the video', function () {
        const element = getByTitle<HTMLIFrameElement>(video.title)

        expect(element.tagName).toEqual('IFRAME')
        expect(element.getAttribute("src")).toBe(video.url);
    });
})
