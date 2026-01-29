import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com"; // Import EmailJS library

const GetinTouch = () => {
  // Define validation schema using Yup
  const GetinTouchValidationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string(),
    phone: Yup.string().required("phone is required"),
    subject: Yup.string().required("subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    // Prepare the template parameters to be sent via EmailJS
    const templateParams = {
      to_name: "Recipient Name", // Replace with the recipient's name if available
      from_name: values.name,
      message: values.message,
      email: values.email,
      phone: values.phone || "", // Ensure phone is not undefined
      subject: values.subject || "", // Ensure subject is not undefined
    };

    // Send email using EmailJS
    emailjs
      .send(
        "service_k0zu5kp",
        "template_xfqwf9o",
        templateParams,
        "-OdYjKIqveZZLIl8T"
      )

      .then((response) => {
        console.log("Email successfully sent!", response.status, response.text);
        // Handle success, e.g., show a success message to the user
        // Reset the form after submission
        resetForm();
      })
      .catch((error) => {
        console.error("Email could not be sent:", error);
        // Handle error, e.g., show an error message to the user
      })
      .finally(() => {
        setSubmitting(false); // Ensure submitting state is reset
      });
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", padding: "40px" }}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        }}
        validationSchema={GetinTouchValidationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              width: "400px",
              padding: "1rem",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <Typography
              variant="h4"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              Get in Touch
            </Typography>
            <FormControl>
              <TextField
                sx={{ background: "white", color: "black" }}
                label="Your Name"
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name && (
                <FormHelperText error>{formik.errors.name}</FormHelperText>
              )}
            </FormControl>

            <FormControl>
              <TextField
                sx={{ background: "white", color: "black" }}
                label="Email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <FormHelperText error>{formik.errors.email}</FormHelperText>
              )}
            </FormControl>

            <FormControl>
              <TextField
                sx={{ background: "white", color: "black" }}
                label="Phone Number"
                {...formik.getFieldProps("phone")}
              />
              {formik.touched.phone && formik.errors.phone && (
                <FormHelperText error>{formik.errors.phone}</FormHelperText>
              )}
            </FormControl>

            <FormControl>
              <TextField
                sx={{ background: "white", color: "black" }}
                label="Subject"
                {...formik.getFieldProps("subject")}
              />
              {formik.touched.subject && formik.errors.subject && (
                <FormHelperText error>{formik.errors.subject}</FormHelperText>
              )}
            </FormControl>

            <FormControl>
              <TextField
                multiline
                rows={4}
                label="Your Message"
                {...formik.getFieldProps("message")}
                sx={{ background: "white", color: "black" }}
              />
              {formik.touched.message && formik.errors.message && (
                <FormHelperText error>{formik.errors.message}</FormHelperText>
              )}
            </FormControl>

            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default GetinTouch;
