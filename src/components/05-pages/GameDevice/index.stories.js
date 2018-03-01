import React from 'react';

import { storiesOf } from '@storybook/react';

import GameDevice from './presenter';

storiesOf('Pages', module)
.add('GameDevice', () => <GameDevice
  start={() => console.log('start')}
  display="SUCCESS"
  playerInput={id => console.log(id)}
  activeButton={3}
/>);