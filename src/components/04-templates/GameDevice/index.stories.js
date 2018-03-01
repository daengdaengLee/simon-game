import React from 'react';

import { storiesOf } from '@storybook/react';

import GameDevice from './index';
import Heading from '../../01-atoms/Heading';
import GameConsole from '../../03-organisms/GameConsole';
import GameBoard from '../../02-molecules/GameBoard';

storiesOf('Templates', module)
.add('GameDevice', () => <GameDevice
  gameHeading={<Heading headingNo={1}>Simon</Heading>}
  gameConsole={<GameConsole start={() => console.log('start')} display="Success" />}
  gameController={<GameBoard playerInput={() => console.log('player input')} />}
/>);