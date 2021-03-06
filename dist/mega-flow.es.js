import React, { useState, Fragment, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { TextButton, Input, TextArea, Stepper, ReactSelect, PriceField, FilePond, FileUpload, ToggleSwitch, Radio, Checkbox, BorderedRadio, Select, FormDatepicker, FormRow, Tooltip, Icon, Alert, Divider, OutlineButton, AppContainer, RocksKitIcons, RocksKitTheme, Wizard } from '@licenserocks/kit';
import { useFormContext, useFieldArray, useForm, FormProvider } from 'react-hook-form';
import PropTypes from 'prop-types';
import { faDownload, faHashtag, faTrash } from '@fortawesome/free-solid-svg-icons';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var mapFieldTypeToComponent = function mapFieldTypeToComponent(fieldType) {
  switch (fieldType) {
    case "datepicker":
      return FormDatepicker;

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

var FormField = function FormField(_ref) {
  var data = _ref.data,
      field = _ref.field,
      hasError = _ref.hasError,
      isRecurring = _ref.isRecurring,
      recurringIndex = _ref.recurringIndex,
      stepIndex = _ref.stepIndex,
      fieldId = _ref.fieldId,
      rowId = _ref.rowId,
      stepData = _ref.stepData;

  var _useFormContext = useFormContext(),
      control = _useFormContext.control,
      register = _useFormContext.register;

  var conditions = field.conditions,
      defaultValue = field.defaultValue,
      name = field.name,
      required = field.required,
      type = field.type,
      others = _objectWithoutPropertiesLoose(field, ["conditions", "defaultValue", "name", "required", "type"]);

  if (type === "link") return /*#__PURE__*/React.createElement(TextButton, others);
  var Field = mapFieldTypeToComponent(type);
  var fieldKey = "step-" + stepIndex + "-row-" + rowId + "-field-" + fieldId;
  var fieldName = isRecurring ? data.name + "[" + recurringIndex + "]." + name : name;
  var prevValue = isRecurring && stepData[data.name] && stepData[data.name][recurringIndex] ? stepData[data.name][recurringIndex][name] : stepData[name];
  return /*#__PURE__*/React.createElement(Field, _extends({
    control: control,
    defaultValue: prevValue || defaultValue,
    hasError: hasError,
    isRequired: required,
    key: fieldKey,
    name: fieldName,
    register: register({
      required: required
    }),
    type: type
  }, others));
};
FormField.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    recurring: PropTypes.bool,
    rows: PropTypes.arrayOf(PropTypes.shape({}))
  }).isRequired,
  field: PropTypes.shape({
    conditions: PropTypes.arrayOf(PropTypes.string),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    name: PropTypes.string,
    required: PropTypes.string,
    type: PropTypes.string
  }).isRequired,
  fieldId: PropTypes.number.isRequired,
  hasError: PropTypes.bool.isRequired,
  isRecurring: PropTypes.bool.isRequired,
  recurringIndex: PropTypes.number,
  stepIndex: PropTypes.number.isRequired,
  stepData: PropTypes.shape({}).isRequired,
  rowId: PropTypes.number.isRequired
};
FormField.defaultProps = {
  recurringIndex: null
};

var getConditionValues = function getConditionValues(conditions, watch, wizardData, isRecurring, recurringName) {
  var name = conditions.map(function (c) {
    if (c.includes(":")) {
      var _c$split = c.split(":"),
          n = _c$split[0];

      return n;
    }

    return c;
  });
  return watch(isRecurring ? [recurringName] : name, wizardData);
};

