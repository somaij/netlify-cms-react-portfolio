import React from 'react'
import _sortBy from 'lodash/sortBy'

import WorkCard from '../components/WorkCard'
import './WorkSection.css'

class WorkSection extends React.Component {
  static defaultProps = {
    works: [],
    title: '',
    limit: 12,
    showLoadMore: true,
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
    const { works, title, showLoadMore, loadMoreTitle } = this.props
    const { limit } = this.state

    const visibleWorks = _sortBy(works, ['date'])
      .reverse()
      // show all unlesss you set a limit.
      .slice(0, limit || works.length)

    return (
      <div className='WorkSection'>
        <div className='container'>
          {title && <h2 className='WorkSection--Title'>{title}</h2>}
          {!!visibleWorks.length && (
            <div className='PostSection--Grid'>
              {visibleWorks.map((postItem, index) => (
                <WorkCard key={postItem.title + index} postItem={postItem} />
              ))}
            </div>
          )}
          {showLoadMore &&
            visibleWorks.length < works.length && (
            <div className='taCenter'>
              <button className='button' onClick={this.increaseLimit}>
                {loadMoreTitle}
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default WorkSection
