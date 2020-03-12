import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  // this.route('route1', { path:'/contact'}, function() {
  //   this.route('edit',{ path:'/edit/:id'});
  // });

  this.route('list',{path:'/list'}, function() {
    this.route('detail',{ path:'/detail/:id' });
  });
  this.route('new',{  path:'/new' });
  this.route('edit',{ path:'/edit/:id'  });
});
