import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import VTab from './vertical-tab.component';

describe('VTab Component', () => {
	it('accepts styling overrides', () => {
		const testProps = {
			style: {
				backgroundColor: 'blue'
			}
		};
		const vtest = (
			<VTab label="testlabel" {...testProps}>
				<div>content</div>
			</VTab>
		);
		const wrapper = shallow(vtest);
		const page = pageObject(wrapper);
		expect(page.findStyle().backgroundColor).to.equal('blue');
	});

});

const pageObject = (component) => {
	const instance = component.instance();

	return {
		findStyle: () => component.find('div').at(0).prop('style'),

		
	};
};
	