import {render} from '@testing-library/vue'
import Video from "./Video.vue";
import { describe, expect, it } from "vitest";
import {IVideo} from "../Interfaces";

describe('Video', () => {

    const id = 5
    const duration = '12:12'
    const thumbnailUrl = 'https://img.youtube.com/vi/3eyftAR5ilo/0.jpg'

    const video: IVideo = {
        id,
        duration,
        title: 'Test Title',
        thumbnailUrl,
        src: '"https://www.youtube.com/embed/f4QShF42c6E',
    }

    const {getByText, getByAltText} = render(Video, {
        props: {
            video,
        }
    })

    it('displays the name of the talk', () => {
        getByText('Test Title')
    })

    it('displays the duration of the talk', () => {
        getByText(duration)
    })

    it('displays a link to play the video', () => {
        const playButton = getByText('Play Now')
        expect(playButton).toHaveProperty('href', `/watch/${video.id}`)
    })

    it('should display a thumbnail', function () {
        const image:HTMLImageElement = getByAltText(video.title);
        expect(image.src).toContain(video.thumbnailUrl);
    });
})
