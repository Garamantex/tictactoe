import { useState } from "react"
export default function Player({initialName, symbol, isActive, onChangeName}) {
  const [ playerName, setPlayerName ] = useState(initialName)
  const [isEditing, setEditing ] = useState(false)
  
  const handleEdit = () => {
    setEditing((editing)=> !isEditing)
    if(isEditing) {
      onChangeName(symbol, playerName)
    }
  }

  const handleNameChange = (event) => {
    setPlayerName(event.target.value)
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>


  editablePlayerName = isEditing ? <input type="text" value={playerName} onChange={handleNameChange} /> : playerName

  return (
  <li className={isActive ? "active" : undefined }>
    <span className="player">
      {editablePlayerName}
      <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
  </li>
  )
}