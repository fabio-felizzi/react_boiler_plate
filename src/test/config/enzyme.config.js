import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/**
 * Redefined window properties, necessary for testing
 */
window.scrollTo = () => {};
