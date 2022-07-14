import "./datatable.scss"
import {userColumns,userRows} from "../../datatablesource";
import { DataGrid} from '@mui/x-data-grid';
import {Link} from "react-router-dom"
import { useState } from "react";

const Datatable = () => {

    const [data,setData]=useState(userRows);

    const handleDelete=(id)=>{
        setData(data.filter(d=>
            d.id!==id
        ))
    }

    const actionColumn=[{
        field:"action",
        headerName:"Action",
        width:200,
        renderCell:(params)=>{
            return(
                <div className="cellAction">
                   <Link to="/users/single" style={{textDecoration:"none"}}>
                        <div className="viewButton">View</div>
                    </Link>
                    <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>

                </div>
            )
        }
    }];

  return (
    <div className="datatable" style={{ height: 600, width: '100%' }}>
        <div className="datatableTitle">
          Add New User  
          <Link to="/users/new" style={{textDecoration:"none"}} className="link">
                Add New
          </Link>
        </div>
        <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable