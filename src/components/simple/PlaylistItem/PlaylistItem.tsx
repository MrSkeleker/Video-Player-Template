import React from "react";
import StyledPlaylistItem from "./StyledPlaylistItem";

const PlaylistItem = (props: any) => {
  const { video, active } = props;
  return (
    <StyledPlaylistItem active={active} played={video.played}>
      <div className="main-player-video-nr">{video.num}</div>
      <div className="main-player-video-name">{video.title}</div>
      <div className="main-player-video-time">{video.duration}</div>
    </StyledPlaylistItem>
  );
};

export default PlaylistItem;
