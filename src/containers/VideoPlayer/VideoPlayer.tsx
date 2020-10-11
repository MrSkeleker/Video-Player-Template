import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Playlist from "../Playlist/Playlist";
import Video from "../../components/simple/Video/Video";
import StyledVideoPlayer from "./StyledVideoPlayer";
import { videos } from "./VideoPlayer.data";

const theme = {
  bgcolor: "#353535",
  bgcolorItem: "#414141",
  bgcolorItemActive: "#405c63",
  bgcolorPlayed: "#526d4e",
  border: "none",
  borderPlayed: "none",
  color: "#fff",
};

const themeLight = {
  bgcolor: "#fff",
  bgcolorItem: "#fff",
  bgcolorItemActive: "#80a7b1",
  bgcolorPlayed: "#7d9979",
  border: "1px solid #353535",
  borderPlayed: "none",
  color: "#353535",
};

const VideoPlayer = (props: any) => {
  const { match, history, location } = props;
  const storedStateString = localStorage.getItem(`${videos.playListId}`);
  const savedState = storedStateString && JSON.parse(storedStateString);

  const [state, setState] = useState(
    savedState ? savedState : {
      videos: videos.playList,
      activeVideo: videos.playList[0],
      nightMode: true,
      playlistId: videos.playListId,
      autoplay: false,
    }
  );

  useEffect(() => {
    localStorage.setItem(`${state.playlistId}`, JSON.stringify({ ...state }));
  }, [state]);

  useEffect(() => {
    const videoId = match.params.activeVideo;
    if (videoId) {
      const newVideoIndex = state.videos.findIndex(
        (video: any) => video.id === videoId
      );
      setState((prev: any) => ({
        ...prev,
        activeVideo: prev.videos[newVideoIndex],
        autoplay: location.autoplay,
      }));
    } else {
      history.push({
        pathname: `/${state.activeVideo.id}`,
        autoplay: false,
      });
    }
  }, [
    history,
    location.autoplay,
    match.params.activeVideo,
    state.activeVideo.id,
    state.videos,
  ]);

  const nightModeCallback = () => {
    setState((prev: any) => ({
      ...prev,
      nightMode: !prev.nightMode,
    }));
  };
  const endCallback = () => {
    const videoId = match.params.activeVideo;
    const currentIndex = state.videos.findIndex(
      (video: any) => video.id === videoId
    );
    const nextIndex = (currentIndex + 1) % state.videos.length;
    history.push({
      pathname: `${state.videos[nextIndex].id}`,
    });
  };
  const progressCallback = (e: any) => {
    if (e.playedSeconds > 10 && e.playedSeconds < 11) {
      setState((prev: any) => ({
        ...prev,
        videos: prev.videos.map((element: any) => {
          return element.id === prev.activeVideo.id
            ? { ...element, played: true }
            : element;
        }),
      }));
    }
  };

  return (
    <ThemeProvider theme={state.nightMode ? theme : themeLight}>
      {state.videos ? (
        <StyledVideoPlayer>
          <Video
            active={state.activeVideo}
            autoplay={state.autoplay}
            endCallback={endCallback}
            progressCallback={progressCallback}
          />
          <Playlist
            videos={state.videos}
            active={state.activeVideo}
            nightModeCallback={nightModeCallback}
            nightMode={state.nightMode}
          />
        </StyledVideoPlayer>
      ) : null}
    </ThemeProvider>
  );
};

export default VideoPlayer;
