import React, { useState } from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  TablePagination,
  Toolbar,
  Typography,
  Tooltip,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  TableSortLabel,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { ColorContext } from "../../ColorContext/darkContext";

const initialRows = [
  {
    id: 1,
    name: "Hardware",
    Trainer: "Abhay",
    Start_Date: 3.7,
    End_Date: 67,
    status: "Ongoing",
  },
  {
    id: 2,
    name: "Linux",
    Trainer: "Aditya",
    Start_Date: 25.0,
    End_Date: 51,
    status: "Completed",
  },
  {
    id: 3,
    name: "Networking",
    Trainer: "Sashi",
    Start_Date: 16.0,
    End_Date: 24,
    status: "Ongoing",
  },
  {
    id: 1,
    name: "Hardware",
    Trainer: "Abhay",
    Start_Date: 3.7,
    End_Date: 67,
    status: "Ongoing",
  },
  {
    id: 2,
    name: "Linux",
    Trainer: "Aditya",
    Start_Date: 25.0,
    End_Date: 51,
    status: "Completed",
  },
  {
    id: 3,
    name: "Networking",
    Trainer: "Sashi",
    Start_Date: 16.0,
    End_Date: 24,
    status: "Ongoing",
  },
];

export default function EnhancedTable() {
  const [rows, setRows] = useState(initialRows);
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [open, setOpen] = useState(false);
  const [newRow, setNewRow] = useState({
    id: 0,
    name: "",
    Trainer: "",
    Start_Date: "",
    End_Date: "",
    status: "",
  });

  // Handle sorting
  const handleSort = (column) => {
    const isAsc = orderBy === column && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(column);

    const sortedRows = [...rows].sort((a, b) => {
      if (a[column] < b[column]) return isAsc ? -1 : 1;
      if (a[column] > b[column]) return isAsc ? 1 : -1;
      return 0;
    });

    setRows(sortedRows);
  };

  // Open dialog
  const handleOpenDialog = () => {
    setNewRow({
      id: rows.length + 1,
      name: "",
      Trainer: "",
      Start_Date: "",
      End_Date: "",
      status: "",
    });
    setOpen(true);
  };

  // Close dialog
  const handleCloseDialog = () => {
    setOpen(false);
  };

  // Add new row
  const handleAddRow = () => {
    setRows([...rows, { ...newRow, id: rows.length + 1 }]);
    setOpen(false);
  };

  // Handle input change
  const handleInputChange = (e) => {
    setNewRow({ ...newRow, [e.target.name]: e.target.value });
  };

  // Delete selected rows
  const handleDeleteRows = () => {
    const updatedRows = rows.filter((row) => !selected.includes(row.id));
    setRows(updatedRows);
    setSelected([]);
    if (page > 0 && updatedRows.length <= page * rowsPerPage) {
      setPage(page - 1);
    }
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        {/* Toolbar */}
        <Toolbar>
          <Typography sx={{ flex: "1 1 100%" }} variant="h6">
            Schedule
          </Typography>
          <Tooltip title="Add Row">
            <IconButton onClick={handleOpenDialog}>
              <AddIcon />
            </IconButton>
          </Tooltip>
          {selected.length > 0 && (
            <Tooltip title="Delete">
              <IconButton onClick={handleDeleteRows}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          )}
        </Toolbar>

        {/* Table */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    indeterminate={
                      selected.length > 0 && selected.length < rows.length
                    }
                    checked={rows.length > 0 && selected.length === rows.length}
                    onChange={(e) =>
                      setSelected(e.target.checked ? rows.map((r) => r.id) : [])
                    }
                  />
                </TableCell>
                {/* Sortable Headers */}
                {["name", "Trainer", "Start_Date", "End_Date", "status"].map(
                  (column) => (
                    <TableCell key={column} align="right">
                      <TableSortLabel
                        active={orderBy === column}
                        direction={orderBy === column ? order : "asc"}
                        onClick={() => handleSort(column)}
                      >
                        {column.replace("_", " ")}
                      </TableSortLabel>
                    </TableCell>
                  ),
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.id}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selected.includes(row.id)}
                        onChange={() =>
                          setSelected((prev) =>
                            prev.includes(row.id)
                              ? prev.filter((id) => id !== row.id)
                              : [...prev, row.id],
                          )
                        }
                      />
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.Trainer}</TableCell>
                    <TableCell align="right">{row.Start_Date}</TableCell>
                    <TableCell align="right">{row.End_Date}</TableCell>
                    <TableCell align="right">{row.status}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <TablePagination
          rowsPerPageOptions={[5, 10]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(_, newPage) => setPage(newPage)}
          onRowsPerPageChange={(e) =>
            setRowsPerPage(parseInt(e.target.value, 10))
          }
        />
      </Paper>

      {/* Add Row Dialog */}
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>Add New Row</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="dense"
            label="Name"
            name="name"
            value={newRow.name}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Trainer"
            name="Trainer"
            value={newRow.Trainer}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Start Date"
            name="Start_Date"
            type="number"
            value={newRow.Start_Date}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            margin="dense"
            label="End Date"
            name="End_Date"
            type="number"
            value={newRow.End_Date}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Status"
            name="status"
            value={newRow.status}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAddRow} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
