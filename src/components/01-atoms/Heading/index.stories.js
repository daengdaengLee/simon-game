import React from 'react';

import { storiesOf } from '@storybook/react';

import Heading from './index';

storiesOf('Atoms', module)
.add('Heading', () => <Heading headingNo={1}>heading</Heading>);