import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

// import Work from './containers/work/work';
// import About from './containers/about';
import Work from './containers/work/work';
import Contact from './containers/contact';
// import PageOne  from './containers/page_one';
import PageTwo from './containers/page_two';
import Home from './containers/home/home';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="work" component={Work}/>
    <Route path="pageTwo" component={PageTwo}/>
    {/*<Route path="about" component={About}/>*/}
    <Route path="contact" component={Contact}/>
  </Route>
);
