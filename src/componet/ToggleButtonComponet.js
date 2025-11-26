import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ToggleButtonComponet({ onChange }) {
  const [alignment, setAlignment] = React.useState("all");

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
    if (onChange) {
      onChange(newAlignment); // نرسل الحالة للأب
    }
  };

  function ToggleButtonWithText({ text, value }) {
    return (
      <ToggleButton
        className="ToggleButton"
        sx={{
          fontSize: "20px",
          fontWidth: "bold",
          fontFamily: "Alexandria",
          padding: "8px",
        }}
        value={value}
      >
        {text}
      </ToggleButton>
    );
  }
  return (
    <ToggleButtonGroup
      color="secondary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      size="large"
    >
      <ToggleButtonWithText value="unAchieved" text="غير المنجز " />
      <ToggleButtonWithText value="Achieved" text="المنجز " />
      <ToggleButtonWithText value="all" text="الكل" />
    </ToggleButtonGroup>
  );
}
