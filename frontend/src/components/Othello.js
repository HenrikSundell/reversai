import React, { useState } from 'react'
import Tile from './Tile'

const Othello = (props) => {
  const mockBoard = [
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '','black','white', '', '', ''],
    ['', '', '','white','black', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
  ]
  const [board, setBoard] = useState(mockBoard)
  const [currentPlayer, setCurrentPlayer] = useState('white')

  const getOtherPlayer = player => {
    return player === 'black' ? 'white' : 'black'
  }

  const handleClick = (rowIndex, columnIndex) => {
    const newBoard = [...board]
    newBoard[rowIndex][columnIndex] = currentPlayer
    setBoard(newBoard)
    setCurrentPlayer(getOtherPlayer(currentPlayer))
  }

  const style = {
    display: 'inline-grid',
    gridGap: '2px',
  }

  return (
    <div style={style}>
      {board.map((row, rowIndex) => {
        return row.map((tile, columnIndex) => (
          <Tile 
          key={`${rowIndex}${columnIndex}`}
          tile={tile}
          rowIndex={rowIndex}
          columnIndex={columnIndex}
          handleClick={handleClick}
          />
        ))
      })}
    </div>
  )
}

export default Othello
