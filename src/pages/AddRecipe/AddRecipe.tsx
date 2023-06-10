import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Typography, Box } from '@mui/material';

const AddRecipe: React.FC = () => {
  const [headline, setHeadline] = useState('');
  const [link, setLink] = useState('');
  const [imageRaw, setImageRaw] = useState('');
  const [categories, setCategories] = useState('');
  const [workTime, setWorkTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="90vh">
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          Add Recipe
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Headline"
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Image Raw"
                value={imageRaw}
                onChange={(e) => setImageRaw(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Categories"
                value={categories}
                onChange={(e) => setCategories(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Work Time"
                value={workTime}
                onChange={(e) => setWorkTime(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default AddRecipe;