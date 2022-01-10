import { Box } from '@mui/material';
import { Routes, Route, Outlet } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import CalendarDashboard from './pages/calendar/dashboard/CalendarDashboard';
import LandingDashboard from './pages/dashboard/LandingDashboard';
import CourseLibrary from './pages/education/courselibrary/CourseLibrary';
import EducationDashboard from './pages/education/dashboard/EducationDashboard';
import LoginPage from './pages/login/LoginPage';
export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/' element={<MainLayout />}>
        <Route path='' element={<LandingDashboard />}></Route>
        <Route path='dashboard' element={<LandingDashboard />}></Route>

        <Route path='education' element={<Outlet />}>
          <Route path='' element={<EducationDashboard />}></Route>
          <Route path='dashboard' element={<EducationDashboard />}></Route>
          <Route path='courselibrary' element={<CourseLibrary />}></Route>
        </Route>

        <Route path='marketing' element={<Outlet />}>
          <Route path='' element={<LandingDashboard />}></Route>
          <Route path='dashboard' element={<LandingDashboard />}></Route>
          <Route path='courselibrary' element={<LandingDashboard />}></Route>
        </Route>

        <Route path='calendar' element={<Outlet />}>
          <Route path='' element={<CalendarDashboard />}></Route>
        </Route>

        <Route
          path='*'
          element={
            <Box>
              <p>There's nothing here!</p>
            </Box>
          }
        />
      </Route>
    </Routes>
  );
}
