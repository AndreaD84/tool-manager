// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { AppBar, Box, Button, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react';
import StorageIcon from '@mui/icons-material/Storage';
import { RedisManager } from 'redis-manager';





export function App() {

  const [openSideNav, setOpenSideNav] = React.useState(false);

  const [openRedisManager, setOpenRedisManager] = React.useState(false);

  const setIsOpen = (isOpen: boolean) => {
    setOpenSideNav(isOpen);
  }

  const openTool = (toolName: string) => {
    if (toolName === 'redis-manager') {

      setOpenRedisManager(true);
    }

    setIsOpen(false);
  }

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Toolbar className={styles['toolbar']}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              myMSC Admin Tools
            </Typography>
          </Toolbar>
          <Drawer
            anchor='left'
            open={openSideNav}
            onClose={() => {
              setIsOpen(false);
            }}
            className={styles['side-nav']}
            sx={
              { width: 250 }
            }
          >
            <h2>Tools</h2>
            <Divider />
            <List>
              <ListItem onClick={() => {
                openTool('redis-manager');
              }}>
                <StorageIcon />
                <span className={styles['list-item-text']}>Redis Cache manager</span>
              </ListItem>

            </List>
          </Drawer>
        </Grid>
        <Grid item xs={12}>
          {openRedisManager && <RedisManager />}
        </Grid>
      </Grid>
    </>
  );
}

export default App;
