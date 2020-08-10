import React from 'react'
import { get } from 'lodash'

const Task = (props) => {
    const title = get(props, 'task.title', '')
    const priority = get(props, 'task.priority', '')
  return (
    <div>
      Task
        {priority}
        {title}

    </div>
  );
}

export default Task
