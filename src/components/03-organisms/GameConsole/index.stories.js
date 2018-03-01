import React from 'react';

import { storiesOf } from '@storybook/react';

import GameConsole from './index';

storiesOf('Organisms', module)
.add('GameConsole', () => <GameConsole
  display="Start"
  start={() => console.log('start')}
/>);