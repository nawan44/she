import {
  TableHead,
  Table,
  Paper,
  TableCell,
  TableRow,
  TableBody,
  FormControlLabel,
  Switch,
  Button,
} from "@material-ui/core";
import Axios from "axios";
import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [todo, setTodo] = useState([]);
  const [state, setState] = React.useState({
    checkedB: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  // console.log(user)
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodo(res.data);
    });
  });
  return (
    <div className="root">
      <Paper className="paper">
        <h3 className="title">Dashboard</h3>
      
      </Paper>
    </div>
  );
}
