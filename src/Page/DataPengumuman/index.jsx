import Axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button, Paper
} from "@material-ui/core";

export default function DataPengumuman() {
  const [dataPeraturan, setDataPeraturan] = useState([]);
  // console.log(dataPeraturan);
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setDataPeraturan(res.data);
    });
  });
  return (
    <div className="root">
    <Paper className="paper">
      <h3 className="title">Data Pengumuman</h3>
    
    </Paper>
  </div>
  );
}
