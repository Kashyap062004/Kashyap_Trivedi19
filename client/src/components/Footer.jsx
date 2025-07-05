import React from 'react';
import { Box, Typography, IconButton, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <Box sx={{ py: 3, textAlign: 'center', bgcolor: 'background.paper', mt: 4 }}>
      <Stack direction="row" spacing={2} justifyContent="center" mb={1}>
        <IconButton
          href="https://github.com/Kashyap062004"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/kashyap-trivedi-504957286/"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <LinkedInIcon />
        </IconButton>
      </Stack>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Kashyap Trivedi. All rights reserved.
      </Typography>
    </Box>
  );
}