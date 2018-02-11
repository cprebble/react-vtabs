import React from 'react';
import { VTabs, VTab } from '../src/index';

export default class Example extends React.Component {
	render () {
		return (
			<div style={{ width: '70%', margin: 25 }}>
				<VTabs
					tabContainerStyle={{ marginLeft: 20 }}
					tabLabelStyle={{ width: 50 }}
					inkBarStyle={{ backgroundColor:"orange", width: 4 }}>
					<VTab label="t1">
						<div>hi1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan nibh dapibus, varius leo a, posuere mauris. Vivamus mattis, erat vel finibus condimentum, purus justo fringilla lorem, vitae lobortis neque arcu eu est. Ut pretium rutrum turpis, vel tempus turpis viverra nec.</div>
			<div>Ut viverra sed arcu euismod maximus. Pellentesque ultrices, nisi at consectetur tempor, orci enim interdum ex, vitae congue lorem massa vitae mauris.</div>
			</VTab>
					<VTab label="t2">
						<div>hi2 Vivamus mattis, erat vel finibus condimentum, purus justo fringilla lorem, vitae lobortis neque arcu eu est. Ut pretium rutrum turpis, vel tempus turpis viverra nec</div></VTab>
					<VTab label="t3"><p>hi3 Nulla eget malesuada diam. Aliquam condimentum scelerisque odio, non consequat diam sodales fermentum. Vestibulum et congue leo. Duis tincidunt metus eu ullamcorper lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>

		<p>Pellentesque condimentum placerat ipsum sit amet bibendum. Vestibulum mattis magna et interdum aliquam.</p></VTab>
				</VTabs>
			</div>
		)
	}
}

