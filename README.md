
## Installation
Using [npm](https://www.npmjs.com/):
```bash
npm install --save react-vtabs
```
Using [yarn](https://yarnpkg.com/en/):
```bash
yarn add react-vtabs
```

## Usage

```js
import React, { Component } from 'react';
import { renderDOM } from 'react-dom';
import { VTabs, VTab } from 'react-vtabs';


class App extends Component {
  render() {
    return (
      <Tabs
        defaultTab="one"
        onChange={(tabId) => { console.log(tabId) }}
      >
        <TabList>
          <Tab tabFor="one">Tab 1</Tab>
          <Tab tabFor="two">Tab 2</Tab>
          <Tab tabFor="three">Tab 3</Tab>
        </TabList>
        <TabPanel tabId="one">
          <p>Tab 1 content</p>
        </TabPanel>
        <TabPanel tabId="two">
          <p>Tab 2 content</p>
        </TabPanel>
        <TabPanel tabId="three">
          <p>Tab 3 content</p>
        </TabPanel>
      </Tabs>
    );
  }
}

renderDOM(
  <App/>,
  document.getElementById('react-root')
);
```

# Examples

* [Basic tabs](basic.md)