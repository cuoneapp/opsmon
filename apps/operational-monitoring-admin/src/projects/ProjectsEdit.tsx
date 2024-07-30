import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ProjectsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="EndDate" source="endDate" />
        <TextInput label="Name" source="name" />
        <DateTimeInput label="StartDate" source="startDate" />
      </SimpleForm>
    </Edit>
  );
};
