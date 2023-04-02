import React from 'react'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems } from './listItems';
import PropTypes from 'prop-types';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from '@mui/material/Button';


import api from '../Api/api';
import { Chip } from '@mui/material';

const drawerWidth = 200;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

function createData(name, location) {
    return {
        name,
        location,
        detail: [
            {
                ownersName: "Milan Roka",
                Phone: 9845612345,
                Email: 'milandai@gmail.com'

            }
        ],
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment >
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="center">{row.location}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Details
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell >Owners Name</TableCell>
                                        <TableCell align="center">Phone</TableCell>
                                        <TableCell align="center">Email</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.detail.map((historyRow) => (
                                        <TableRow align='center'>
                                            <TableCell component="th" scope="row">
                                                {historyRow.ownersName}
                                            </TableCell>
                                            <TableCell align='center'>
                                                {historyRow.Phone}
                                            </TableCell>
                                            <TableCell align='center'>
                                                {historyRow.Email}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    <Button variant='contained' display='flex' alignItems='center'>
                                        Delete
                                    </Button>

                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        name: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        detail: PropTypes.arrayOf(
            PropTypes.shape({
                ownersName: PropTypes.string.isRequired,
                Phone: PropTypes.string.isRequired,
                Email: PropTypes.string.isRequired,
            }),
        ).isRequired,
        ownersName: PropTypes.string.isRequired,
        Phone: PropTypes.number.isRequired,
        Email: PropTypes.number.isRequired,
    }).isRequired,
};

const rows = [
    createData('Hostel Yog', 'Paknajol'),
];

const mdTheme = createTheme();

function DashboardContent() {
    const [open, setOpen] = React.useState(true);
    const [properties, setProperties] = React.useState([]);
    const toggleDrawer = () => {
        setOpen(!open);
    };



    React.useEffect(() => {

        if (properties) {
            console.log(properties)
        }
        else {
            console.log("bad")
        }
    }, [properties])
    const fetchProperties = async () => {
        const { data } = await api.get('/property/');
        setProperties(data);
    };


    React.useEffect(() => {
      
        fetchProperties()

    }, []);


    const onApprove = async(id) =>{
        const status = "Approved"
        await api.put(`/property/status/${id}`,
        {
            status
        })
        setProperties("")
        fetchProperties()

    }

    const onReject = async(id) =>{
        const status = "Rejected"
        await api.put(`/property/status/${id}`,
        {
            status
        })
        fetchProperties()
    }
    return (
        <>
            <ThemeProvider theme={mdTheme}>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar position="absolute" open={open}>
                        <Toolbar
                            sx={{
                                pr: '24px', // keep center padding when drawer closed
                                backgroundColor: 'green'
                            }}
                        >
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={toggleDrawer}
                                sx={{
                                    margincenter: '36px',
                                    ...(open && { display: 'none' }),
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                component="h1"
                                variant="h6"
                                color="inherit"
                                noWrap
                                sx={{ flexGrow: 1 }}
                            >
                                Dashboard
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Drawer variant="permanent" open={open}>
                        <Toolbar
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                px: [1],
                            }}
                        >
                            <IconButton onClick={toggleDrawer}>
                                <ChevronLeftIcon />
                            </IconButton>
                        </Toolbar>

                        <Divider />
                        <List component="nav">
                            {mainListItems}
                        </List>
                    </Drawer>
                    <Box
                        component="main"
                        sx={{
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'light'
                                    ? theme.palette.grey[100]
                                    : theme.palette.grey[900],
                            flexGrow: 1,
                            height: '100vh',
                            overflow: 'auto',
                        }}>
                        <Toolbar />
                        <h1 style={{ padding: 10, fontWeight: 'bold', fontSize: '20px' }}>Property Admin List</h1>
                        <Box sx={{ width: '100%', p: 2 }}>
                            <TableContainer component={Paper} sx={{ width: 900 }}>
                                <Table aria-label="collapsible table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="left">Property Name</TableCell>
                                            <TableCell align="center">Email</TableCell>
                                            <TableCell align="center">City</TableCell>
                                            <TableCell align= "center">Status</TableCell> 
                                            <TableCell align = "center">Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {properties?.map((property) => (
                                            <TableRow align='center'>
                                                <TableCell align='center'>
                                                    {property.propertyName}
                                                </TableCell>
                                                <TableCell align='center'>
                                                    {property.email}
                                                </TableCell>
                                                <TableCell align='center'>
                                                    {property.city}
                                                </TableCell>
                                                <TableCell align='center'>
                                                    {
                                                        property.status === 'Pending' ? (
                                                            <Chip label="Pending" color="warning" />
                                                        ) : property.status === 'Approved' ? (
                                                            <Chip label="Approved" color="success" />
                                                        ) : (
                                                            <Chip label="Rejected" color="error" />
                                                        )
                                                    }
                                                </TableCell>
                                                <TableCell align='center'>
                                                    {
                                                        property.status === 'Pending' ? (
                                                    <Box display={'flex'} flexDirection={"row"}>
                                                    <Button variant= 'contained' display = 'flex' alignItems='center'
                                                    style={{
                                                        backgroundColor: 'green',
                                                        color: 'white',
                                                        marginLeft: '10px'   
                                                    }}
                                                    onClick={() => onApprove(property._id)}
                                                    >   
                                                        Approve
                                                    </Button>
                                                    <Button variant='contained' display='flex' alignItems='center'
                                                    style={{
                                                        backgroundColor: 'red',
                                                        color: 'white',
                                                        marginLeft: '10px'
                                                    }}
                                                    onClick={() => onReject(property._id)}
                                                    >
                                                        Reject
                                                    </Button>
                                                  
                                                    </Box>
                                                        ) : 
                                                        (
                                                            <Typography
                                                            variant="body2"
                                                            color="text.secondary"
                                                            >
                                                                No Action Available
                                                            </Typography>
                                                        )
                                                    }
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Box>
                </Box>
            </ThemeProvider>
        </>
    )
}
export default function SuperAdmin() {
    return <DashboardContent />;
}
