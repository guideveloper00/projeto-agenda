import React from 'react';
import Tasks from './Tasks';
import { CgClose, CgInfo } from "react-icons/cg";
import { useHistory } from "react-router-dom";

import "./task.css"



const deletado = () => {
    var teste = document.querySelectorAll(".task-container")
    teste.forEach(function(test){
        test.addEventListener("click", function(){
            console.log("fui clicado")
            this.remove();
        })
    })
}



const Task = ({tarefa, handleTaskClick, handleTaskDelete}) => {

const history = useHistory();

const handleTaskInfo = () => {
    history.push(`/${tarefa.title}`);
    console.log("fui clicado");
};


    return (
        <div className="task-container" 
        style={tarefa.completed ? { borderLeft: "6px solid chartreuse" } : {}}
        > 
                <div className="task-title" onClick={() => handleTaskClick(tarefa.id)}>
                    {tarefa.title}
                </div>
                <div className="task">
                    <div className="delete-task" onClick={() =>handleTaskDelete(tarefa.id)}><CgClose/></div>
                    <div className="info-task" onClick={handleTaskInfo}><CgInfo/></div>
                </div>
        </div>
        );
}
 
export default Task;