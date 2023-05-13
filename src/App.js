import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons'

function App() {

  const [toDo, setToDo] = useState([
    { "id": 2, "title": "Task 2", "status": false },
    { "id": 6, "title": "Task 6", "status": false },
    { "id": 4, "title": "Task 4", "status": false },
    { "id": 1, "title": "Task 1", "status": false },
  ]);

  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdatedata] = useState('');

  const addTask = () => {

  }

  const deleteTask = (id) => {

  }
  const markDone = (id) => {

  }


  const cancelUpdate = () => {

  }

  const changeTask = (e) => {

  }

  const updateTask = () => {

  }

  return (
    <div className="container App">
      <br />
      <h2>To Do List App (ReactJS)</h2>
      <br />
      {toDo && toDo.length ? '' : 'No Task...'}

      {toDo && toDo
        .sort((a, b) => a.id > b.id ? 1 : -1)
        .map((task, index) => {
          return (
            <React.Fragment key={task.id}>
              <div className='col taskBg'>
                <div className={task.status ? 'done' : ''}>
                  <span className='taskNumber'>{index + 1}</span>
                  <span className='taskText'>{task.title}</span>
                  <div className='iconsWrap'>
                    <span title='Completed / Not Completed'>
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>
                    <span title='Edit'>
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                    <span title='Delete'>
                      <FontAwesomeIcon icon={faTrashCan} />
                    </span>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )
        }
        )}
    </div>
  );
}

export default App;
