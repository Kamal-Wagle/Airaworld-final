import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Card,
  CardContent,
  Snackbar,
  Alert,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SEO from "../../compoment/common/SEO";

const GetinTouch = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const GetinTouchValidationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    // ... existing submit logic
    const templateParams = {
      to_name: "Airaworld Team",
      from_name: values.name,
      message: values.message,
      email: values.email,
      phone: values.phone,
      subject: values.subject,
    };

    emailjs
      .send(
        "service_k0zu5kp",
        "template_xfqwf9o",
        templateParams,
        "-OdYjKIqveZZLIl8T"
      )
      .then((response) => {
        setSnackbarMessage("Message sent successfully!");
        setSnackbarSeverity("success");
        setOpenSnackbar(true);
        resetForm();
      })
      .catch((error) => {
        setSnackbarMessage("Failed to send message. Please try again.");
        setSnackbarSeverity("error");
        setOpenSnackbar(true);
        console.error("Email error:", error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const contactInfo = [
    { icon: <EmailIcon color="primary" />, title: "Email", content: "airaworld1982@gmail.com" },
    { icon: <PhoneIcon color="primary" />, title: "Phone", content: "9847834439" }, // Placeholder phone, verify if available
    { icon: <LocationOnIcon color="primary" />, title: "Address", content: "Mahalaxmi-02, Lalitpur, Nepal" },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <SEO
        title="Contact Us"
        description="Get in touch with Axon Infotech Research Academy (AIRA) for collaborations, research inquiries, or general questions."
        keywords="Contact AIRA, Research Collaboration, Health Informatics Nepal, Public Health Inquiries"
      />
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" align="center" gutterBottom fontWeight="bold">
            Get in Touch
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}>
            Have questions or want to collaborate? We'd love to hear from you. Fill out the form below or reach us directly.
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{ p: 4, bgcolor: 'primary.main', color: 'white', borderRadius: 4, height: '100%' }}>
                <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ mb: 4 }}>
                  Contact Information
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {contactInfo.map((info, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ p: 1.5, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}>
                        {React.cloneElement(info.icon, { style: { color: 'white' } })}
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
                          {info.title}
                        </Typography>
                        <Typography variant="body1" fontWeight="medium">
                          {info.content}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card sx={{ p: 3, borderRadius: 4, boxShadow: 3 }}>
                <CardContent>
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
                      <Form>
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              fullWidth
                              id="name"
                              name="name"
                              label="Your Name"
                              value={formik.values.name}
                              onChange={formik.handleChange}
                              error={formik.touched.name && Boolean(formik.errors.name)}
                              helperText={formik.touched.name && formik.errors.name}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              fullWidth
                              id="email"
                              name="email"
                              label="Email Address"
                              value={formik.values.email}
                              onChange={formik.handleChange}
                              error={formik.touched.email && Boolean(formik.errors.email)}
                              helperText={formik.touched.email && formik.errors.email}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              fullWidth
                              id="phone"
                              name="phone"
                              label="Phone Number"
                              value={formik.values.phone}
                              onChange={formik.handleChange}
                              error={formik.touched.phone && Boolean(formik.errors.phone)}
                              helperText={formik.touched.phone && formik.errors.phone}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              fullWidth
                              id="subject"
                              name="subject"
                              label="Subject"
                              value={formik.values.subject}
                              onChange={formik.handleChange}
                              error={formik.touched.subject && Boolean(formik.errors.subject)}
                              helperText={formik.touched.subject && formik.errors.subject}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              id="message"
                              name="message"
                              label="Your Message"
                              multiline
                              rows={4}
                              value={formik.values.message}
                              onChange={formik.handleChange}
                              error={formik.touched.message && Boolean(formik.errors.message)}
                              helperText={formik.touched.message && formik.errors.message}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <Button
                              color="secondary"
                              variant="contained"
                              fullWidth
                              type="submit"
                              disabled={formik.isSubmitting}
                              size="large"
                              endIcon={<SendIcon />}
                              sx={{ py: 1.5, fontWeight: 'bold' }}
                            >
                              {formik.isSubmitting ? "Sending..." : "Send Message"}
                            </Button>
                          </Grid>
                        </Grid>
                      </Form>
                    )}
                  </Formik>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default GetinTouch;
