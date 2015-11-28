import React                 from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout            from 'layouts/CoreLayout';
import HomeView              from 'views/HomeView';
import Articles from 'views/Articles';
import ArticleList from 'views/ArticleList';

export default (
  <Route path='/' name='Redux Boilerplate' component={CoreLayout}>
    <IndexRoute name='index' component={HomeView} />
    <Route name='Article Listing' path='/articles' component={ArticleList}>
      <Route name='Article ' path='/articles/:id' component={Articles}/>
    </Route>
  </Route>
);
