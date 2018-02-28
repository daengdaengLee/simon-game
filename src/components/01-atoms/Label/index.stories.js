import React from 'react';

import { storiesOf } from '@storybook/react';

import Label from './index';
import PressButton from '../PressButton';

storiesOf('Label', module)
.add('with PressButton', () => (
  <Label>
    <PressButton onClick={() => console.log('red button')} color="Red" />
    Start
  </Label>
));