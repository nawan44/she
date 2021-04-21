import {
  TableHead,
  Table,
  Paper,
  TableCell,
  TableRow, TableBody
} from "@material-ui/core";
import Axios from 'axios';
import React, { useEffect, useState } from 'react';


export default function DataKondisiPegawai() {
  const [dataKondisiPegawai, setDataKondisiPegawai] = useState([]);
// console.log(user)
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      setDataKondisiPegawai(res.data);
    });
  });
  return (
    <div className="root">
    <Paper className="paper">
      <h3 className="title">Data Kondisi Pegawai</h3>
    
    </Paper>
  </div>
  );
}
