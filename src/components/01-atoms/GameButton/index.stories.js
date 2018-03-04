import React from 'react';

import { storiesOf } from '@storybook/react';

import GameButton from './index';

storiesOf('Atoms', module)
.add('GameButton no 1', () => <GameButton color="Red" onClick={() => console.log('clicked')} active={true} />)
.add('GameButton no 2', () => <GameButton color="Yellow" onClick={() => console.log('clicked')} active={false} />)
.add('GameButton no 3', () => <GameButton color="Green" onClick={() => console.log('clicked')} active={true} />)
.add('GameButton no 4', () => <GameButton color="Blue" onClick={() => console.log('clicked')} active={false} />);