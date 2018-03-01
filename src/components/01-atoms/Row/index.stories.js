import React from 'react';

import { storiesOf } from '@storybook/react';

import Row from './index';

storiesOf('Row', module)
.add('center', () => <Row justifyContent="Center" alignItems="Center"><span>test1</span><button>test2</button><input type="text" /></Row>);