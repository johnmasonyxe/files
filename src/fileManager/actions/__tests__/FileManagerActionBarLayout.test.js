// @flow
import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import FileManagerActionBarLayout from '../FileManagerActionBarLayout';

Enzyme.configure({adapter: new Adapter()});

describe('FileManagerActionBarLayout', () => {

    // some people prefer to test things this way, i find it too fragile
    it('should render correctly', () => {
        const props = {
            setSearchText: jest.fn(),
            uploadFile: jest.fn(),
        };

        const component = renderer.create(
            <FileManagerActionBarLayout {...props}/>
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    // if testing components is a priority/requirement this is how i would go about it
    // if you ensure all of the right components are rendered
    //   and you test the logic in those components
    //   and you trust that flow/typescript is ensuring you pass the correct props around
    //   you should be good to go
    it('should render the right components', () => {
        const props = {
            setSearchText: jest.fn(),
            uploadFile: jest.fn(),
        };
        const actionBar = mount(<FileManagerActionBarLayout{...props} />);
        expect(actionBar.find('FileManagerActionBarSearch').length).toBe(1);
        expect(actionBar.find('FileManagerActionBarUpload').length).toBe(1);
    });
});
