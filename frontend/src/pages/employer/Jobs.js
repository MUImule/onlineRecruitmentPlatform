import React, { useEffect } from 'react';
import { Box, Button, Card, Paper, Typography } from '@mui/material';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { jobLoadAction } from '../../redux/actions/jobAction';
//import { userApproveJobAction } from '../../redux/actions/userAction';
import { toast } from 'react-toastify';

const Jobs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(jobLoadAction());
  }, []);
 
  const { jobs, loading } = useSelector((state) => state.loadJobs);

  // const approveForAJob = () => {
  //   dispatch(userApproveJobAction({
  //       title: jobs && jobs.title,
  //       description: jobs && jobs.description,
  //       salary: jobs && jobs.salary,
  //       location: jobs && jobs.location
  //   }))
  // }
  let data = [];
  data = jobs !== undefined && jobs.length > 0 ? jobs : [];
  //const { userJob, success } = useSelector((state) => state.approvedJobs);

// useEffect(() => {
//     if (success) {
//         // Job approval was successful
//         // Perform actions such as displaying a toast notification or updating the table
//         toast.success("Job Approved Successfully!");
//         // You may also choose to dispatch additional actions here to update the table or perform other tasks
//     }
// }, [success]);


  // const approveJob = async (id) => {
  //   try {
  //     const response = await fetch(`/api/jobs/${id}/approve`, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ status: 'approved' }), // Change this payload based on your backend logic
  //     });

  //     if (response.ok) {
  //       dispatch(/* Add your action to update state */);
  //       console.log(`Job with ID ${id} has been approved.`);
  //     } else {
  //       console.error('Failed to approve job.');
  //     }
  //   } catch (error) {
  //     console.error('Error approving job:', error);
  //   }
  // };

  const columns = [
    {
      field: '_id',
      headerName: 'Job ID',
      width: 150,
      editable: true,
    },
    {
      field: 'title',
      headerName: 'Job name',
      width: 150,
    },
    {
      field: 'jobType',
      headerName: 'Category',
      width: 150,
      valueGetter: (data) => data.row.jobType.jobTypeName,
    },
    // {
    //   field: 'user',
    //   headerName: 'User',
    //   width: 150,
    //   valueGetter: (data) => (data.row.user ? data.row.user.firstName : ''),
    // },
    {
      field: 'available',
      headerName: 'Available',
      width: 150,
      renderCell: (values) => (values.row.available ? 'Yes' : 'No'),
    },
    {
      field: 'salary',
      headerName: 'Salary',
      type: Number,
      width: 150,
      renderCell: (values) => `$${values.row.salary}`,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      renderCell: (values) => values.row.status,
    },
    // {
    //   field: 'approve',
    //   headerName: 'Approve',
    //   width: 150,
    //   renderCell: (values) =>
    //     values.row.status === 'pending' ? (
    //       <Box sx={{ flex: 1, p: 2 }}>
    //       <Card sx={{ p: 2}}>
    //           <Button onClick={approveForAJob} sx={{ fontSize: "13px" }} variant='contained'>Approve this Job</Button>
    //       </Card>
    //   </Box>
    //     ) : null,
    // },
  ];

  return (
    <Box>
      <Typography variant="h4" sx={{ color: 'white', pb: 3 }}>
        Jobs list
      </Typography>
      <Box sx={{ pb: 2, display: 'flex', justifyContent: 'right' }}>
      <Link style={{ color: 'white', textDecoration: 'none' }} to="/employer/jobs/createjobs">
  <Button variant="contained" color="success" startIcon={<AddIcon />}>
    Create Job
  </Button>
</Link>


      </Box>
      <Paper sx={{ bgcolor: 'secondary.midNightBlue' }}>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            getRowId={(row) => row._id}
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
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default Jobs;
