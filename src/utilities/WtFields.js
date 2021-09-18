import React from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  FormControl,
  Select,
  FormHelperText,
  RadioGroup,
  Switch,
  InputLabel,
  withStyles,
} from "@material-ui/core";
import WarningIcon from "@material-ui/icons/Warning";

const max_fields_Values = {
  mailingAddress: 250,
  specialNotes: 250,
  communityDescription: 50,
  groupDescription: 50,
  instructions: 100,
};

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#4C73FF",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#666666",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(102, 102, 102, 0.3)",
        borderRadius: "8px",
        boxSizing: "border-box",
      },
      "&:hover fieldset": {
        borderColor: "#666666",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#4C73FF",
      },
    },
  },
})(TextField);

export const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <CssTextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
    margin="dense"
    fullWidth
    variant="outlined"
  />
);

export const renderRadioButton = ({
  input,
  meta: { touched, error },
  children,
  ...rest
}) => (
  <FormControl error={hasErrorMessage({ touched, error })}>
    {displayErrorMessage({ touched, error })}
    <RadioGroup {...input} {...rest} onChange={input.onChange}>
      {children}
    </RadioGroup>
  </FormControl>
);

export const renderCheckbox = ({ input, label, value, onChange, id }) => (
  <div>
    <FormControlLabel
      control={
        <Checkbox
          // checked={input?.value ? true : false}
          onChange={onChange}
          value={value}
          id={id}
          color="primary"
        />
      }
      label={label}
    />
  </div>
);

export const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl error={hasErrorMessage({ touched, error })} variant="outlined">
    <Select
      margin="dense"
      native
      {...input}
      {...custom}
      inputProps={{ name: input.name, id: "dep" }}
      defaultValue=""
    >
      {children}
    </Select>
    {displayErrorMessage({ touched, error })}
  </FormControl>
);

export const CustomCheckBoxComponent = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  ...props
}) => (
  <div>
    <Checkbox
      {...field}
      {...props}
      inputProps={{ "aria-label": "primary checkbox" }}
    />
    {touched[field.name] && errors[field.name] && (
      <div className="error">{errors[field.name]}</div>
    )}
  </div>
);
// /**********************************************

//  FORMIK Fields
//  ***********************************************/

export const renderTextFieldEdit = ({
  field,
  form: { touched, errors },
  ...props
}) => (
  <CssTextField
    InputProps={{
      style: {
        color: "#2B2B2B",
        backgroundColor: "#fff",
      },
    }}
    InputLabelProps={{
      style: {
        color: "#666666",
      },
    }}
    label={field.label}
    placeholder={field.label}
    error={hasEditErrorMessage(touched, errors, field)}
    id={field.id}
    {...field}
    {...props}
    margin={
      field.margin !== null && field.margin !== undefined
        ? field.margin
        : "dense"
    }
    fullWidth={true}
    variant="outlined"
    helperText={displayErrorMessageEdit(touched, errors, field)}
  />
);

export const renderTextFieldSelect = ({
  field,
  form: { touched, errors },
  children,
  ...props
}) => (
  <TextField
    select
    label={field.label}
    placeholder={field.label}
    required={field.required}
    error={hasEditErrorMessage(touched, errors, field)}
    id={field.id}
    {...field}
    {...props}
    margin={
      field.margin !== null && field.margin !== undefined
        ? field.margin
        : "dense"
    }
    fullWidth={true}
    variant="outlined"
    helperText={displayErrorMessageEdit(touched, errors, field)}
    defaultValue=""
  >
    {children}
  </TextField>
);

export const renderTextArea = ({
  field,
  form: { touched, errors },
  ...props
}) => (
  <CssTextField
    InputProps={{
      style: {
        color: "#fff",
        backgroundColor: "#141d2b",
      },
    }}
    InputLabelProps={{
      style: {
        color: "#fff",
        fontSize: "12px",
      },
    }}
    label={field.label}
    placeholder={field.label}
    error={hasEditErrorMessage(touched, errors, field)}
    id={field.id}
    {...field}
    {...props}
    fullWidth={true}
    variant="outlined"
    multiline={true}
    rows={4}
    helperText={displayErrorMessageEdit(touched, errors, field)}
    inputProps={{ maxLength: max_fields_Values[field.name] }}
  />
);

export const renderDatePicker = ({
  field,
  form: { touched, errors },
  ...props
}) => (
  <TextField
    label={field.label}
    placeholder={field.label}
    error={hasEditErrorMessage(touched, errors, field)}
    id={field.id}
    {...field}
    {...props}
    margin={
      field.margin !== null && field.margin !== undefined
        ? field.margin
        : "dense"
    }
    fullWidth={true}
    InputLabelProps={{
      shrink: true,
    }}
    type="date"
    format="mm/dd/yyyy"
    variant="outlined"
    helperText={displayErrorMessageEdit(touched, errors, field)}
  />
);

