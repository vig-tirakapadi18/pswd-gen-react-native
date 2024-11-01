import TrackPlayer, { Event } from "react-native-track-player";
import {playListData} from "./constants";

export const setupPlayer = async() => {
    let isSetUp = false;

    try {
        await TrackPlayer.getCurrentTrack();
        isSetUp = true;
    } catch (error) {
        await TrackPlayer.setupPlayer();
        isSetUp = true;
    } finally {
        return isSetUp;
    }
}

export const addTrack = async() => {
    await TrackPlayer.add(playListData);
    await TrackPlayer.setRepeatMode();
}

export const playbackService = async() => {
    TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());

    TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());

    TrackPlayer.addEventListener(Event.RemoteNext, () => TrackPlayer.skipToNext());

    TrackPlayer.addEventListener(Event.RemotePrevious, () => TrackPlayer.skipToPrevious());
}