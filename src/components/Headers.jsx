import React from 'react';
import AppleIcon from '@material-ui/icons/Apple';
import { Button } from '@material-ui/core';

const Headers = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        boxShadow: 'grey 0px 1px 17px 0px',
        width: '100%',
        height: '10%',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 20,
        }}
      >
        <div>
          <AppleIcon />
        </div>
        <div>Feedmail</div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 20,
          marginRight: 20,
        }}
      >
        <Button variant="contained" color="primary" style={{ margin: '2%' }}>
          Save
        </Button>
        <Button variant="contained" style={{ margin: '2%' }}>
          Preview
        </Button>
        <Button variant="contained" color="secondary" style={{ margin: '2%' }}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default Headers;
