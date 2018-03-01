import React from 'react';

import { storiesOf } from '@storybook/react';

import Col from './index';

storiesOf('Atoms', module)
.add('Col center', () => <Col justifyContent="Center" alignItems="Center" width="5rem" height="10rem" backgroundColor="red" border="2px solid black"><span>test1</span><button>test2</button><input type="text" /></Col>);