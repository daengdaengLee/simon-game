import React from 'react';

import { storiesOf } from '@storybook/react';

import Col from './index';

storiesOf('Atoms', module)
.add('Col center', () => <Col justifyContent="Center" alignItems="Center"><span>test1</span><button>test2</button><input type="text" /></Col>);