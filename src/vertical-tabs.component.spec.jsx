import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import VTabs from './vertical-tabs.component';
import VTab from './vertical-tab.component';

describe('VTabs Component', () => {
	it('accepts styling overrides', () => {
		// confirm default is undefined
		const dvtest = (
			<VTabs {...testProps}>
				<VTab label="testlabel">
					<div>content</div>
				</VTab>
			</VTabs>
		);
		const dwrapper = shallow(dvtest);
		const dpage = pageObject(dwrapper);
		assert.isUndefined(dpage.findStyle('backgroundColor'));
		
		// confirm override
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

		assert.equal(page.findStyle('backgroundColor'), 'red');
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


	it('respects given value prop', () => {
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


	it('allow override of the tab label borderRight style of the non-selected tab', () => {
		// confirm default borderRight style
		const vtest = (
			<VTabs value={1}>
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
		assert.equal(page.findTabLabelStyle(0).borderRight, '1px solid lightgray');

		// confirm override
		const testStyle = {
			borderRight: '3px dashed blue'
		};
		const withPropsTest = (
			<VTabs value={1}>
				<VTab label="testlabel1" tabLabelStyle={testStyle}>
					<div>content</div>
				</VTab>
				<VTab label="testlabel2">
					<div>more content</div>
				</VTab>
			</VTabs>
		);
		const wrapperWithProps = shallow(withPropsTest);
		const pageWithProps = pageObject(wrapperWithProps);

		assert.equal(pageWithProps.findTabLabelStyle(0).borderRight, testStyle.borderRight);
	});


	it('disallow override of the borderRight style of the selected tab, since it is determined by inkBarStyle', () => {
		// confirm inkbar borderRight style on selected tab
		const vtest = (
			<VTabs value={1} inkBarStyle={{ width: 2, backgroundColor: 'pink', borderStyle: 'dotted' }}>
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
		assert.equal(page.findTabLabelStyle(1).borderRight, '2px dotted pink');

		// confirm disallows override on selected tab
		const testStyle = {
			borderRight: '3px dashed blue'
		};
		const withPropsTest = (
			<VTabs value={1}>
				<VTab label="testlabel1" tabLabelStyle={testStyle}>
					<div>content</div>
				</VTab>
				<VTab label="testlabel2">
					<div>more content</div>
				</VTab>
			</VTabs>
		);
		const wrapperWithProps = shallow(withPropsTest);
		const pageWithProps = pageObject(wrapperWithProps);

		assert.equal(pageWithProps.findTabLabelStyle(1).borderRight, '4px solid darkslategray');
	});


	it('allows tab label width style overrides', () => {
		// confirm width
		const vtest = (
			<VTabs tabLabelStyle={{ width: 101 }}>
				<VTab label="testlabel1">
					<div>content</div>
				</VTab>
			</VTabs>
		);
		const wrapper = shallow(vtest);
		const page = pageObject(wrapper);
		assert.equal(page.findTabLabelStyle(0).width, 101);

		// confirm allows override
		const testStyle = {
			width: 202
		};
		const withPropsTest = (
			<VTabs tabLabelStyle={{ width: 101 }}>
				<VTab label="testlabel1" tabLabelStyle={testStyle}>
					<div>content</div>
				</VTab>
			</VTabs>
		);
		const wrapperWithProps = shallow(withPropsTest);
		const pageWithProps = pageObject(wrapperWithProps);

		assert.equal(pageWithProps.findTabLabelStyle(0).width, 202);
	});


	it('allows tab container width style overrides', () => {
		// confirm width
		const vtest = (
			<VTabs tabContainerStyle={{ width: 101 }}>
				<VTab label="testlabel1">
					<div>content</div>
				</VTab>
			</VTabs>
		);
		const wrapper = shallow(vtest);
		const page = pageObject(wrapper);
		assert.equal(page.findVisibleTabContainerStyle().width, 101);

		// confirm allows override
		const testStyle = {
			width: 202
		};
		const withPropsTest = (
			<VTabs tabContainerStyle={{ width: 101 }}>
				<VTab label="testlabel1" tabContainerStyle={testStyle}>
					<div>content</div>
				</VTab>
			</VTabs>
		);
		const wrapperWithProps = shallow(withPropsTest);
		const pageWithProps = pageObject(wrapperWithProps);

		assert.equal(pageWithProps.findVisibleTabContainerStyle().width, 202);
	});


	it('disallows tab container position overrides', () => {
		// confirm position
		const vtest = (
			<VTabs>
				<VTab label="testlabel1">
					<div>content</div>
				</VTab>
			</VTabs>
		);
		const wrapper = shallow(vtest);
		const page = pageObject(wrapper);
		assert.equal(page.findVisibleTabContainerStyle().position, 'absolute');

		// confirm allows override
		const testStyle = {
			position: 'relative'
		};
		const withPropsTest = (
			<VTabs>
				<VTab label="testlabel1" tabContainerStyle={testStyle}>
					<div>content</div>
				</VTab>
			</VTabs>
		);
		const wrapperWithProps = shallow(withPropsTest);
		const pageWithProps = pageObject(wrapperWithProps);

		assert.equal(pageWithProps.findVisibleTabContainerStyle().position, 'absolute');
	});
});

const pageObject = (component) => {

	return {
		findStyle: style => {
			if (style) {
				return component.find('div').at(0).prop('style')[style];
			}
			return component.find('div').at(0).prop('style');
		},
		findSelectedVTab: () => component.find(VTab).prop('label'),
		findVisibleTabContainerStyle: () => component.find('#visibleTabContainer').prop('style'),
		findTabLabelStyle: atIndex => component.find(`#tabLabel${atIndex}`).at(0).prop('style')
	};
};
