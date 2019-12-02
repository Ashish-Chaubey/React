import React from 'react';
import "../node_modules/font-awesome/css/font-awesome.min.css";

function TodoItem(){
    return(
        <div>
            <div className="row justify-content-between">
                <div className="rounded-circle border d-flex justify-content-center align-items-center" style={{height:"40px",width:"40px"}}>
                    <div style={{color:"#5b75e3",fontSize:"25px"}}><i class="fa fa-check" aria-hidden="true"></i></div>

                </div>
                <div className="d-flex justify-content-between align-items-center border-bottom" style={{width:"85%"}}>
                <div>
                    <p style={{fontSize:"22px"}}>Morning Walk</p>
                </div>
                <div>
                    <p style={{fontSize:"20px"}}>7:00 am</p>
                </div>
                </div>
                

        </div>



        </div>
    )
}
export default TodoItem