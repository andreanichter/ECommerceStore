import * as yup from "yup";

export const validationSchema = [
  yup.object({
    fullName: yup.string().required("Full name is required"),

    address1: yup.string().required("Address is required"),
    address2: yup.string().required("Address is required"),
    city: yup.string().required("City name is required"),
    state: yup.string().required("State name is required"),
    zip: yup.string().required("Postal code is required"),
    country: yup.string().required("Country name is required"),
  }),
  yup.object(),
  yup.object({
    nameOnCard: yup.string().required("Name on card is required"),
  }),
];
