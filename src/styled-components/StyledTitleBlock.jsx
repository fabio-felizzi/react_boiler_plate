import styled from 'styled-components';
import TitleBlock from 'Components/title-block/TitleBlock';

const StyledTitleBlock = styled(TitleBlock)`
    width: 100%;
    height: auto;

    &.black {
        background-color: black;

        .title,
        .subtitle {
            color: white;
        }
    }

    &.white {
        background-color: white;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: inherit;
        justify-content: center;
        text-align: center;
        padding: 0 10%;

        @media (min-width: 768px) {
            padding: 0 25%;
        }
    }

    .title {
        font-size: 24px;
        line-height: 31px;
        color: black;
        margin-bottom: 0;

        @media (min-width: 992px) {
           font-size: 42px;
           line-height: 50px;
           margin-bottom: 24px;
        }
    }

    .subtitle {
        font-size: 16px;
        line-height: 24px;
        color: black;
        margin-top: 10px;

        @media (min-width: 992px) {
            font-size: 24px;
            line-height: 32px;
        }
    }
`;

export default StyledTitleBlock;
