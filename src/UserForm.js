// import { Button, Grid, Input, Typography } from "@mui/material";

// const UserForm = props => {
//     return (
//         <Grid
//             container
//             spacing={2}
//             sx={{
//                 backgroundColor: '#ffffff',
//                 marginBottom: '30px',
//                 display: 'block',
//             }}
//         >
//             <Grid item xs={12}> {/* xs - extra samll */}
//                 <Typography 
//                     component={'h1'} 
//                     sx={{color: '#000000'}}
//             >
//                     UserForm
//                 <Typography/>
//             <Grid/>

//             <Grid item xs={12} sm={6} sx={{ display: 'flex'}}> {/* xs - extra small */}
//                 <Typography 
//                     component={'label'} 
//                     htnlFor={'id'}
//                     sx={{
//                         color: '#000000',
//                         marginRight: '20px',
//                         fontSize: '16px',
//                         width: '100px',
//                         display: 'block',
//                     }}
//                 >
//                     ID
//                 </Typography>

//                 <Input 
//                     type="number"
//                     id="id"
//                     name="id"
//                     sx={{
//                         width: '400px',
//                     }}
//                     value={""}
//                     onChange={e => {}}
                    
//                 />
//             <Grid/>

//             <Grid item xs={12} sm={6} sx={{ display: 'flex'}}> {/* xs - extra small */}
//                 <Typography 
//                     component={'label'} 
//                     htnlFor={'id'}
//                     sx={{
//                         color: '#000000',
//                         marginRight: '20px',
//                         fontSize: '16px',
//                         width: '100px',
//                         display: 'block',
//                     }}
//                 >
//                     Name
//                 </Typography>

//                 <Input 
//                     type="number"
//                     id="id"
//                     name="id"
//                     sx={{
//                         width: '400px',
//                     }}
//                     value={""}
//                     onChange={e => {}}
                    
//                 />
//             <Grid/>

//             <Button
//                 sx={{
//                     margin: 'auto',
//                     marginBottom: '20px',
//                     backgroundColor: '#00c6e6',
//                     color: '#000000',
//                     marginLeft: '15px',
//                     marginTop: '20px',
//                     '&:hover': {
//                         opacity: '0.8',
//                         backgroundColor: '#00c6e6'
//                     }
//                 }}
//             >
//                 Add
//             </Button>
//         </Grid>

//         {/* <div>
//            <label>USer ID</label>
//           <input type="text" />
//         </div> */}
//     );
// }

// export default UserForm;


// --------------------------------------------------------


import { Button, Grid2, Input, Typography } from "@mui/material";
import { useState } from "react";

const UserForm = () => {

    const [id, setId] = useState(0);    /* state variable */
    const [name, setName] = useState("");   /* state variable */

    return (
        <Grid2
            container
            spacing={2}
            sx={{
                backgroundColor: "#ffffff",
                marginBottom: "30px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Grid2 item xs={12}>
                <Typography component="h1" sx={{ color: "#000000" }}>
                    User Form
                </Typography>
            </Grid2>

            {/* ID Input */}
            <Grid2 item xs={12} sm={6} sx={{ display: "flex", alignItems: "center" }}>
                <Typography 
                    component="label"
                    htmlFor="user-id"
                    sx={{
                        color: "#000000",
                        marginRight: "20px",
                        fontSize: "16px",
                        width: "100px",
                        display: "block",
                    }}
                >
                    ID
                </Typography>

                <Input 
                    type="number"
                    id="user-id"
                    name="id"
                    sx={{
                        width: "400px",
                    }}
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
            </Grid2>

            {/* Name Input */}
            <Grid2 item xs={12} sm={6} sx={{ display: "flex", alignItems: "center" }}>
                <Typography 
                    component="label"
                    htmlFor="user-name"
                    sx={{
                        color: "#000000",
                        marginRight: "20px",
                        fontSize: "16px",
                        width: "100px",
                        display: "block",
                    }}
                >
                    Name
                </Typography>

                <Input 
                    type="text"
                    id="user-name"
                    name="name"
                    sx={{
                        width: "400px",
                    }}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </Grid2>

            {/* Button */}
            <Grid2 item xs={12}>
                <Button
                    sx={{
                        margin: "auto",
                        marginBottom: "20px",
                        backgroundColor: "#00c6e6",
                        color: "#000000",
                        marginLeft: "15px",
                        marginTop: "20px",
                        "&:hover": {
                            opacity: "0.8",
                            backgroundColor: "#00c6e6",
                        },
                    }}
                >
                    Add
                </Button>
            </Grid2>
        </Grid2>
    );
};

export default UserForm;
