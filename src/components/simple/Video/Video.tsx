import React from "react";
import ReactPlayer from "react-player";
import StyledVideo from "./StyledVideo";
import StyledVideoWrapper from "./StyledVideoWrapper";

const Video = (props: any) => {
  const { active, autoplay, endCallback, progressCallback } = props;
  return (
    <StyledVideo>
      <StyledVideoWrapper>
        <ReactPlayer
          width="100%"
          height="100%"
          style={{ position: "absolute", top: 0 }}
          playing={autoplay}
          controls={true}
          url={active.video}
          onEnded={endCallback}
          onProgress={progressCallback}
        />
      </StyledVideoWrapper>
    </StyledVideo>
  );
};

export default Video;
