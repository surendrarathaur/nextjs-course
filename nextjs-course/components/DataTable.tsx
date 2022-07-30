import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { User } from '../interfaces/User'

type Props = {
    users: User[]
}

const DataTable = ({ users }: Props) => {

    const columns: GridColDef[] = [
        {
            field: 'id', 
            headerName: 'ID', 
            width: 70,
            sortable: false, 
            valueGetter: (params: GridValueGetterParams) =>
                `${params.row.id || ''}`,
        },
        {
            field: 'name', 
            headerName: 'Name', 
            width: 130, 
            sortable: false,
            valueGetter: (params: GridValueGetterParams) =>
                `${params.row.name || ''}`,
        },
        {
            field: 'username', 
            headerName: 'Username', 
            width: 130, 
            sortable: false,
            valueGetter: (params: GridValueGetterParams) =>
                `${params.row.username || ''}`,
        },
        {
            field: 'email', 
            headerName: 'Email',
            sortable: false,
            width: 160,
            valueGetter: (params: GridValueGetterParams) =>
                `${params.row.email || ''}`,
        },
        {
            field: 'phone', 
            headerName: 'Phone',
            sortable: false,
            width: 160,
            valueGetter: (params: GridValueGetterParams) =>
                `${params.row.phone || ''}`,
        },
        {
            field: 'website', 
            headerName: 'Website',
            sortable: false,
            width: 160,
            valueGetter: (params: GridValueGetterParams) =>
                `${params.row.website || ''}`,
        },
    ];

    // const rows = [
    //     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    //     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    //     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    //     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    //     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    //     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    //     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    //     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    // ];
    const rows = users;
    //console.log(users)
    return (
        <div style={{ height: 550, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={9}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}

export default DataTable;