import React from 'react';
import PropTypes from 'prop-types';

const TitleBlock = ({
  title,
  subtitle,
  children,
  backgroundColor,
  className,
}) => (
  <div className={`title-block ${backgroundColor} ${className}`}>
    <div className="content">
      <h1 className="title">
        {title}
      </h1>
      {subtitle && (
        <h2 className="subtitle">
          {subtitle}
        </h2>
      )}
      {children}
    </div>
  </div>
);

TitleBlock.defaultProps = {
  subtitle: '',
  backgroundColor: 'white',
  children: null,
  className: '',
};

TitleBlock.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  backgroundColor: PropTypes.oneOf(['black', 'white']),
  children: PropTypes.element,
  className: PropTypes.string,
};

export default TitleBlock;
