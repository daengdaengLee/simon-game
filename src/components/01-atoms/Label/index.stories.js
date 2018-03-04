import React from 'react';

import { storiesOf } from '@storybook/react';

import Label from './index';
import PressButton from '../PressButton';

storiesOf('Atoms', module)
.add('Label with PressButton', () => (
  <Label>
    <PressButton onClick={() => console.log('red button')} color="Red" />
    Start
  </Label>
));