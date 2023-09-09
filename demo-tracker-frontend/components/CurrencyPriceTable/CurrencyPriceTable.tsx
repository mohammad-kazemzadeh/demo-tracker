import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { CurrencyPrice } from "../../types";
import { formatRelativeTime } from "../../utils/relativeTimeFormatter";

type Props = {
  currencyPrices: CurrencyPrice[];
};

const CurrencyPriceTable: React.FC<Props> = ({ currencyPrices }) => {
  return (
    <TableContainer component={Paper} dir="rtl" sx={{ maxHeight: 380 }}>
      <Table aria-label="Currency Price Table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              sx={{
                width: "5%",
              }}
            >
              شناسه
            </TableCell>
            <TableCell
              align="center"
              sx={{
                width: "10%",
              }}
            >
              نام ارز
            </TableCell>
            <TableCell
              align="center"
              sx={{
                width: "20%",
              }}
            >
              قیمت
            </TableCell>
            <TableCell
              align="center"
              sx={{
                width: "30%",
              }}
            >
              تاریخ تراکنش
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currencyPrices.map(item => (
            <TableRow key={item.id}>
              <TableCell align="center" component="th" scope="row">
                {item.id}
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                {item.currency}
              </TableCell>
              <TableCell align="center">{item.price}</TableCell>
              <TableCell align="center">
                {" "}
                {formatRelativeTime(new Date(item.createdAt).getTime())}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CurrencyPriceTable;
