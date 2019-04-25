import styled from 'styled-components';

const StyledContainer = styled.div`
    display: grid;
    height: fit-content;
    grid-template-columns: repeat(12, minmax(64px, 1fr)); 
    grid-template-rows: 1fr;
    max-width: 1440px;
    padding: 0 64px;

    .page-title {
      grid-area: 1 / span 12;
      font-size: 24px;
    }
`;

export default StyledContainer;
