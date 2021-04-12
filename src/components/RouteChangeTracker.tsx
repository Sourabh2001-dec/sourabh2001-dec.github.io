import React from "react";
import ReactGA from "react-ga";
import { withRouter } from "react-router-dom";
const RouteChangeTracker = ({ history }: { history: any }) => {
  history.listen((location: any, action: any) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  });

  return <div></div>;
};

export default withRouter(RouteChangeTracker);
