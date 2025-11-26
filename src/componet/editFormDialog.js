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

// export default function EditFormDialog({
//   open,
//   Title,
//   Descrption,
//   onConfirm,
//   onClose,
// }) {
//   const Task = useContext(ToDoListContexts);
//   const [taskInputs, setTaskInputs] = useState({
//     Title: Task.title,
//     Descrption: Task.description,
//   });
//   return (
//     <React.Fragment>
//       <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
//         <DialogTitle>تعديل مهمة</DialogTitle>
//         <DialogContent>
//           <form>
//             <Stack direction={"column"} spacing={2}>
//               <TextField
//                 label="عنوان المهمه"
//                 variant="standard"
//                 margin="dense"
//                 value={taskInputs.Title}
//                 onChange={(event) =>
//                   setTaskInputs({ ...taskInputs, Title: event.target.value })
//                 }
//               />
//               <TextField
//                 label="التفاصيل"
//                 variant="standard"
//                 value={taskInputs.Descrption}
//                 onChange={(event) =>
//                   setTaskInputs({
//                     ...taskInputs,
//                     Descrption: event.target.value,
//                   })
//                 }
//               />
//             </Stack>
//           </form>
//         </DialogContent>
//         <DialogActions sx={{ justifyContent: "flex-start" }}>
//           <Button onClick={onClose}>اغلاق</Button>
//           <Button
//             onClick={() => {
//               Task.title = taskInputs.Title;
//               Task.description = taskInputs.Descrption;
//               onClose();
//             }}
//           >
//             تأكيد
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// }

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
