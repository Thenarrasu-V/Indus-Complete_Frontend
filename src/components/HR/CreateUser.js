import React, { useState } from 'react';
import {
  Box, Typography, Paper, Grid, TextField, Button, Alert, MenuItem, Select, InputLabel, FormControl
} from '@mui/material';
import Sidebar from '../HR/HRSidebar';
import './../../styles/HR/CreateUser.css';

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  username: '',
  password: '',
  role: ''
};

const CreateUser = ({ addEmployee }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.role) newErrors.role = 'Role is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (formData.role === 'Manager') {
      setAlertMessage('A new Manager is created');
    } else {
      setAlertMessage('A new user is added');
    }
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);

    // Reset form
    setFormData(initialFormData);
    setErrors({});
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Paper elevation={3} sx={{ padding: 3, maxWidth: 600, margin: '0 auto' }}>
          <Typography variant="h4" align="center" gutterBottom color="black">
            Create User
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={Boolean(errors.name)}
                  helperText={errors.name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  error={Boolean(errors.phone)}
                  helperText={errors.phone}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  error={Boolean(errors.username)}
                  helperText={errors.username}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  error={Boolean(errors.password)}
                  helperText={errors.password}
                  type="password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth error={Boolean(errors.role)}>
                  <InputLabel>Role</InputLabel>
                  <Select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    label="Role"
                  >
                    <MenuItem value=""><em>Select Role</em></MenuItem>
                    <MenuItem value="FrontEnd">FrontEnd</MenuItem>
                    <MenuItem value="BackEnd">BackEnd</MenuItem>
                    <MenuItem value="Full Stack">Full Stack</MenuItem>
                    <MenuItem value="Manager">Manager</MenuItem>
                    <MenuItem value="Cyber Security">Cyber Security</MenuItem>
                  </Select>
                  {errors.role && <Typography color="error">{errors.role}</Typography>}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Create
                </Button>
              </Grid>
            </Grid>
          </form>
          {showAlert && (
            <Alert severity="success" sx={{ mt: 2 }}>
              {alertMessage}
            </Alert>
          )}
        </Paper>
      </Box>
    </Box>
  );
};

export default CreateUser;
