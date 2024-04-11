import { Children } from "react";
import BasicTextFields from "./TextField";

export default {
  component: BasicTextFields,
  title: "Task",
  tags: ["autodocs"],
};

export const InputField= {
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",
  
    },
  },
};

