import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { connect } from 'react-redux';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';
import {addComment} from '../redux/ActionCreaters';


const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
  }

const mapDispatchtoProps = (dispatch) =>({
    addComment:(dishId,rating,author,comment) => dispatch(addComment(dishId,rating,author,comment))
});

class Main extends Component {

  

  onDishSelect(dishId) {
    this.setState({selectedDish: dishId})
  }

  render() {
    const HomePage = () => {
        return(
            <Home 
                dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                leader={this.props.leaders.filter((leader) => leader.featured)[0]}
            />
        );
      } 
      const DishWithId = ({match}) => {
        return(
            // <DishDetail comments={this.props.comments} dishes={this.props.dishes} selectedDish={match.params.dishId} addComment={this.props.addComment} />
            <DishDetail dishes={this.props.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId),10)[0]}
            comments = {this.props.comments.filter((comment)=> comment.dishId === parseInt(match.params.dishId),10)}
            addComment={this.props.addComment}
         />
        );
      };   
    return (
        <div>
        <Header />
        <div>
          <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
              <Route exact path='/contactus' component={Contact} />
              <Route path ='/aboutus' component={()=><About leaders ={this.props.leaders}/>}/>
              <Route path='/menu/:dishId' component={DishWithId} />
              <Redirect to="/home" />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchtoProps)(Main));
