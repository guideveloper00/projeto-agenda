import React from 'react';
import Task from './Task';

const Tasks = ({tarefas, handleTaskClick, handleTaskDelete}) => {
    return (
        <>
            {tarefas.map((task) => (<Task key={task.id} tarefa={task} handleTaskClick={handleTaskClick} handleTaskDelete={handleTaskDelete}/>))}
        </>
    );
};

export default Tasks;