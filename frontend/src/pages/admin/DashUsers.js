import React, { useEffect, useState } from 'react';
import { Box, Button, Paper, Typography, Popover } from '@mui/material';
import { DataGrid, gridClasses, GridToolbar } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { allUserAction, sendMessageAction } from '../../redux/actions/userAction';
import MessageComponent from '../../component/MessageComponent';

const DashUsers = () => {
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

  const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);

  const handlePopoverOpen = (event, appliedJobs) => {
    setPopoverAnchorEl(event.currentTarget);
    setAppliedJobsToShow(appliedJobs);
  };

  const handlePopoverClose = () => {
    setPopoverAnchorEl(null);
    setAppliedJobsToShow([]);
  };

  const columns = [
    {
      field: '_id',
      headerName: 'User ID',
      width: 150,
      editable: true,
    },
    {
      field: 'AppliedJobs',
      width: 200,
      renderCell: (values) => (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {values.row.jobsHistory && values.row.jobsHistory.length > 0 ? (
            <Button onClick={(e) => setAppliedJobsToShow({ anchorEl: e.currentTarget, jobs: values.row.jobsHistory })}>
              View applied Jobs
            </Button>
          ) : (
            <Typography>Not applied for a job</Typography>
          )}
          <Popover
            open={Boolean(appliedJobsToShow)}
            anchorEl={appliedJobsToShow?.anchorEl}
            onClose={() => setAppliedJobsToShow(null)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <Box sx={{ padding: 2 }}>
              {appliedJobsToShow?.jobs && appliedJobsToShow.jobs.length > 0 ? (
                appliedJobsToShow.jobs.map((job, index) => (
                  <Typography key={index}>{job.title}</Typography>
                ))
              ) : (
                <Typography>Not applied to any jobs</Typography>
              )}
            </Box>
          </Popover>
        </Box>
      ),
    },
    {
      field: 'Actions',
      width: 200,
      renderCell: (values) => (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '170px' }}>
          <Button onClick={() => handleSendMessageButton(values)}>Send Message</Button>
        </Box>
      ),
    },
    {
      field: 'email',
      headerName: 'E_mail',
      width: 150,
    },
    {
      field: 'createdAt',
      headerName: 'Creation date',
      width: 150,
      renderCell: (params) => moment(params.row.createdAt).format('YYYY-MM-DD HH:MM:SS'),
    },
  ];

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
        <Typography variant="h4" sx={{ color: 'white', pb: 3 }}>
          All users
        </Typography>
        {/* <Box sx={{ pb: 2, display: 'flex', justifyContent: 'right' }}>
          <Button variant="contained" color="success" startIcon={<AddIcon />}>
            Create user
          </Button>
        </Box> */}
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

export default DashUsers;
