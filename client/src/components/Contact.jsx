import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Snackbar, Alert, Stack } from '@mui/material';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [snackbar, setSnackbar] = useState({ open: false, success: true, message: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSnackbar({ open: true, success: true, message: 'Message sent!' });
        setForm({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch {
      setSnackbar({ open: true, success: false, message: 'Failed to send message.' });
    }
  };

  return (
    <Box id="contact" sx={{ py: 8, px: 2, maxWidth: 500, mx: 'auto' }}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Contact Me
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            fullWidth
            multiline
            rows={4}
          />
          <Button type="submit" variant="contained" color="primary">
            Send
          </Button>
        </Stack>
      </form>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.success ? 'success' : 'error'}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}