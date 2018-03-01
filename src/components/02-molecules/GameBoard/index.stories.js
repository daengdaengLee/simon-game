import React from 'react';

import { storiesOf } from '@storybook/react';

import GameBoard from './index';

storiesOf('Molecules', module)
.add('GameBoard', () => <GameBoard playerInput={i => console.log(i)} />)
.add('GameBoard 1st lightup', () => <GameBoard activeButton={1} playerInput={i => console.log(i)} />);