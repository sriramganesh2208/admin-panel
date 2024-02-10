import React, { useState } from 'react'
import "./Datatable.scss"
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns ,userRows} from '../../datatablesource';
import { Button } from '@mui/material';



function Datatable() {

  const [data,setData] =useState(userRows);

  const handleDelete=(id)=>{
    setData(data.filter(item=> item.id !=id))
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className='datatable' >
    
      <div className="datatableTitle">
      <h4>Add New User</h4>
        <Link to='/users/new' style={{textDecoration:"none"}} className='link'>
            <Button>
              Add New
            </Button>
        </Link>

      </div>
        <DataGrid
        className='datagrid'
        rows={data}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable