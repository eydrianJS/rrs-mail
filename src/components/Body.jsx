import React from 'react';
import { Grid, TextField } from '@material-ui/core';

const Body = () => {
  return (
    <Grid container style={{ padding: 20, height: '75%' }}>
      <Grid item xs={6} style={{ padding: 20, position: 'relative' }}>
        <div style={{ padding: 20 }}>
          <TextField
            id="outlined-basic"
            label="Email address"
            variant="outlined"
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ height: '75%', padding: 20 }}>
          <textarea style={{ height: '100%', width: '100%', resize: 'none' }}></textarea>
        </div>
      </Grid>
      <Grid item xs={6} style={{ padding: 20 }}>
        <div style={{ padding: 20 }}>
          <TextField
            id="outlined-basic"
            label="RRS url"
            variant="outlined"
            style={{ width: '100%' }}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default Body;
