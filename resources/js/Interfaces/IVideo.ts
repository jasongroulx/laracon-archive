import {ISpeaker} from "./ISpeaker";
import {IConference} from "./IConference";

export interface IVideo {
    id: number
    title: string
    description: string | null
    duration: string
    thumbnailUrl: string
    url: string
    speaker: ISpeaker
    conference: IConference
}
