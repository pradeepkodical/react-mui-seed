import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  ListItemButton,
  Collapse,
  Box,
  AppBar,
  Toolbar,
  Typography,
} from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { AllMenuItems, IMenuItem } from './Menu';
import { useLocation, useNavigate } from 'react-router-dom';

const drawerWidth = 240;

function selectMenu(path: string, mnu: IMenuItem) {
  const p = mnu.path || '/';
  mnu.selected = false;
  mnu.open = false;

  if (path === p) {
    mnu.selected = true;
    mnu.open = true;
    return true;
  } else {
    mnu.children?.forEach((cm) => {
      if (selectMenu(path, cm)) {
        mnu.open = true;
      }
    });
    return false;
  }
}

export default function SideNav({ onClose }: { onClose: () => void }) {
  const [menu, setMenu] = useState<Array<IMenuItem>>(AllMenuItems);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = useCallback(
    (mnu: IMenuItem) => {
      if (!mnu.children) {
        navigate(mnu.path || '/');
      } else {
        setMenu((oldMenu) =>
          oldMenu.map((x) =>
            x === mnu ? { ...mnu, open: !mnu.open } : { ...x, open: false }
          )
        );
      }
    },
    [setMenu, navigate]
  );

  useEffect(() => {
    setMenu((oldMenu) => {
      const newMenu = oldMenu.map((x) => ({ ...x }));
      selectMenu(location.pathname, { title: 'root', children: newMenu });
      return newMenu;
    });
  }, [setMenu, location]);

  return (
    <>
      <AppBar
        color='inherit'
        position='fixed'
        sx={{ left: 0, maxWidth: `${drawerWidth}px` }}
      >
        <Toolbar disableGutters>
          <Typography sx={{ marginLeft: 1 }} variant='button'>
            React MUI
          </Typography>

          <Box flex='1'></Box>
          <IconButton onClick={onClose}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <List sx={{ marginTop: 8 }}>
        {menu.map((m: IMenuItem, index: number) => (
          <Box key={m.title + index}>
            <ListItemButton
              key={m.title + index}
              onClick={() => handleClick(m)}
              selected={m.selected}
            >
              <ListItemIcon sx={{ minWidth: (theme) => theme.spacing(4) }}>
                {m.icon}
              </ListItemIcon>
              <ListItemText primary={m.title} />
              {m.children && (m.open ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
            {m.children && (
              <Collapse in={m.open} timeout='auto' unmountOnExit>
                <List component='div'>
                  {m.children.map((cm: IMenuItem, cIndex: number) => (
                    <ListItemButton
                      key={cIndex}
                      onClick={() => handleClick(cm)}
                      selected={cm.selected}
                    >
                      <ListItemText
                        primary={cm.title}
                        sx={{ paddingLeft: 5 }}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
          </Box>
        ))}
      </List>
    </>
  );
}
