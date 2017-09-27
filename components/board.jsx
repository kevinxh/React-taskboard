import React from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Container from './Container'

const style = {
    backgroundColor: '#eee',
    padding: '100px 50px',
    overflowX: 'scroll',
    overflowY: 'hidden',
    position: 'relative',
    height: '100vh',
    weight: '200vw',
    whiteSpace: 'nowrap'
}

const Board = () => {
    return (
        <div style={style}>
            <Container />
            <Container />
            <Container />
        </div>
    )
}

export default DragDropContext(HTML5Backend)(Board)