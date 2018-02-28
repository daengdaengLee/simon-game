import React from 'react';

import { storiesOf } from '@storybook/react';

import PressButton from './index';

storiesOf('PressButton', module)
.add('red', () => <PressButton
  onClick={() => console.log('PressButton Red')}
  color="Red"
/>)
.add('yellow', () => <PressButton
onClick={() => console.log('PressButton Yellow')}
color="Yellow"
/>);