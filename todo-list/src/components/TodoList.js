import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {

    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const Addtask = () => {
        // console.log(task);
        if (task !== "") {
            const taskDetails = {
                id: Math.floor(Math.random() * 1000),
                value: task,
                isCompleted: false,
            }

            setTaskList([...taskList, taskDetails]);
        }
    };

    // console.log("taskList", taskList);

    const deleteTask = (e, id) => {
        e.preventDefault();
        setTaskList(taskList.filter((t) => t.id !== id));
    };



    const completedTask = (e, id) => {
        e.preventDefault();

        // find index of element
        const element = taskList.findIndex(elem => elem.id === id);

        // copy array into new variable
        const newTaskList = [...taskList]

        // Edit element
        newTaskList[element] = {
            ...newTaskList[element],
            isCompleted: true,
        }

        setTaskList(newTaskList);

    };

    return (
        <div className="todoContainer">
            <div className="todoHeader">
                <span className="todoTitle">Todo List</span>
            </div>
            <input
                type="text"
                name="text"
                id="text"
                placeholder="Add task..."
                onChange={(e) => handleChange(e)}
            />
            <button className="addBtn" onClick={Addtask}>Add</button>

            <div className="listContainer">
                {taskList !== [] ?
                    <ul>
                        {taskList.map(t =>
                        
                            <li
                                key={t.id}
                                className={t.isCompleted ? "holdText" : "listItem"}>
                                {/* <div className="list"> */}
                                    {t.value}
                                {/* </div> */}

                                <div className="listBtn">
                                <button className="completedBtn"onClick={(e) => completedTask(e, t.id)}>
                                    Completed
                                </button>
                                <button className="deleteBtn" onClick={(e) => deleteTask(e, t.id)}>
                                    Deleted
                                </button>
                                </div>
                            </li>
                           
                        )}
                    </ul>

                    : null}
            </div>
        </div>
    )
}

export default TodoList