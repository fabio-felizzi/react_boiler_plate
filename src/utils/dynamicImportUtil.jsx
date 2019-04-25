import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { importComponent } from 'Services/dynamicImportService';
import StyledTitleBlock from 'StyledComponents/StyledTitleBlock';

class DynamicImportUtil extends Component {
    state = {
        component: null,
    }

    async componentDidMount() {
        const component = await this.load();

        this.setState({ component: component.default || component });
    }

    load() {
        const { path } = this.props;
        return importComponent(path);
    }

    render() {
        const { component: LoadedComponent } = this.state;

        return LoadedComponent
            ? <LoadedComponent {...this.props} />
            : (
                <StyledTitleBlock
                    title="Loading"
                    subtitle=""
                    backgroundColor="white"
                />
            );
    }
}

DynamicImportUtil.propTypes = {
    path: PropTypes.string.isRequired,
};

export default DynamicImportUtil;
