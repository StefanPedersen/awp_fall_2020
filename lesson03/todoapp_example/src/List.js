import React from 'react';
import Task from './Task';

export default function List(props) {
  const items = props.todoList.map((element, index) =>
    <li key={index}>
      <Task task={element} index={index} changeDone={props.changeDone}/>
    </li>
  );

  return (
    <>
      <h3>The list</h3>
      <ol>
        {items}
      </ol>
    </>
  );
}
