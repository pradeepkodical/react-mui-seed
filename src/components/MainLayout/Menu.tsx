import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import ModelTrainingOutlinedIcon from '@mui/icons-material/ModelTrainingOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export interface IMenuItem {
  title: string;
  path?: string;
  icon?: any;
  children?: Array<IMenuItem>;

  open?: boolean;
  selected?: boolean;
}

export const AllMenuItems: Array<IMenuItem> = [
  {
    title: 'Home',
    path: '/dashboard',
    icon: <HomeOutlinedIcon />,
  },
  {
    title: 'Education',
    path: '/education',
    icon: <SchoolOutlinedIcon />,
    children: [
      {
        title: 'Dashboard',
        path: '/education/dashboard',
      },
      {
        title: 'Course Library',
        path: '/education/courselibrary',
      },
      {
        title: 'Learning Path',
        path: '/education/learningpath',
      },
      {
        title: 'Live Streaming',
        path: '/education/livestreaming',
      },
      {
        title: 'Documents',
        path: '/education/documents',
      },
      {
        title: 'Instructors',
        path: '/education/instructors',
      },
      {
        title: 'Self Assessments',
        path: '/education/selfassessments',
      },
    ],
  },
  {
    title: 'Calendar',
    path: '/calendar',
    icon: <CalendarTodayOutlinedIcon />,
  },
  {
    title: 'Orders',
    path: '/orders',
    icon: <ShoppingCartOutlinedIcon />,
  },
  {
    title: 'Marketing',
    path: '/marketing',
    icon: <CampaignOutlinedIcon />,
    children: [
      {
        title: 'Dashboard',
        path: '/marketing/dashboard',
      },
      {
        title: 'My Day',
      },
      {
        title: 'Leads',
      },
      {
        title: 'Team',
      },
      {
        title: 'Commissions',
      },
      {
        title: 'Sales Link',
      },
      {
        title: 'Presentations',
      },
      {
        title: 'Advertising',
      },
      {
        title: 'Documents',
      },
      {
        title: 'Testimonials',
      },
    ],
  },
  {
    title: 'Video Library',
    icon: <VideoLibraryOutlinedIcon />,
  },
  {
    title: 'Training',
    icon: <ModelTrainingOutlinedIcon />,
    children: [
      {
        title: '10-Step',
      },
      {
        title: 'Leadership',
      },
      {
        title: 'Helios How To',
      },
      {
        title: 'Nationals',
      },
      {
        title: 'Regionals',
      },
      {
        title: 'Renatis IOS',
      },
      {
        title: 'M.O.N.E.Y Matrix',
      },
    ],
  },
  {
    title: 'Reports',
    icon: <InsertChartOutlinedIcon />,
  },
  {
    title: 'Corporate Docs',
    icon: <CorporateFareOutlinedIcon />,
    children: [
      {
        title: 'Compensation Plan',
      },
      {
        title: 'Compliance',
      },
      {
        title: 'Corporate Documents',
      },
      {
        title: 'Signed Agreements',
      },
    ],
  },
  {
    title: 'Control',
    icon: <SettingsOutlinedIcon />,
    children: [
      {
        title: 'Users',
      },
      {
        title: 'Tools',
      },
      {
        title: 'Roles',
      },
      {
        title: 'Verifications',
      },
      {
        title: 'Bonus Pool',
      },
      {
        title: 'Payouts',
      },
      {
        title: 'Speakers',
      },
      {
        title: 'Settings',
      },
      {
        title: 'Nationals Attendees',
      },
    ],
  },
];
