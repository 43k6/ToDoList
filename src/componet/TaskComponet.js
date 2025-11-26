import * as React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Stack,
  useTheme,
} from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CheckIcon from "@mui/icons-material/Check";

import "../todoStyle.css";
import { useContext } from "react";
import { ToDoListContexts } from "../contexts/ToDoListContexts";
import ConfirmDeleteDialog from "./ConfirmDeleteDialog";
import EditFormDialog from "./editFormDialog";

export default function TaskItem() {
  const Task = useContext(ToDoListContexts);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openEditDialog, setOpenEditDialog] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card
        id="card"
        sx={{
          mb: 2,
          p: 1,
          minHeight: 80, // الارتفاع الافتراضي
          transition: "min-height 0.3s, box-shadow 0.3s",
          "&:hover": {
            minHeight: 100, // ارتفاع أكبر عند hover
            boxShadow: 6, // إضافة ظل أكبر
          },
        }}
      >
        <CardContent
          sx={{
            color: theme.palette.primary.contrastText,
            padding: "0",
          }}
        >
          <Stack
            direction="row-reverse"
            justifyContent="space-between"
            alignItems="center"
          >
            {/* <Checkbox checked={isDone} onChange={onToggle} /> */}
            <Stack
              // direction="row-reverse"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                sx={{
                  textDecoration: Task.isDone ? "line-through" : "none",
                }}
                variant="h6"
              >
                {Task.title}
              </Typography>
              <Typography variant="body2">{Task.description}</Typography>
            </Stack>
            <CardActions sx={{ justifyContent: "flex-end" }}>
              <IconButton
                className="iconButton"
                sx={{
                  backgroundColor: theme.palette.background.default,
                  border: `3px solid ${theme.palette.primary.main}`,
                  "&:hover": {
                    backgroundColor: theme.palette.hover.darkGray,
                  },
                }}
                onClick={() => setOpenEditDialog(true)}
              >
                <EditOutlinedIcon sx={{ color: theme.palette.primary.main }} />
              </IconButton>

              <IconButton
                sx={{
                  backgroundColor: theme.palette.background.default,
                  border: `3px solid ${theme.palette.secondary.dark}`,
                  "&:hover": {
                    backgroundColor: theme.palette.hover.darkGray,
                  },
                }}
                onClick={handleClickOpen}
              >
                <DeleteOutlinedIcon
                  sx={{ color: theme.palette.secondary.dark }}
                />
              </IconButton>
              <IconButton
                className="iconButton"
                color="primary"
                sx={{
                  backgroundColor: Task.isDone
                    ? theme.palette.success.main
                    : theme.palette.background.default,
                  border: `3px solid ${theme.palette.success.main}`,
                  "&:hover": {
                    backgroundColor: theme.palette.hover.darkGray,
                  },
                }}
                onClick={Task.onToggleTaskDone}
              >
                <CheckIcon
                  sx={{
                    color: Task.isDone
                      ? theme.palette.background.default
                      : theme.palette.success.main,
                  }}
                />
              </IconButton>
            </CardActions>
          </Stack>
        </CardContent>
      </Card>
      <ConfirmDeleteDialog
        open={open}
        onClose={handleClose}
        onConfirm={Task.onDelete}
      />
      <EditFormDialog
        open={openEditDialog}
        onClose={() => setOpenEditDialog(false)}
        onConfirm={Task.onEdit}
      />
    </>
  );
}
