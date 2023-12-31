import * as React from 'react';
import { render } from 'react-dom';
import { hello_world_backend } from '../../declarations/hello_world_backend';
import Button from '@mui/material/Button';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const MyApp = () => {
  return (
    <div>
      <Button variant="contained">Hello World</Button>
    </div>
  );
}

render(<MyApp />, document.getElementById('app'));