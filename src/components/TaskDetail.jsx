import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './TaskDetail.css';

import Button from './Button';

const TaskDetail = () => {

    const parametros = useParams();
    console.log(parametros);

    const history = useHistory();

    const handleBackButton = () => {
        history.goBack();
    }



    return ( 
        <>

            
            <div className="button-back">
                <Button onClick={handleBackButton}>Voltar</Button>
            </div> 
            <div className="task-detail-container">
                <h2 className="">{parametros.caminho}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id alias sapiente itaque, eum placeat?</p>
            </div>
            
        </>
    );
}
 
export default TaskDetail;