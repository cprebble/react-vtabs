import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import VTabs from './vertical-tabs.component';
import VTab from './vertical-tab.component';

describe('VTabs Component', () => {
	it('accepts styling', () => {
		const testProps = {
			style: {
				backgroundColor: 'red'
			}
		};
		const vtest = (
			<VTabs {...testProps}>
				<VTab label="testlabel">
					<div>content</div>
				</VTab>
			</VTabs>
		);
		const wrapper = shallow(vtest);
		const page = pageObject(wrapper);

		assert.equal(page.findStyle().backgroundColor, 'red');
	});

	it('defaults selected tab to 0 index', () => {
		const vtest = (
			<VTabs>
				<VTab label="testlabel1">
					<div>content</div>
				</VTab>
				<VTab label="testlabel2">
					<div>more content</div>
				</VTab>
			</VTabs>
		);
		const wrapper = shallow(vtest);
		const page = pageObject(wrapper);

		assert.equal(page.findSelectedVTab(), 'testlabel1');
	});

	it('honors the value prop', () => {
		const testProps = {
			value: 1
		};
		const vtest = (
			<VTabs {...testProps}>
				<VTab label="testlabel1">
					<div>content</div>
				</VTab>
				<VTab label="testlabel2">
					<div>more content</div>
				</VTab>
			</VTabs>
		);
		const wrapper = shallow(vtest);
		const page = pageObject(wrapper);

		assert.equal(page.findSelectedVTab(), 'testlabel2');
	});

});

const pageObject = (component) => {
	const instance = component.instance();

	return {
		findStyle: () => component.find('div').at(0).prop('style'),
		findSelectedVTab: () => component.find(VTab).prop('label')
		
	};
};
	