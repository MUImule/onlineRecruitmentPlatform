import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
import LogIn from './pages/LogIn';
import UserDashboard from './pages/user/UserDashboard';
import UserRoute from './component/UserRoute';
import AdminRoute from './component/AdminRoute';
import Layout from './pages/global/Layout';
import UserJobsHistory from './pages/user/UserJobsHistory';
import UserInfoDashboard from './pages/user/UserInfoDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import SingleJob from './pages/SingleJob';
import DashUsers from './pages/admin/DashUsers';
import DashJobs from './pages/admin/DashJobs';
import Register from './pages/Register';
import Employer from './pages/Employer';
import DashCategory from './pages/admin/DashCategory';
import DashCreateJob from './pages/admin/DashCreateJob';
import DashCreateCategory from './pages/admin/DashCreateCategory';
import EmployerDashboard from './pages/employer/EmployerDashboard';
import EmployerRoute from './component/EmployerRoute';
import Users from './pages/employer/Users';
import Jobs from './pages/employer/Jobs';
import CreateJobs from './pages/employer/CreateJobs';
import { createTheme } from '@mui/material/styles';
import { themeColors } from './theme'
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import AboutUs from './pages/AboutUs';

// HOC
const UserDashboardHOC = Layout(UserDashboard);
const UserJobsHistoryHOC = Layout(UserJobsHistory);
const UserInfoDashboardHOC = Layout(UserInfoDashboard);
const AdminDashboardHOC = Layout(AdminDashboard);
const EmployerDashboardHOC = Layout(EmployerDashboard);
const UsersHOC = Layout(Users);
const CreateJobsHOC = Layout(CreateJobs);
const JobsHOC = Layout(Jobs);
const DashUsersHOC = Layout(DashUsers);
const DashJobsHOC = Layout(DashJobs);
const DashCategoryHOC = Layout(DashCategory)
const DashCreateJobHOC = Layout(DashCreateJob)
const DashCreateCategoryHOC = Layout(DashCreateCategory)

const App = () => {
  const { mode } = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeColors(mode)), [mode]);



  return (
    <>
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProSidebarProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/search/location/:location' element={<Home />} />
              <Route path='/search/:keyword' element={<Home />} />
              <Route path='/login' element={<LogIn />} />
              <Route path='/about' element={<AboutUs />} />
              <Route path='/register' element={<Register />} />
              <Route path='/employer' element={<Employer />} />
              <Route path='/job/:id' element={<SingleJob />} />
              <Route path='/employer/dashboard' element={<EmployerRoute><EmployerDashboardHOC /></EmployerRoute>} />
              <Route path='/employer/users' element={<EmployerRoute><UsersHOC /></EmployerRoute>} />
              <Route path='/employer/jobs/createjobs' element={<EmployerRoute><CreateJobsHOC /></EmployerRoute>} />
              <Route path='/employer/jobs' element={<EmployerRoute><JobsHOC /></EmployerRoute>} />
              <Route path='/admin/dashboard' element={<AdminRoute><AdminDashboardHOC /></AdminRoute>} />
              <Route path='/admin/users' element={<AdminRoute><DashUsersHOC /></AdminRoute>} />
              <Route path='/admin/jobs' element={<AdminRoute><DashJobsHOC /></AdminRoute>} />
              <Route path='/admin/category' element={<AdminRoute><DashCategoryHOC /></AdminRoute>} />
              <Route path='/admin/job/create' element={<AdminRoute><DashCreateJobHOC /></AdminRoute>} />
              <Route path='/admin/category/create' element={<AdminRoute><DashCreateCategoryHOC /></AdminRoute>} />
              <Route path='/user/dashboard' element={<UserRoute><UserDashboardHOC /></UserRoute>} />
              <Route path='/user/jobs' element={<UserRoute><UserJobsHistoryHOC /></UserRoute>} />
              <Route path='/user/info' element={<UserRoute><UserInfoDashboardHOC /></UserRoute>} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ProSidebarProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
