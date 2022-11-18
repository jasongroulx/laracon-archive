import {render, fireEvent} from '@testing-library/vue'
import Video from "./Video.vue";
import { describe, expect, it } from "vitest";

describe('Video', () => {

    const url = '/watch/some-id'
    const duration = '12:12'

    const {getByText} = render(Video, {
        props: {
            title: 'Test Title',
            url,
            duration
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
        expect(playButton).toHaveProperty('href', url)
    })
})
