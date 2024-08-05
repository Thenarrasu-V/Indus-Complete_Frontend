import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper } from '@mui/material';
import Sidebar from '../Employee/EmployeeSidebar';
import './../../styles/Employee/EmpFeedback.css';

const FeedbackPage = () => {
    const [newFeedback, setNewFeedback] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleFeedbackChange = (e) => {
        setNewFeedback(e.target.value);
    };

    const handleFeedbackSubmit = (e) => {
        e.preventDefault();
        if (newFeedback.trim() === '') {
            setError('Feedback cannot be empty');
            return;
        }

        // Simulate sending feedback
        setTimeout(() => {
            setSuccessMessage('Feedback submitted successfully!');
            setNewFeedback('');
            setError('');
            setShowPopup(true); // Show popup on success
        }, 500);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar />
            <Box sx={{ flexGrow: 1, p: 3, bgcolor: '#e0e0e0' }}>
                <Paper elevation={3} sx={{ padding: 3, bgcolor: 'white', maxWidth: '600px', mx: 'auto', borderRadius: 2 }}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Feedback
                    </Typography>
                    <Box component="form" onSubmit={handleFeedbackSubmit} sx={{ mt: 3 }}>
                        <TextField
                            fullWidth
                            multiline
                            rows={6}
                            variant="outlined"
                            placeholder="Write your feedback here..."
                            value={newFeedback}
                            onChange={handleFeedbackChange}
                            error={Boolean(error)}
                            helperText={error}
                            sx={{ bgcolor: 'white', mb: 2 }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{ width: '100%' }}
                        >
                            Submit Feedback
                        </Button>
                    </Box>
                </Paper>
            </Box>
            <Dialog open={showPopup} onClose={closePopup}>
                <DialogTitle>Feedback Submitted</DialogTitle>
                <DialogContent>
                    <Typography>
                        {successMessage}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closePopup} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default FeedbackPage;
