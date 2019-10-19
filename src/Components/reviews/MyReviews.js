import React, { Component } from 'react'
import { connect } from 'react-redux'
import MyReview from './MyReview'
import { getMyReviews } from '../../actions/reviews'
import { Sub } from '../../ui/Styles'

class MyReviews extends Component {

  //this is to make sure whenever a user refreshes a screen, the reviews are here again.
  componentDidMount() {
    this.props.getMyReviews()
  }

  render() {
    const reviewArr = this.props.reviews.currentUserReviews.map(review => {
      return (
        <MyReview
          key={review.id}
          review={review.attributes}
          review_id={review.id}
        />
      )
    })
    return (
      < >
        {this.props.reviews.currentUserReviews.length === 0 ? <Sub className="has-text-black">You haven't created any reviews</Sub> : null}
        {reviewArr.reverse()}
      </>

    )
  }

}

const mapStateToProps = state => ({ reviews: state.reviews })

export default connect(mapStateToProps, { getMyReviews })(MyReviews)