import React from "react";
import Typography from "@mui/material/Typography";
import { TableView } from "@mui/icons-material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];



const MainContent: React.FC = () => {
  return (
    <Typography paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
      dolor purus non enim praesent elementum facilisis leo vel. Risus at
      ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
      quisque non tellus. Convallis convallis tellus id interdum velit
      laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
      adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
      integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
      eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
      quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
      vivamus at augue. At augue eget arcu dictum varius duis at consectetur
      lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
      faucibus et molestie ac.
    </Typography>
    

  );
};

export default MainContent;