import React from 'react'
import {Avatar, Box, Typography, Chip} from '@material-ui/core/';
import { DataGrid, RowsProp, ColDef } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import { Name, User } from './Members';

const rows: RowsProp = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'XGrid', col2: 'is Awesome' },
  { id: 3, col1: 'Material-UI', col2: 'is Amazing' },
];

const columns: ColDef[] = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];

interface UserProps{
    User: User
}
export default function UserComp(props: UserProps ) {
    const person = props.User
    const handleClick = ()=> {

    }
    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'inline-block',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          width: '10%'
        },

      }));
      const classes = useStyles();
      const rows = [
        { id: 1, col1: 'Dummy User', col2: 'User is a ROLE for TEAM. Dummy Bio' },
      ];
      const columns = [
        { field: 'col1', headerName: 'Member', width: 150 },
        { field: 'col2', headerName: 'Bio', width: 150 },
      ];
    return (

      <div style={{ height: 300, width: '100%' }}>
         <DataGrid rows={rows} columns={columns} />
      </div>

    )
}
