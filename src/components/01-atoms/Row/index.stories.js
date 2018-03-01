import React from 'react';

import { storiesOf } from '@storybook/react';

import Row from './index';

storiesOf('Atoms', module)
.add('Row', () => <Row justifyContent="SpaceBetween" alignItems="Center" width="20rem" height="20rem"><span>test1</span><button>test2</button><input type="text" /></Row>);