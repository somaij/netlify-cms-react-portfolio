import React from 'react'
import _sortBy from 'lodash/sortBy'

import PostTitle from '../components/PostTitle'

class PostTitleSection extends React.Component {
  static defaultProps = {
    posts: [],
    title: '',
    limit: 3,
    showLoadMore: false,
    loadMoreTitle: 'Load More',
    perPageLimit: 12
  }

  state = {
    limit: this.props.limit
  }

  increaseLimit = () => {
    this.setState(prevState => ({
      limit: prevState.limit + this.props.perPageLimit
    }))
  }

  render () {
    const { posts, title, showLoadMore, loadMoreTitle } = this.props
    const { limit } = this.state

    const visiblePosts = _sortBy(posts, ['date'])
      .reverse()
      // show all unlesss you set a limit.
      .slice(0, limit || posts.length)

    return (
      <div className='PostTitleSection'>
          {!!visiblePosts.length && (
            <div className='PostTitleSection--Grid'>
              {visiblePosts.map((postItem, index) => (
                <PostTitle key={postItem.title + index} postItem={postItem} />
              ))}
            </div>
          )}
      </div>
    )
  }
}

export default PostTitleSection
