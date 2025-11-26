import * as React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
} from "@mui/material";
import { useContext } from "react";
import { ToDoListContexts } from "../contexts/ToDoListContexts";
import { useState } from "react";

export default function EditFormDialog({ open, onConfirm, onClose }) {
  const Task = useContext(ToDoListContexts);

  const [taskInputs, setTaskInputs] = useState({
    Title: "",
    Descrption: "",
  });

  // تحديث القيم عند فتح الدialog
  React.useEffect(() => {
    if (open) {
      setTaskInputs({
        Title: Task.title,
        Descrption: Task.description,
      });
    }
  }, [open, Task]);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>تعديل مهمة</DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          <TextField
            label="عنوان المهمة"
            variant="standard"
            value={taskInputs.Title}
            onChange={(e) =>
              setTaskInputs({ ...taskInputs, Title: e.target.value })
            }
          />

          <TextField
            label="التفاصيل"
            variant="standard"
            value={taskInputs.Descrption}
            onChange={(e) =>
              setTaskInputs({ ...taskInputs, Descrption: e.target.value })
            }
          />
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button color="secondary" onClick={onClose}>
          اغلاق
        </Button>

        <Button
          color="secondary"
          onClick={() => {
            onConfirm({
              newTitle: taskInputs.Title,
              newDescription: taskInputs.Descrption,
            });
            onClose();
          }}
        >
          تأكيد
        </Button>
      </DialogActions>
    </Dialog>
  );
}
