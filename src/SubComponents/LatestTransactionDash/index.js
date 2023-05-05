import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {LatestTransactionData} from "../../Assets/Data"
import { WrapperTabItemCell,StatusCustom, TabItemCell,TabTitleCell,ImageCustomer,ContainerTable,ButtonMore } from './Style';



export default function LatestTransactionDash() {
  return (
    <>
    <ContainerTable component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TabTitleCell >Tracking ID</TabTitleCell>
            <TabTitleCell >Product</TabTitleCell>
            <TabTitleCell >Customer</TabTitleCell>
            <TabTitleCell >Date</TabTitleCell>
            <TabTitleCell >Amount</TabTitleCell>
            <TabTitleCell >Payment Method</TabTitleCell>
            <TabTitleCell >Status</TabTitleCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {LatestTransactionData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
         
              <TabItemCell >{row.id}</TabItemCell>
              <TabItemCell >{row.product}</TabItemCell>
              <TabItemCell ><WrapperTabItemCell>
              <ImageCustomer src={row.img} alt="coverpic"  />{row.customer}
                </WrapperTabItemCell></TabItemCell>
              <TabItemCell >{row.date}</TabItemCell>
              <TabItemCell >${row.amount}</TabItemCell>
              <TabItemCell >{row.method}</TabItemCell>
              <TabItemCell ><StatusCustom value={row.status}>{row.status}</StatusCustom></TabItemCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ContainerTable>
    <ButtonMore>Show All</ButtonMore>
    </>
  );
}