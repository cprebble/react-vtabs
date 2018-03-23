import React from 'react';
import { VTabs, VTab } from '../src/index';

export default class Basic extends React.Component {
	render () {
		return (
			<div style={{ margin: 25 }}>
				<VTabs
					tabContainerStyle={{
						fontFamily: 'helvetica neue',
						fontSize: 14,
						width: '70%',
						paddingLeft: 20
					}}
					tabLabelStyle={{ width: 150 }}
					inkBarStyle={{
						backgroundColor: '#f5f7fb',
						borderColor: 'orange',
						borderWidth: 4
					}}>
					<VTab label="First Label">
						<div><p>hi1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan nibh dapibus, varius leo a, posuere mauris. Vivamus mattis, erat vel finibus condimentum, purus justo fringilla lorem, vitae lobortis neque arcu eu est. Ut pretium rutrum turpis, vel tempus turpis viverra nec.</p>
						<p>Ut viverra sed arcu euismod maximus. Pellentesque ultrices, nisi at consectetur tempor, orci enim interdum ex, vitae congue lorem massa vitae mauris.</p></div>
					</VTab>
					<VTab label="2nd Tab">
						<div><p>hi2 Vivamus mattis, erat vel finibus condimentum, purus justo fringilla lorem, vitae lobortis neque arcu eu est. Ut pretium rutrum turpis, vel tempus turpis viverra nec</p></div>
					</VTab>
					<VTab label="My 3rd Vertical Tab">
						<p>hi3 Nulla eget malesuada diam. Aliquam condimentum scelerisque odio, non consequat diam sodales fermentum. Vestibulum et congue leo. Duis tincidunt metus eu ullamcorper lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan nibh dapibus, varius leo a, posuere mauris. Vivamus mattis, erat vel finibus condimentum, purus justo fringilla lorem, vitae lobortis neque arcu eu est. Ut pretium rutrum turpis, vel tempus turpis viverra nec.</p>
						<p>Pellentesque condimentum placerat ipsum sit amet bibendum. Vestibulum mattis magna et interdum aliquam.</p>
					</VTab>
				</VTabs>
			</div>
		)
	}
}

