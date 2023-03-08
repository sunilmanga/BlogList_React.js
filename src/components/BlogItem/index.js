const BlogItem = props => {
  const {e} = props
  const {publishedDate, description, title} = e
  return (
    <li>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{publishedDate}</p>
      </div>
    </li>
  )
}

export default BlogItem
