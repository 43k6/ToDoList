import * as React from "react";
import { Container, Stack, Box, TextField, Button } from "@mui/material";
import "../todoStyle.css";
import ToggleButtonComponet from "./ToggleButtonComponet";
import TaskItem from "./TaskComponet";
import { ToDoListContexts } from "../contexts/ToDoListContexts";

import { useState, useEffect } from "react";
export default function ToDoList() {
  const [filter, setFilter] = React.useState("all");
  const [TaskInput, setTaskInput] = React.useState("");
  const handleFilterChange = (newFilter) => {
    console.log("Selected filter:", newFilter);

    if (newFilter !== null) {
      setFilter(newFilter);
    }
  };

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title, description = "") => {
    const newTask = {
      id: Date.now(), // معرف فريد
      title,
      description,
      isDone: false,
    };
    setTasks([...tasks, newTask]);
    setTaskInput("");
  };
  const toggleTaskDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const EditTask = (id, Title, Descrption) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, title: Title, description: Descrption }
          : task
      )
    );
  };
  // فلترة المهام حسب القيمة
  const filteredTasks = tasks.filter((t) => {
    if (filter === "all") return true;
    if (filter === "Achieved") return t.isDone;
    if (filter === "unAchieved") return !t.isDone;
    return false;
  });

  // عمل map مرة واحدة فقط
  const TasksList = filteredTasks.map((t) => (
    <ToDoListContexts.Provider
      key={t.id}
      value={{
        title: t.title,
        description: t.description,
        isDone: t.isDone,
        onToggleTaskDone: () => toggleTaskDone(t.id),
        onDelete: () => deleteTask(t.id),
        onEdit: ({ newTitle, newDescription }) =>
          EditTask(t.id, newTitle, newDescription),
      }}
    >
      <TaskItem />
    </ToDoListContexts.Provider>
  ));

  return (
    <Container
      maxWidth="sm"
      style={{
        backgroundColor: "background",
        color: " rgba(0, 0, 0, 0.87)",
        minWidth: "275px",
        padding: "0",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          height: 500, // ارتفاع الحاوية الثابت
          overflowY: "auto", // scroll عمودي عند الحاجة
          p: 2,
          border: "1px solid gray",
          borderRadius: 2,
          bgcolor: "background.paper",
        }}
      >
        <Stack
          spacing={4}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 id="Title">مهامي</h1>

          <ToggleButtonComponet onChange={handleFilterChange} />
          {TasksList}

          <Stack
            width="90%"
            direction="row-reverse"
            alignItems="center"
            spacing={2}
            height="70px" // اختياري بس يخلي بينهم مسافة
          >
            <TextField
              value={TaskInput}
              onChange={(event) => {
                setTaskInput(event.target.value);
              }}
              id="outlined-basic"
              label="عنوان المهمة"
              variant="outlined"
              size="medium"
              color="secondary"
              sx={{ flex: 8, height: "85%" }}
              InputProps={{
                sx: { height: "100%" }, // حتى داخل التكست يكون مضبوط
              }} // يعني 70%
            />

            <Button
              disabled={TaskInput === "" ? true : false}
              size="large"
              variant="contained"
              color="secondary"
              sx={{
                flex: 2,
                height: "85%",
              }} // يعني 30%
              onClick={() => addTask(TaskInput)}
            >
              اضافة
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
