import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Board from '../components/board'

storiesOf('Button', module)
    .add('The board', () => (
        <Board />
    ))
    .add('with some emoji', () => (
        <button onClick={action('clicked')}>😀 😎 👍 💯</button>
    ))