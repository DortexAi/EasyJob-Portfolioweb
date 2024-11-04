import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Link,
  TextField,
  Typography,
} from '@mui/material';

export default function WantHire() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    termsAccepted: false,
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      setError('You must accept the Terms of Service and Privacy Policy.');
    } else if (formData.password.length < 8) {
      setError('Password must be at least 8 characters.');
    } else {
      setError('');
      console.log(formData);
      window.alert('Signup successful!');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center' }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: '100%',
          p: 4,
          bgcolor: 'white',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Create Your Account
        </Typography>
        <Typography variant="body2" align="center" color="textSecondary" gutterBottom>
          Join us to start your job search!
        </Typography>

        <TextField
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          placeholder="Create a password"
          helperText="At least 8 characters, including letters and numbers"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <FormControlLabel
          control={
            <Checkbox
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
            />
          }
          label={
            <Typography variant="body2">
              I agree to the <Link href="#">Terms of Service</Link> and <Link href="#">Privacy Policy</Link>.
            </Typography>
          }
          sx={{ mt: 1 }}
        />

        {error && (
          <Typography color="error" variant="body2" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 2,
            mb: 2,
            bgcolor: '#4f46e5',
            '&:hover': { bgcolor: '#4338ca' },
          }}
        >
          Sign Up
        </Button>

        <Divider sx={{ my: 2 }}>or</Divider>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={() => window.alert('Google signup coming soon!')}
          >
            Sign up with Google
          </Button>
        </Box>

        <Typography variant="body2" align="center" sx={{ mt: 3 }}>
          Already have an account? <Link href="#">Log In Here</Link>
        </Typography>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Link href="#">Terms of Service</Link> &nbsp;|&nbsp; <Link href="#">Privacy Policy</Link>
        </Box>
      </Box>
    </Container>
  );
}
