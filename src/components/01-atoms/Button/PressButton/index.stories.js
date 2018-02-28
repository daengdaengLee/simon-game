import React from 'react';

import { storiesOf } from '@storybook/react';

import PressButton from './index';

storiesOf('PressButton', module)
.add('red', () => <PressButton
  onClick={() => alert('PressButton Red')}
  color="Red"
/>)
.add('yellow', () => <PressButton
onClick={() => alert('PressButton Yellow')}
color="Yellow"
/>);