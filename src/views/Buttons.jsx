import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import counterActions         from 'actions/counter';
import Breadcrumbs            from 'react-breadcrumbs';
import {Link} from 'react-router'
import {Button, ButtonGroup} from 'react-bootstrap';
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
      <ButtonGroup>
        <Button bsStyle="primary"><Link to="/">Go 2 root</Link></Button>
        <Button bsStyle="success"><Link to="/articles">Articles</Link></Button>
        <Button bsStyle="warning"><Link to="/articles/1">Article #1</Link></Button>
      </ButtonGroup>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
