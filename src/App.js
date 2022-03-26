import * as React from 'react';

import AppFooter from 'AppFooter';
import Dashboard from 'Dashboard';
import AppAppBar from 'AppAppBar';

function Stack() {
  return (
    <React.Fragment>
      <AppAppBar />
      <Dashboard />
      <AppFooter />
    </React.Fragment>
  );
}

export default (Stack);
