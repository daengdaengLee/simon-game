import React from 'react';

import { storiesOf } from '@storybook/react';

import Col from './index';

storiesOf('Atoms', module)
.add('Col', () => <Col justifyContent="SpaceBetween" alignItems="Center" width="5rem" height="10rem" backgroundColor="red" border="2px solid black" borderRadius="0.4rem"><span>test1</span><button>test2</button><input type="text" /></Col>);