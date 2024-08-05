import React, { useState } from 'react';
import { Box, Paper, Typography, Grid, Button, Alert, Snackbar } from '@mui/material';
import Sidebar from '../HR/HRSidebar';
import '../../styles/HR/HRFeedback.css';

const initialFeedbackData = [
  { id: 1, name: 'Naveen', message: 'The new project management tool is really helpful!' },
  { id: 2, name: 'Parthiban', message: 'I appreciate the flexible working hours.' },
  { id: 3, name: 'Thenarrasu', message: 'The recent team-building activity was great!' },
  { id: 4, name: 'Sai', message: 'The cafeteria could use more vegetarian options.' },
  { id: 5, name: 'Kaushik', message: 'The onboarding process for new employees needs improvement.' },
];

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState(initialFeedbackData);
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const markAsRead = (id) => {
    setFeedbacks(feedbacks.filter(feedback => feedback.id !== id));
    setAlertMessage('Feedback marked as read');
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h4" align="center" color="black">
            Employee Feedback
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {feedbacks.map(feedback => (
            <Grid item xs={12} sm={6} md={4} key={feedback.id}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Typography variant="h6" color="black">
                  {feedback.name}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }} color="black">
                  {feedback.message}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  onClick={() => markAsRead(feedback.id)}
                >
                  Mark as Read
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Snackbar
          open={showAlert}
          autoHideDuration={3000}
          onClose={handleCloseAlert}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
            {alertMessage}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default Feedback;
