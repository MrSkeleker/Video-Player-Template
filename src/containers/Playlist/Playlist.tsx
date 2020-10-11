import React from "react";
import NightMode from "../../components/simple/NightMode/NightMode";
import PlaylistHeader from "../../components/simple/PlaylistHeader/PlaylistHeader";
import StyledPlaylist from "./StyledPlaylist";
import PlayerlistItems from "../PlaylistItems/PlaylistItems";

const Playlist = (props: any) => {
  const { videos, active, nightModeCallback, nightMode } = props;
  return (
    <StyledPlaylist>
      <NightMode nightModeCallback={nightModeCallback} nightMode={nightMode} />
      <PlaylistHeader active={active} total={videos.length} />
      <PlayerlistItems videos={videos} active={active} />
    </StyledPlaylist>
  );
};

export default Playlist;
