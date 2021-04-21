import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Layout } from "../Component";
import {
  BrowserRouter as Router,
  Switch,
  useHistory,
  Route,
} from "react-router-dom";
import { ExitToApp } from "@material-ui/icons";
import { IconButton,StylesProvider } from "@material-ui/core";
import {
  Dashboard,
  DataPeraturan,
  DataKeamananKantor,
  DataPengumuman,
  DataKondisiPegawai,
  DataInspeksi,
  DataProject,
  DataInduksi,
} from "../Page";
import "../Assets/styles/layout.css";
import "../Assets/styles/pages.css";

const useStyles = makeStyles((theme) => ({
  logout: {
    width: 30,
    height: 30,
    position: "fixed",
    margin: "10px 50px 10px 0",

    "&:hover": {
      background: "#fff",
      color: "#3F51B4",
      "& .MuiSvgIcon-root": {
        color: "#3F51B4",
      },
    },
    "&:active": {
      background: "#fff",
      color: "#3F51B4",
      "& .MuiSvgIcon-root": {
        color: "#3F51B4",
      },
    },
  },
}));
const MainApp = () => {
  let history = useHistory();
  const classes = useStyles();

  return (
    <>
      <IconButton
        style={{
          color: "#FFFF",
          zIndex: 2000,
          position: "absolute",
          top: "8px",
          right: "10px",
        }}
        onClick={() => {
          localStorage.removeItem("token");
          history.push("login");
        }}
      >
        <ExitToApp className={classes.logout} />
      </IconButton>

      <Router>
        <StylesProvider injectFirst>
          <Layout>
            <Switch>
              <Route path="/" exact>
                <Dashboard />
              </Route>
              <Route path="/dashboard" exact>
                <Dashboard />
              </Route>
              <Route path="/data-peraturan" exact>
                <DataPeraturan />
              </Route>
              <Route path="/data-project" exact>
                <DataProject />
              </Route>
              <Route path="/data-induksi" exact>
                <DataInduksi />
              </Route>
              <Route path="/data-inspeksi" exact>
                <DataInspeksi />
              </Route>
              <Route path="/keamanan-kantor" exact>
                <DataKeamananKantor />
              </Route>
              <Route path="/kondisi-pegawai" exact>
                <DataKondisiPegawai />
              </Route>
              <Route path="/data-pengumuman" exact>
                <DataPengumuman />
              </Route>
            </Switch>
          </Layout>
        </StylesProvider>
      </Router>
    </>
  );
};

export default MainApp;
