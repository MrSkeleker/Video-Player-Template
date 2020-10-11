import React from "react";
import withLink from "../../components/hoc/withLink";
import PlaylistItem from "../../components/simple/PlaylistItem/PlaylistItem";
import StyledPlaylistItems from "./StyledPlaylistItems";

const PlayListItemWithLink = withLink(PlaylistItem);

const PlayerlistItems = (props: any) => {
  const { videos, active } = props;
  return (
    <StyledPlaylistItems>
      {
        videos.map((video: any) => (
          <PlayListItemWithLink
            key={video.id}
            video={video}
            active={video.id === active.id}
          />
        ))
      }
    </StyledPlaylistItems>
  )
};

export default PlayerlistItems;
