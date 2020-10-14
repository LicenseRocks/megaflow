import React from "react";
import PropTypes from "prop-types";
import { useFormContext, useWatch } from "react-hook-form";
import {
  BorderedRadio,
  Checkbox,
  FilePond,
  FileUpload,
  Input,
  PriceField,
  Radio,
  ReactSelect,
  Select,
  Stepper,
  TextArea,
  ToggleSwitch,
} from "@licenserocks/kit";

const mapFieldTypeToComponent = (fieldType) => {
  switch (fieldType) {
    case "select":
      return Select;
    case "borderedRadio":
      return BorderedRadio;
    case "checkbox":
      return Checkbox;
    case "radio":
      return Radio;
    case "toggleSwitch":
      return ToggleSwitch;
    case "fileUpload":
      return FileUpload;
    case "filePond":
      return FilePond;
    case "price":
      return PriceField;
    case "reactSelect":
      return ReactSelect;
    case "stepper":
      return Stepper;
    case "textArea":
      return TextArea;
    default:
      return Input;
  }
};

const getConditionValues = (conditions, control, wizardData) => {
  const name = conditions.map((c) => {
    if (c.includes(":")) {
      const [n] = c.split(":");
      return n;
    }
    return c;
  });
  return useWatch({
    control,
    name,
    defaultValue: wizardData,
  });
};

const checkCondition = (conditions, control, wizardData) => {
  const hasConditions = conditions && conditions.length > 0;
  if (hasConditions) {
    const conditionValues = getConditionValues(conditions, control, wizardData);

    return conditions.some((c) => {
      if (c.includes(":")) {
        const [name, value] = c.split(":");
        return (
          conditionValues[name] === value ||
          conditionValues[name]?.includes(value)
        );
      }
      return conditionValues[c]?.length > 0;
    });
  }
  return true;
};

export const FormField = ({
  data,
  field,
  hasError,
  isRecurring,
  recurringIndex,
  stepIndex,
  fieldId,
  rowId,
  wizardData,
}) => {
  const { control, register } = useFormContext();
  const { conditions, defaultValue, name, required, type, ...others } = field;
  const Field = mapFieldTypeToComponent(type);
  const fieldKey = `step-${stepIndex}-row-${rowId}-field-${fieldId}`;
  const fieldName = isRecurring
    ? `${data.name}[${recurringIndex}].${name}`
    : name;

  const prevValue =
    isRecurring &&
    wizardData[data.name] &&
    wizardData[data.name][recurringIndex]
      ? wizardData[data.name][recurringIndex][name]
      : wizardData[name];

  const showIfHasCondition = checkCondition(conditions, control, wizardData);

  if (!showIfHasCondition) return null;
  return (
    <Field
      control={control}
      defaultValue={prevValue || defaultValue}
      hasError={hasError}
      isRequired={required}
      key={fieldKey}
      name={fieldName}
      register={register({
        required,
      })}
      type={type}
      {...others}
    />
  );
};

FormField.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    recurring: PropTypes.bool,
    rows: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
  field: PropTypes.shape({
    conditions: PropTypes.arrayOf(PropTypes.string),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    name: PropTypes.string,
    required: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
  fieldId: PropTypes.number.isRequired,
  hasError: PropTypes.bool.isRequired,
  isRecurring: PropTypes.bool.isRequired,
  recurringIndex: PropTypes.number,
  stepIndex: PropTypes.number.isRequired,
  wizardData: PropTypes.shape({}).isRequired,
  rowId: PropTypes.number.isRequired,
};

FormField.defaultProps = {
  recurringIndex: null,
};