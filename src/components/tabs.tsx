import * as React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Skills from "./tab-items/skils";
import Projects from "./tab-items/projects";
import Experience from "./tab-items/experience";

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
    path: "/skills",
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
  }
];

export default function Tabs() {
  return (
    <Router>
      <div>
        <div
          style={{
            padding: "10px",
            // width: "40%",
            background: "#f0f0f0"
          }}
        >
          <ul className="tabs-links-ul  ">
            <li className="tabs-item">
              <Link to="/skills">Skills</Link>
            </li>
            <li className="tabs-item">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="tabs-item">
              <Link to="/experience">Experience</Link>
            </li>
          </ul>

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

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
