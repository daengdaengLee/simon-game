import React from 'react';

import { storiesOf } from '@storybook/react';

import GameButton from './index';

storiesOf('GameButton', module)
.add('no 1', () => <GameButton color="Red" />)
.add('no 2', () => <GameButton color="Yellow" />)
.add('no 3', () => <GameButton color="Green" />)
.add('no 4', () => <GameButton color="Blue" />);