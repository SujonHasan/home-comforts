import * as yup from "yup";
const phoneRegExp = /(^([+]{1}[8]{2}|0088)?(01){1}[3-9]{1}\d{8})$/;
const emailValidation = yup.string().email().required("Email is required");
const phoneValidation = yup
  .string()
  .required("Phone number is required")
  .max(11)
  .min(11)
  .matches(phoneRegExp, "Phone number is not valid");
const firstName = yup.string().required("First Name is  required");
const lastName = yup.string().required("Last Name is  required");
const company = yup.string().required("Company is required");
const city = yup.string().required("city is required");
const region = yup.string().required("region is required");
const address = yup.string().required("address is required");

export const checkout = yup.object().shape({
  first_name: firstName,
  last_name: lastName,
  company: company,
  region: region,
  address: address,
  city: city,
  phone: phoneValidation,
  email: emailValidation,
});
