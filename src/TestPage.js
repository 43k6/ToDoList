// import * as React from "react";
// import {
//   Button,
//   TextField,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   Stack,
// } from "@mui/material";

// export default function FormDialog() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.currentTarget);
//     const formJson = Object.fromEntries(formData.entries());
//     const email = formJson.email;
//     console.log(email);
//     handleClose();
//   };

//   return (
//     <React.Fragment>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Open form dialog
//       </Button>
//       <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
//         <DialogTitle>تعديل مهمة</DialogTitle>
//         <DialogContent>
//           <form onSubmit={handleSubmit} id="subscription-form">
//             {/* <TextField
//               autoFocus
//               required
//               margin="dense"
//               id="name"
//               name="email"
//               label="Email Address"
//               type="email"
//               fullWidth
//               variant="standard"
//             /> */}
//             <Stack direction={"column"} spacing={2}>
//               <TextField
//                 id="task-Title"
//                 label="عنوان المهمه"
//                 variant="standard"
//                 margin="dense"
//               />
//               <TextField
//                 id="task-Descrption"
//                 label="التفاصيل"
//                 variant="standard"
//                 fullWidth
//               />
//             </Stack>
//           </form>
//         </DialogContent>
//         <DialogActions sx={{ justifyContent: "flex-start" }}>
//           <Button onClick={handleClose}>اغلاق</Button>
//           <Button type="submit" form="subscription-form">
//             تأكيد
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// }
