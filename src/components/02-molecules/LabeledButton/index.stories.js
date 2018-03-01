import React from 'react';

import { storiesOf } from '@storybook/react';

import LabeledButton from './index';

storiesOf('Molecules', module)
.add('Start LabeledButton', () => <LabeledButton
  onClick={() => console.log('labeled button clicked')}
  color="Red"
  label="Start"
/>)
.add('Strict LabeledButton', () => <LabeledButton
onClick={() => console.log('labeled button clicked')}
color="Yellow"
label="Strict"
/>);