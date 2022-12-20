import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled } from '@mui/material'
import { getUsers, deleteUser } from '../Service/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #227C70;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Action </TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TRow key={user.id}>
                        <TableCell>{user.Firstname}</TableCell>
                        <TableCell>{user.Lastname}</TableCell>
                        <TableCell>{user.gender}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            <Button color="success" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button> {/* change it to user.id to use JSON Server */}
                            <Button color="error" variant="contained" onClick={() => deleteUserData(user._id)}>Delete</Button> {/* change it to user.id to use JSON Server */}
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default AllUsers;