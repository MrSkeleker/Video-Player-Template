import styled from 'styled-components';

const StyledPlaylistItems = styled.div`
  padding: 0 2rem;
  overflow-y: auto;
  height: 28vw;
  max-height: 500px;

  ::-webskit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 2px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`

export default StyledPlaylistItems;