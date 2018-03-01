import React from 'react';

import { storiesOf } from '@storybook/react';

import GameDevice from './index';
import Heading from '../../01-atoms/Heading';

storiesOf('Templates', module)
.add('GameDevice', () => <GameDevice
  gameHeading={<Heading headingNo={1}>heading</Heading>}
  gameConsole={<div style={{width: '10rem', height: '8rem', backgroundColor: 'red'}}></div>}
  gameController={<div style={{width: '10rem', height: '12rem', backgroundColor: 'yellow'}}></div>}
/>);