var checkCondition = function checkCondition(conditions, watch, wizardData, isRecurring, recurringName, recurringIndex) {
  var hasConditions = conditions && conditions.length > 0;

  if (hasConditions) {
    var _conditionValues$recu;

    var conditionValues = getConditionValues(conditions, watch, wizardData, isRecurring, recurringName);
    var target = isRecurring ? conditionValues == null ? void 0 : (_conditionValues$recu = conditionValues[recurringName]) == null ? void 0 : _conditionValues$recu[recurringIndex] : conditionValues;

    if (conditionValues && target) {
      return conditions.some(function (c) {
        var _target$c;

        if (c.includes(":")) {
          var _target$name;

          var _c$split2 = c.split(":"),
              name = _c$split2[0],
              value = _c$split2[1],
              not = _c$split2[2];

          var isTrue = target[name] === value || Array.isArray(value) && ((_target$name = target[name]) == null ? void 0 : _target$name.includes(value)) || value === "true" && Boolean(target[name]);
          if (not) return !isTrue;
          return isTrue;
        }

        return ((_target$c = target[c]) == null ? void 0 : _target$c.length) > 0 || !!target[c];
      });
    }
  }

  return true;
};

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  background: #f0f0f4;\n  border-radius: 100%;\n  width: 20px;\n  height: 20px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 8px;\n  vertical-align: middle;\n\n  svg {\n    color: #8685a6;\n    font-size: 10px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    label {\n      :only-child {\n        display: none;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var StyledRow = styled(FormRow)(_templateObject());
var Hint = styled.span(_templateObject2());
var FormRows = function FormRows(_ref) {
  var data = _ref.data,
      index = _ref.index,
      isRecurring = _ref.isRecurring,
      rows = _ref.rows,
      stepIndex = _ref.stepIndex,
      stepData = _ref.stepData;

  var _useFormContext = useFormContext(),
      errors = _useFormContext.errors,
      watch = _useFormContext.watch;

  var _useState = useState(false),
      expanded = _useState[0],
      setExpanded = _useState[1];

  var showExpandButton = rows == null ? void 0 : rows.some(function (row) {
    return row.expandable;
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, rows == null ? void 0 : rows.map(function (row, idx) {
    var _row$fields;

    var rowKey = "step-" + stepIndex + "-row-" + idx;
    var rowErrors = [];
    var rowConditions = checkCondition(row.conditions, watch, stepData, isRecurring, data.name, index);
    if (!rowConditions) return null;
    var showRow = row.expandable ? expanded : true;
    var label = [].concat(row.label || []);
    if (row.hint) label.push( /*#__PURE__*/React.createElement(Tooltip, {
      content: row.hint,
      contentProps: {
        fontStyle: "normal"
      }
    }, /*#__PURE__*/React.createElement(Hint, null, /*#__PURE__*/React.createElement(Icon, {
      icon: "question"
    }))));
    return /*#__PURE__*/React.createElement(Fragment, {
      key: rowKey
    }, /*#__PURE__*/React.createElement(StyledRow, {
      errors: rowErrors,
      label: label.length > 0 ? label : null,
      labelAlign: row.labelAlign,
      labelGutter: row.labelGutter,
      mb: row == null ? void 0 : row.marginBottom,
      show: showRow
    }, row.message && /*#__PURE__*/React.createElement(Alert, {
      color: row.messageColor,
      content: row.message,
      mb: 2
    }), (_row$fields = row.fields) == null ? void 0 : _row$fields.map(function (field, fieldId) {
      var _errors$data$name$ind, _errors$field$name;

      var error = isRecurring && errors[data.name] && errors[data.name][index] ? (_errors$data$name$ind = errors[data.name][index][field.name]) == null ? void 0 : _errors$data$name$ind.message : (_errors$field$name = errors[field.name]) == null ? void 0 : _errors$field$name.message;
      if (error) rowErrors.push(error);
      var showIfHasCondition = checkCondition(field.conditions, watch, stepData, isRecurring, data.name, index);
      if (!showIfHasCondition) return null;
      return /*#__PURE__*/React.createElement(FormField, {
        data: data,
        field: field,
        fieldId: fieldId,
        hasError: !!error,
        isRecurring: isRecurring,
        recurringIndex: index,
        rowId: idx,
        stepIndex: stepIndex,
        stepData: stepData
      });
    })), (row == null ? void 0 : row.divider) && /*#__PURE__*/React.createElement(Divider, {
      my: row == null ? void 0 : row.dividerSize
    }));
  }), showExpandButton && /*#__PURE__*/React.createElement(OutlineButton, {
    color: "secondary",
    onClick: function onClick() {
      return setExpanded(function (prev) {
        return !prev;
      });
    },
    size: "sm"
  }, expanded ? "Hide Optional Params" : "Show Optional Params"));
};
FormRows.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    recurring: PropTypes.bool,
    rows: PropTypes.arrayOf(PropTypes.shape({}))
  }).isRequired,
  stepIndex: PropTypes.number.isRequired,
  stepData: PropTypes.shape({}).isRequired,
  index: PropTypes.number.isRequired,
  isRecurring: PropTypes.bool.isRequired,
  rows: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};
