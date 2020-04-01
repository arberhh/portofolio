import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Skills from "./pages/skils";
import Projects from "./pages/projects";
import Experience from "./pages/experience";
import Contact from "./pages/contact";

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.

// We are going to use this route config in 2
// spots: once for the sidebar and once in the main
// content section. All routes are in the same
// order they would appear in a <Switch>.
const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <Skills />,
    main: () => null
  },
  {
    path: "/projects",
    sidebar: () => <Projects />,
    main: () => null
  },
  {
    path: "/experience",
    sidebar: () => <Experience />,
    main: () => null
  },
  {
    path: "/contact",
    sidebar: () => <Contact />,
    main: () => null
  }
];

export default function Tabs() {
  return (
    <Router>
      <div>
        <div
          style={{
            padding: "10px"
          }}
        >
          <div className="tabs-container">
            <div className="tabs-item">
              <Link to="/">Skills</Link>
            </div>
            <div className="tabs-item">
              <Link to="/projects">Projects</Link>
            </div>
            <div className="tabs-item">
              <Link to="/experience">Experience</Link>
            </div>
            <div className="tabs-item">
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <Switch>
            {routes.map((route, index) => (
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
