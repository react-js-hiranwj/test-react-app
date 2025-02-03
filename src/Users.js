import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";


const users = [ /* var users, let users, const users, All of these can be used */
    {
        id: 1,
        name: 'Hiran',
    },
    {
        id: 2,
        name: 'Danushka',
    },
];

const Users = () => {
    return (
        <Box
            sx={{
                width: 'calc(100%) - 100px',
                margin: 'auto',
                marginTop: '100px'
            }}
        >
            <UserForm />
            <UsersTable rows={users} />
        </Box>
    );
}

export default Users;