FormRows.defaultProps = {};

function _templateObject2$1() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  margin-bottom: 8px;\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: ", ";\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  margin-bottom: 16px;\n\n  && {\n    ", "\n  }\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper = styled.div(_templateObject$1(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(2, 2, 2, 6);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.gray.light;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.gray.regular;
}, function (_ref4) {
  var disabled = _ref4.disabled;
  return disabled && css(["opacity:0.5;cursor:not-allowed !important;pointer-events:none;"]);
});
var ButtonsWrapper = styled.div(_templateObject2$1());

var Form = function Form(_ref5) {
  var data = _ref5.data,
      defaultValues = _ref5.defaultValues,
      stepIndex = _ref5.stepIndex,
      stepFormData = _ref5.stepFormData;
  var isRecurring = data.recurring;

  var _useFieldArray = useFieldArray({
    name: isRecurring ? data == null ? void 0 : data.name : ""
  }),
      fields = _useFieldArray.fields,
      append = _useFieldArray.append,
      remove = _useFieldArray.remove;

  var renderRows = function renderRows(index) {
    return /*#__PURE__*/React.createElement(FormRows, {
      data: data,
      index: index,
      isRecurring: isRecurring,
      rows: data.rows,
      stepIndex: stepIndex,
      stepData: stepFormData
    });
  };

  var renderRecurring = function renderRecurring() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, fields.map(function (item, idx) {
      var _defaultValues$data$n, _defaultValues$data$n2;

      var disabled = defaultValues == null ? void 0 : (_defaultValues$data$n = defaultValues[data.name]) == null ? void 0 : (_defaultValues$data$n2 = _defaultValues$data$n[idx]) == null ? void 0 : _defaultValues$data$n2.disabled;
      return /*#__PURE__*/React.createElement(Wrapper, {
        key: item.id,
        disabled: disabled
      }, /*#__PURE__*/React.createElement(ButtonsWrapper, null, disabled && /*#__PURE__*/React.createElement(Alert, {
        content: "This is a default item and can't be removed/changed.",
        mr: 2
      }), /*#__PURE__*/React.createElement(OutlineButton, {
        color: "danger",
        disabled: disabled,
        onClick: function onClick() {
          return remove(idx);
        },
        size: "sm"
      }, /*#__PURE__*/React.createElement(Icon, {
        icon: "trash",
        prefix: "fa"
      }))), renderRows(idx));
    }), /*#__PURE__*/React.createElement(TextButton, {
      content: "+ Add item",
      onClick: append,
      size: "sm"
    }));
  };

  return isRecurring ? renderRecurring() : renderRows();
};

Form.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    recurring: PropTypes.bool,
    rows: PropTypes.arrayOf(PropTypes.shape({}))
  }).isRequired,
  stepIndex: PropTypes.number.isRequired,
  stepFormData: PropTypes.shape({})
};
Form.defaultProps = {
  stepFormData: {}
};

var MegaFlowIcons = {
  faDownload: faDownload,
  faHashtag: faHashtag,
  faTrash: faTrash
};

