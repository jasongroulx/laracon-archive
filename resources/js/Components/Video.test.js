import {render, fireEvent} from '@testing-library/vue'
import Video from "./Video.vue";
import { describe, expect, it } from "vitest";

describe('Video', () => {

    const id = 5
    const duration = '12:12'
    const video = {
        id,
        duration,
        title: 'Test Title',
    }

    const {getByText} = render(Video, {
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
})
