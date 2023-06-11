import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Typography, Box } from '@mui/material';
import { POST } from '../../services/api';

const AddRecipe: React.FC = () => {
  const [headline, setHeadline] = useState('');
  const [link, setLink] = useState('');
  const [imageRaw, setImageRaw] = useState('');
  const [categories, setCategories] = useState('');
  const [workTime, setWorkTime] = useState('');
  const [requestInformation, setRequestInformation] = useState('');


  const submitRecipe = async (e: React.FormEvent) => {
    document.body.style.cursor = 'wait';
    
    try {
      const response = await fetch('http://localhost:5500/addRecipe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({headline: headline, link: link, imageRaw: imageRaw, categories: categories, workTime: workTime}),
      });
      
      if (response.ok) {
        const responseBody = await response.text();
        setRequestInformation(responseBody)
      } else {
        setRequestInformation("There was a problem adding the recipe :(")
      }
    } catch (error) {
      console.error('Error:', error);

    } finally {
      document.body.style.cursor = 'auto';
    }
  };
  
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="90vh">
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          Add Recipe
        </Typography>
        <form onSubmit={submitRecipe}>
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
            <Grid item xs={12}>
                <Typography variant="subtitle1" align="center">
                    {requestInformation}
                </Typography>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default AddRecipe;