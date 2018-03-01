import React from 'react';

import { storiesOf } from '@storybook/react';

import GameDevice from './index';

storiesOf('Templates', module)
.add('GameDevice', () => <GameDevice
  gameConsole={<div style={{width: '10rem', height: '8rem', backgroundColor: 'red'}}></div>}
  gameController={<div style={{width: '10rem', height: '12rem', backgroundColor: 'yellow'}}></div>}
/>);