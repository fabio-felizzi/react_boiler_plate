import React, { Component } from 'react';
import StyledContainer from 'StyledComponents/StyledContainer';

class Container extends Component {
    render() {
        return (
            <StyledContainer className="grid-container">
                <div className="page-title">
                    <h1>
                      Title goes here
                    </h1>
                </div>
            </StyledContainer>
        );
    }
}

export default Container;
