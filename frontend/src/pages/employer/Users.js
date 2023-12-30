import React, { useEffect, useState } from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import { DataGrid, gridClasses, GridToolbar } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { allUserAction, sendMessageAction } from '../../redux/actions/userAction';
import MessageComponent from '../../component/MessageComponent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Users = () => {
  const [appliedJobsToShow, setAppliedJobsToShow] = React.useState(null);
  const [recipientId, setRecipientId] = useState(null);
  const [senderId, setSenderId] = useState(null);

  const dispatch = useDispatch();

  const handleSendMessage = async (message) => {
    try {
      await dispatch(sendMessageAction(message));
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleSendMessageButton = (values) => {
    const currentUserID = '65756c36647aab15d826ccf0'; // Replace with actual current user ID
    const selectedRecipientId = values.row._id;

    setSenderId('65756c36647aab15d826ccf0');
    setRecipientId('65740a0efbfe5e368863474e');
  };

  useEffect(() => {
    dispatch(allUserAction());
  }, []);

  const { users, appliedJobs } = useSelector((state) => state.allUsers);
  let data = users !== undefined && users.length > 0 ? users : [];

  const deleteUserById = (e, id) => {
    console.log(id);
  };

  const handleApproveJob = (userId) => {
    toast.success('Job approved successfully', {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const columns = [
    {
      field: '_id',
      headerName: 'User ID',
      width: 150,
      editable: true,
    },
    {
      field: 'appliedJobs',
      headerName: 'Applied Jobs',
      width: 200,
      renderCell: (values) => (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {values.row.jobsHistory && values.row.jobsHistory.length > 0 ? (
            values.row.jobsHistory.map((job, index) => (
              <Typography key={index}>{job.title}</Typography>
            ))
          ) : (
            <Typography>Not applied for a job</Typography>
          )}
        </Box>
      ),
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 200,
      renderCell: (values) => (
        <Typography>
          {values.row.firstName} {values.row.lastName}
        </Typography>
      ),
    },
    {
      field: 'highestEducationLevel',
      headerName: 'Highest Education Level',
      width: 200,
    },
    {
      field: 'fieldOfStudy',
      headerName: 'Field of Study',
      width: 200,
    },
    {
      field: 'approveJob',
      headerName: 'Approve Job',
      width: 200,
      renderCell: (values) => (
        <Button
          variant="contained"
          color="success"
          onClick={() => handleApproveJob(values.row._id)}
        >
          Approve
        </Button>
      ),
    },
  
    {
      field: 'createdAt',
      headerName: 'Creation Date',
      width: 200,
      renderCell: (params) => moment(params.row.createdAt).format('YYYY-MM-DD HH:MM:SS'),
    },
   
  ];

  // Add this line before the return statement
  data = data.filter((user) => user.role === 0);

  return (
    <>
      <Box>
        {recipientId && senderId && (
          <MessageComponent
            recipientId={recipientId}
            senderId={senderId}
            onMessageSent={() => {
              // Add any additional logic you need after sending the message
              setRecipientId(null);
              setSenderId(null);
            }}
          />
        )}
        <ToastContainer /> {/* Add this line for toast notifications */}
        <Typography variant="h4" sx={{ color: 'white', pb: 3 }}>
          All users
        </Typography>
        <Paper sx={{ bgcolor: 'secondary.midNightBlue' }}>
          <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
              sx={{
                '& .MuiTablePagination-displayedRows': {
                  color: 'white',
                },
                color: 'white',
                [`& .${gridClasses.row}`]: {
                  bgcolor: (theme) => theme.palette.secondary.main,
                },
                button: {
                  color: '#ffffff',
                },
              }}
              getRowId={(row) => row._id}
              rows={data}
              columns={columns}
              pageSize={3}
              rowsPerPageOptions={[3]}
              checkboxSelection
              slots={{ toolbar: GridToolbar }}
            />
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Users;
