import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoItem from './TodoItem'

function App() {
  return (
    <div>
      <div className="container-fluid box-1">
        <div className="box-2">
          <div className="box-3">
            <div className="row pt-5 justify-content-between align-items-center">
              <div>
                <h3>Wednesday, 22 Nov</h3>
              </div>
              <div>
                <div >
                  <div className="d-flex justify-content-center align-items-center rounded-circle" style={{width:"80px", height:"80px", backgroundColor:"#5b75e3"}}>
                    <p className="add">+</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <p className="h4" style={{color:"#5b75e3"}}>3 tasks</p>
            </div>
            <div className="container m-5"></div>
            <TodoItem />
            <div className="container m-5"></div>
            <TodoItem />
            <div className="container m-5"></div>
            <TodoItem />
            

          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
