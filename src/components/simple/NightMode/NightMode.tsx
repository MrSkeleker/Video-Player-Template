import React from "react";
import StyledNightMode from "./StyledNightMode";

const NightMode = (props: any) => {
  const { nightModeCallback, nightMode } = props;
  return (
    <StyledNightMode>
      <span>Night Mode: </span>
      <label className="switch">
        <input
          type="checkbox"
          checked={nightMode}
          onChange={nightModeCallback}
        />
        <span className='slider round' />
      </label>
    </StyledNightMode>
  );
};

export default NightMode;
