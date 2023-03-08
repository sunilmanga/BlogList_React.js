import {Component} from 'react'
import BlogItem from '../BlogItem'

export default class BlogList extends Component {
  render() {
    const {blogsList} = this.props
    console.log(blogsList)
    return (
      <ul>
        {blogsList.map(e => (
          <BlogItem e={e} key={e.id} />
        ))}
      </ul>
    )
  }
}
