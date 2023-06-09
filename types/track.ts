
export interface IComment {
    _id: string;
    username: string;
    text: string;
}

export interface ITrack {
    _id: string;
    name: string;
    artist: string;
    text: string;
    listens: number;
    picture: string;
    audio: string;
    comments: IComment[];
}

export interface TrackState {
    tracks: ITrack[];
    error: string;
}

export enum TrackActionTypes {
    FETCH_TRACKS = 'FETCH_TRACKS',
    FETCH__TRACKS_ERROR = 'FETCH__TRACKS_ERROR'
}

interface FetchTracksAction {
    type: TrackActionTypes.FETCH_TRACKS;
    payload: ITrack[];
} 

interface FetchTrackErrorAction {
    type: TrackActionTypes.FETCH__TRACKS_ERROR;
    payload: string;
}

export type TrackAction = FetchTracksAction | FetchTrackErrorAction