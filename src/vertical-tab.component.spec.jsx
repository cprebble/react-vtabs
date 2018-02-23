import React from 'react';
import sinon from 'sinon';
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
	
	it('warns if missing required label', () => {
		const stub = sinon.stub(console, 'error');
		const vtest = (
			<VTab>
				<div>content</div>
			</VTab>
		);
		shallow(vtest);
		
		expect(stub.calledOnce).to.equal(true);
		// console.log("spyy",  stub.args)
        expect(stub.calledWithExactly(
			sinon.match('Warning: Failed prop type: The prop `label` is marked as required in `VTab`')
		)).to.equal(true);
	});

});

const pageObject = (component) => {

	return {
		findStyle: () => component.find('div').at(0).prop('style'),

	};
};
	