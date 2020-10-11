import React from "react";
import StyledJourney from "./StyledJourney";
import StyledPlaylistHeader from "./StyledPlaylistHeader";

const PlaylistHeader = (props: any) => {
  const { active, total } = props;
  return (
    <StyledPlaylistHeader>
      <p>{active.title}</p>
      <StyledJourney>
        {active.num} / {total}
      </StyledJourney>
    </StyledPlaylistHeader>
  );
};

export default PlaylistHeader;
