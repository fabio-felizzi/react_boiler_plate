import React from 'react';
import { shallow } from 'enzyme';
import TitleBlock from './TitleBlock';

const componentProps = {
  title: 'Component title',
  subtitle: 'Component subtitle',
};

// eslint-disable-next-line react/jsx-props-no-spreading
const componentShallow = shallow(<TitleBlock {...componentProps} />);

describe('TitleBlock component', () => {
  describe('Component Shapshot', () => {
    test('should match stored snapshot', () => {
      expect(componentShallow).toMatchSnapshot();
    });
  });

  describe('Component Render', () => {
    test('should render the title', () => {
      expect(componentShallow.find('h1')).toHaveLength(1);
    });

    test('should render the subtitle', () => {
      expect(componentShallow.find('h2')).toHaveLength(1);
    });
  });
});
