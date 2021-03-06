import React from 'react';
import Typography from '@material-ui/core/Typography';

const Title: React.FC = () => {
  return (
    <Typography component='h1' variant="h3" style={{ maxWidth: 400, textAlign: 'center' }}>
      React GitHub Issues by William
    </Typography>
  );
}

export default Title;