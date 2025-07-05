import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
// import { Document, Page } from 'react-pdf'; // Optional

export default function Resume() {
  return (
    <Box id="resume" sx={{ py: 8, px: 2, textAlign: 'center' }}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Resume
      </Typography>
      <Stack direction="row" justifyContent="center" spacing={2} mb={4}>
        <Button
          variant="contained"
          color="primary"
          href="/assets/resume.pdf"
          target="_blank"
          rel="noopener"
        >
          Download Resume
        </Button>
      </Stack>
      {/* Optional PDF Embed
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Document file="/assets/resume.pdf">
          <Page pageNumber={1} />
        </Document>
      </Box>
      */}
    </Box>
  );
}