export const renderTimePicker = ({
  field,
  form: { touched, errors },
  ...props
}) => (
  <TextField
    label={field.label}
    placeholder={field.label}
    error={hasEditErrorMessage(touched, errors, field)}
    id={field.id}
    {...field}
    {...props}
    fullWidth={false}
    variant="outlined"
    type="time"
    InputLabelProps={{
      shrink: true,
    }}
    inputProps={{
      step: 300, // 5 min
    }}
    helperText={displayErrorMessageEdit(touched, errors, field)}
  />
);

export const renderPasswordField = ({
  field,
  form: { touched, errors },
  ...props
}) => (
  <TextField
    label={field.label}
    placeholder={field.label}
    error={hasEditErrorMessage(touched, errors, field)}
    id={field.id}
    {...field}
    {...props}
    margin={
      field.margin !== null && field.margin !== undefined
        ? field.margin
        : "dense"
    }
    fullWidth={true}
    variant="outlined"
    type="password"
    helperText={displayErrorMessageEdit(touched, errors, field)}
  />
);

export const renderRadioButtonEdit = ({
  field,
  form: { touched, errors },
  children,
  ...props
}) => (
  <FormControl error={hasEditErrorMessage(touched, errors, field)}>
    <RadioGroup {...field} {...props} onChange={field.onChange}>
      {children}
    </RadioGroup>
    {displayErrorMessageEdit(touched, errors, field)}
  </FormControl>
);

export const renderSelectFieldEdit = ({
  field,
  form: { touched, errors },
  children,
  placeholder,
  ...props
}) => (
  <FormControl
    error={hasEditErrorMessage(touched, errors, field)}
    variant="outlined"
    fullWidth={true}
    InputProps={{
      style: {
        color: "#2B2B2B",
        backgroundColor: "#fff",
      },
    }}
    InputLabelProps={{
      style: {
        color: "#666666",
      },
    }}
  >
    <InputLabel htmlFor="outlined-age-native-simple">
      {props.label && props.label}
    </InputLabel>

    <Select
      native
      {...field}
      {...props}
      inputProps={{ name: field.name, id: field.name }}
      defaultValue=""
    >
      {children}
    </Select>
    {displayErrorMessageEdit(touched, errors, field)}
  </FormControl>
);

export const renderSelectFieldClassic = ({
  field,
  form: { touched, errors },
  children,
  ...props
}) => (
  <FormControl
    error={hasEditErrorMessage(touched, errors, field)}
    variant={field.variant}
    fullWidth={field.fullwidth}
    size={field.size}
  >
    <Select
      margin={field.margin}
      native={true}
      {...field}
      {...props}
      inputProps={{ name: field.name, id: field.name }}
      defaultValue=""
    >
      {children}
    </Select>
    {displayErrorMessageEdit(touched, errors, field)}
  </FormControl>
);

export const renderCheckboxEdit = ({
  field,
  form: { touched, errors },
  ...props
}) => (
  <div>
    <FormControlLabel
      className={props.className}
      control={
        <Checkbox
          checked={field.value ? true : false}
          onChange={field.onChange}
          color="primary"
          name={field.name}
          id={field.name}
        />
      }
      label={props.label}
    />
  </div>
);

export const renderSwitch = ({
  field,
  form: { touched, errors },
  ...props
}) => (
  <div>
    <FormControlLabel
      className={props.className}
      control={
        <Switch
          checked={field.value ? true : false}
          onChange={field.onChange}
          color="primary"
          name={field.name}
          id={field.name}
        />
      }
      label={props.label}
    />
  </div>
);

const hasEditErrorMessage = (touched, errors, field) => {
  let theField = field.name;
  if (errors.hasOwnProperty(theField) && touched.hasOwnProperty(theField)) {
    return true;
  }
  return false;
};

const displayErrorMessageEdit = (touched, errors, field) => {
  let theField = field.name;
  if (errors.hasOwnProperty(theField) && touched.hasOwnProperty(theField)) {
    const msg = Object.getOwnPropertyDescriptor(errors, theField);
    return (
      <span style={{ color: "red", display: "flex", marginTop: "2px" }}>
        {" "}
        <WarningIcon fontSize="small" />
        {msg.value}
      </span>
    );
  } else {
    return null;
  }
};

const hasErrorMessage = ({ touched, error }) => {
  if (!(touched && error)) {
    return false;
  } else {
    return true;
  }
};

const displayErrorMessage = ({ touched, error }) => {
  if (!(touched && error)) {
    return;
  } else {
    return (
      <FormHelperText>
        {" "}
        <WarningIcon fontSize="small" /> {touched && error}
      </FormHelperText>
    );
  }
};
