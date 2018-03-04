import React from 'react';

import { storiesOf } from '@storybook/react';

import PressButton from './index';

storiesOf('Atoms', module)
.add('PressButton red', () => <PressButton
  onClick={() => console.log('PressButton Red')}
  color="Red"
/>)
.add('PressButton yellow', () => <PressButton
onClick={() => console.log('PressButton Yellow')}
color="Yellow"
/>);