var MegaFlowPropTypes = {
  defaultValues: PropTypes.shape({}),
  icons: PropTypes.arrayOf(PropTypes.shape()),
  schema: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  onFinish: PropTypes.func,
  onStepSubmit: PropTypes.func,
  renderActionButtons: PropTypes.func,
  theme: PropTypes.shape(),
  watcher: PropTypes.func,
  watchList: PropTypes.arrayOf(PropTypes.string),
  wizardProps: PropTypes.shape(),
  wrapperProps: PropTypes.shape()
};
var MegaFlowDefaultProps = {
  defaultValues: {},
  icons: [],
  onFinish: function onFinish() {},
  renderActionButtons: function renderActionButtons() {},
  watchList: []
};

function _templateObject$2() {
  var data = _taggedTemplateLiteralLoose([""]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper$1 = styled.div(_templateObject$2());

var getOutputData = function getOutputData(output) {
  return Object.values(output).reduce(function (obj, acc) {
    return _extends({}, obj, acc);
  }, {});
};

var MegaFlow = function MegaFlow(_ref) {
  var defaultValues = _ref.defaultValues,
      icons = _ref.icons,
      schema = _ref.schema,
      onFinish = _ref.onFinish,
      onStepSubmit = _ref.onStepSubmit,
      _renderActionButtons = _ref.renderActionButtons,
      theme = _ref.theme,
      watcher = _ref.watcher,
      wizardProps = _ref.wizardProps,
      wrapperProps = _ref.wrapperProps,
      props = _objectWithoutPropertiesLoose(_ref, ["defaultValues", "icons", "schema", "onFinish", "onStepSubmit", "renderActionButtons", "theme", "watcher", "wizardProps", "wrapperProps"]);

  // Parse if schema was type of JSON string
  var parsedSchema = typeof schema === "string" ? JSON.parse(schema) : schema;
  var steps = parsedSchema.steps;

  var _useState = useState(0),
      currentStep = _useState[0],
      setCurrentStep = _useState[1];

  var isCurrentLastStep = currentStep === steps.length - 1;

  var _useState2 = useState({}),
      wizardData = _useState2[0],
      setWizardData = _useState2[1];

  var _useForm = useForm(),
      formState = _useForm.formState,
      handleSubmit = _useForm.handleSubmit,
      methods = _objectWithoutPropertiesLoose(_useForm, ["formState", "handleSubmit"]);

  var stepFormData = wizardData[currentStep] || defaultValues;
  useEffect(function () {
    methods.reset(stepFormData);

    if (watcher) {
      watcher(getOutputData(wizardData));
    }
  }, [currentStep]);

  var onSubmit = function onSubmit(data) {
    var _extends2;

    var currentState = _extends({}, wizardData, (_extends2 = {}, _extends2[currentStep] = data, _extends2)); // Set step data in global wizard object


    setWizardData(currentState); // Send step data to props

    if (onStepSubmit) onStepSubmit(data);

    if (!isCurrentLastStep) {
      setCurrentStep(function (prev) {
        return prev + 1;
      });
    } else {
      onFinish(getOutputData(currentState));
    }
  };

  var stepsArray = steps.map(function (st) {
    return {
      title: st.title
    };
  });

  var renderForm = function renderForm() {
    return /*#__PURE__*/React.createElement(Form, {
      data: steps[currentStep],
      key: currentStep,
      stepIndex: currentStep,
      stepFormData: stepFormData,
      defaultValues: defaultValues
    });
  };

  return /*#__PURE__*/React.createElement(AppContainer, {
    icons: _extends({}, RocksKitIcons, MegaFlowIcons, icons),
    theme: theme || RocksKitTheme()
  }, /*#__PURE__*/React.createElement(Wrapper$1, wrapperProps, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/React.createElement(FormProvider, methods, /*#__PURE__*/React.createElement(Wizard, _extends({
    currentStepContent: renderForm(),
    currentStepIndex: currentStep,
    renderActionButtons: function renderActionButtons() {
      return _renderActionButtons(getOutputData(wizardData));
    },
    setCurrentStepIndex: setCurrentStep,
    steps: stepsArray
  }, wizardProps, props))))));
};

MegaFlow.propTypes = MegaFlowPropTypes;
MegaFlow.defaultProps = MegaFlowDefaultProps;

export default MegaFlow;
//# sourceMappingURL=mega-flow.es.js.map
