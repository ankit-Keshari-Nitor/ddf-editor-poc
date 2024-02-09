import Editor from "@data-driven-forms/editor-pro/editor"
import { componentMapper } from "@data-driven-forms/mui-component-mapper"
import FormTemplate from "@data-driven-forms/mui-component-mapper/form-template"
import validatorTypes from "@data-driven-forms/react-form-renderer/validator-types"
import { Schema, componentTypes } from "@data-driven-forms/react-form-renderer"

import propertiesFields from "./properties-fields"

const initialSchema: Schema = {
  fields: [
    {
      component: componentTypes.TEXT_FIELD,
      name: "name",
      label: "Your name",
      isRequired: true,
      validate: [{ type: validatorTypes.REQUIRED }],
    },
    {
      component: componentTypes.TEXT_FIELD,
      name: "email",
      label: "Email",
      isRequired: true,
      validate: [
        { type: validatorTypes.REQUIRED },
        {
          type: validatorTypes.PATTERN,
          pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
          message: "Not valid email",
        },
      ],
    },
    {
      component: componentTypes.TEXT_FIELD,
      name: "confirm-email",
      label: "Confirm email",
      type: "email",
      isRequired: true,
    },
    {
      component: componentTypes.CHECKBOX,
      name: "newsletters",
      label: "I want to receive newsletter",
    },
    {
      component: componentTypes.SUB_FORM,
      name: "subform1",
      title: "Additional info",
      fields: [
        {
          component: componentTypes.TEXTAREA,
          name: "address",
          label: "Your address",
        },
      ],
    },
  ],
}

const fields = propertiesFields({ componentMapper })

function App() {
  return (
    <Editor
      initialSchema={initialSchema}
      fields={fields}
      componentMapper={componentMapper}
      FormTemplate={FormTemplate}
    />
  )
}

export default App
