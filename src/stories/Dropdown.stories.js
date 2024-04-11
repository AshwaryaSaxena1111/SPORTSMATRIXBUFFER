import { Children } from "react";
import DropDown from "./Dropdown";

export default {
  component: DropDown,
  title: "Task",
  tags: ["autodocs"],
};

export const Dropdown = {
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",
    },
  },
};
