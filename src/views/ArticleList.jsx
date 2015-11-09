import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import counterActions         from 'actions/counter';
import Breadcrumbs            from 'react-breadcrumbs';
import {Link} from 'react-router'
import {Button, ButtonGroup} from 'react-bootstrap';
import Buttons from './Buttons';
// We define mapStateToProps and mapDispatchToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  counter : state.counter,
  routerState : state.router
});
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(counterActions, dispatch)
});
export class ArticleList extends React.Component {
  static propTypes = {
    actions  : React.PropTypes.object
  }

  render () {
    return (
      <div className='container text-center'>
        <Breadcrumbs params={this.props.routerState.params} routes={this.props.routerState.routes} />
        <h1>Articles</h1>
        {this.props.children}
        <Buttons />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);

