import React from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function App() {
  const columnDefs= [
    { headerName: "Name", field: "company_name" },
    { headerName: "Floor", field: "floor",}, 
    { headerName: "Group",field: "videos",},
    { headerName: "Camera", field: "camera" },
    ]

const defaultColDef={
  sortable:true,
  editable:true,
  flex:1,filter:true,
  floatingFilter:true
}

const onGridReady=(params)=>{
  console.log("grid is ready")
  fetch("http://localhost:8000/get_all")
  .then(resp=>resp.json())
  .then(resp=>{console.log(resp.results)
    
    params.api.applyTransaction({add:resp.results})
  })
}
  return (
    <div className="App">
      <h1 align="center"> React FastAPI Integration</h1>
      <h3> API Data </h3>
      <div className="ag-theme-alpine" style={ {height: '400px'} }>
        <AgGridReact
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            onGridReady={onGridReady}>
        </AgGridReact>
      </div>
    </div>
  );
}

export default App;