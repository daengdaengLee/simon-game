import React from 'react';

import { storiesOf } from '@storybook/react';

import Row from './index';

storiesOf('Atoms', module)
.add('Row center', () => <Row justifyContent="Center" alignItems="Center"><span>test1</span><button>test2</button><input type="text" /></Row>);