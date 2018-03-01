import React from 'react';

import { storiesOf } from '@storybook/react';

import GameButton from './index';

storiesOf('GameButton', module)
.add('no 1', () => <GameButton color="Red" onClick={() => console.log('clicked')} />)
.add('no 2', () => <GameButton color="Yellow" onClick={() => console.log('clicked')} />)
.add('no 3', () => <GameButton color="Green" onClick={() => console.log('clicked')} />)
.add('no 4', () => <GameButton color="Blue" onClick={() => console.log('clicked')} />);