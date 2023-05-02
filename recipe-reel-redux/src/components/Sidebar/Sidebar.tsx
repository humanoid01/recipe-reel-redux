import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';

import AddBoxIcon from '@mui/icons-material/AddBox';
import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining';
import GradeIcon from '@mui/icons-material/Grade';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import { useState } from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
}

const Link = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(function Link(
  itemProps,
  ref
) {
  return <RouterLink ref={ref} {...itemProps} />;
});

function ListItemLink(props: ListItemLinkProps) {
  const { icon, primary, to } = props;
  return (
    <li>
      <ListItem component={Link} to={to}>
        {icon ? (
          <ListItemIcon sx={{ color: 'black' }}>{icon}</ListItemIcon>
        ) : null}
        <ListItemText sx={{ color: 'black' }} primary={primary} />
      </ListItem>
    </li>
  );
}

export const Sidebar = () => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const [open, setOpen] = useState(false);

  return (
    <>
      {open || isSmUp ? null : (
        <Box
          position={'fixed'}
          display={'block'}
          sx={{
            zIndex: 9999,
            width: '100%',
            background: 'white',
          }}>
          <IconButton size='large' sx={{ m: 0 }} onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Box>
      )}

      <Toolbar sx={{ position: 'inherit', display: 'block' }}>
        <Drawer
          variant={isSmUp ? 'permanent' : 'temporary'}
          anchor='left'
          open={open}
          onClose={() => setOpen(false)}>
          <List>
            <ListItemLink
              to='/'
              primary='Search recipes'
              icon={<SearchIcon />}
            />
            <ListItemLink
              to='/favorites'
              primary='Favorites'
              icon={<GradeIcon />}
            />
            <ListItemLink
              to='/my-recipes'
              primary='My recipes'
              icon={<BreakfastDiningIcon />}
            />
            <ListItemLink
              to='/create-recipe'
              primary='Create recipe'
              icon={<AddBoxIcon />}
            />
          </List>
        </Drawer>
      </Toolbar>
    </>
  );
};
