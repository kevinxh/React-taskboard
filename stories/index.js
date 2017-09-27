import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Board from '../components/board'

storiesOf('React Taskboard', module)
    .add('The board', () => (
        <Board />
    ))