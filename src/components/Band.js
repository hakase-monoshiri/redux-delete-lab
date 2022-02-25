import React from 'react'

export default function Band( props ) {
  return (
    <li key={props.id}>
      {props.name}
      <button onClick={() => props.delete(props.id)}>Delete</button>
    </li>
  )
}
