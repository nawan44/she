import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Footer from "../Layout/Footer";
import {
  Home,
  Group,
  Assignment,
  ChevronLeft,
  ChevronRight,
  ImportContacts,
  Menu,
  FindInPage,
  RecordVoiceOver,
  PhonelinkSetup,
  Security,
} from "@material-ui/icons";
import { NavLink, useLocation } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import logo from "../../Assets/sidebar/.png";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    width: "100%",
    height: "100px",
    // float:"left",
    flexGrow: 1,
    margin: "70px 0 0 0 ",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));
const dataMenu = [
  {
    path: "/",
    text: "Dashboard",
    icon: <Home />,
    // role: "admin"
  },
  {
    path: "/data-peraturan",
    text: "Data Peraturan",
    // role: ["supp", "admin"],
    icon: <Assignment />,
  },
  {
    path: "/data-project",
    text: "Data Project",
    // role: ["supp", "admin"],
    icon: <PhonelinkSetup />,
  },
  {
    path: "/data-induksi",
    text: "Data Induksi",
    // role: ["supp", "admin"],
    icon: <ImportContacts />,
  },
  {
    path: "/data-inspeksi",
    text: "Data Inspeksi",
    // role: ["prod", "admin"],
    icon: <FindInPage />,
  },
  {
    path: "/keamanan-kantor",
    text: "Data Keamanan Kantor",
    // role: ["prod", "admin"],
    icon: <Security />,
  },
  {
    path: "/kondisi-pegawai",
    text: "Data Kondisi Pegawai",
    // role: ["prod", "admin"],
    icon: <Group />,
  },
  {
    path: "/data-pengumuman",
    text: "Data Pengumuman",
    // role: ["prod", "admin"],
    icon: <RecordVoiceOver />,
  },
];
export default function PersistentDrawerLeft(props) {
  let location = useLocation();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx("menuButton", open && classes.hide)}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap>
             Safety Health Environment{" "}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        onClick={handleDrawerClose}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          {/* <img src={logo} className="logo" alt="logo" /> */}

          <IconButton onClick={handleDrawerClose}  className="close">
            {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {dataMenu.map((row, index, r) => {
            return (
              <NavLink
                to={row.path}
                key={index}
                className="sidebarTitle"              >
                <ListItem
                  button
                  key={index}
                  className="listItem"
                  selected={location.pathname === row.path}
                >
                  <ListItemIcon className={classes.icon}>
                    {row.icon}
                  </ListItemIcon>
                  <ListItemText primary={row.text} />
                </ListItem>
              </NavLink>
            );
          })}
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
        <Footer />
      </main>
    </div>
  );
}
