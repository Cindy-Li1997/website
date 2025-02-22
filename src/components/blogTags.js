import { Button } from '@seagreenio/react-bulma'
import PropTypes from 'prop-types'
import React from 'react'
import { navigate } from 'gatsby'

const BlogTags = ({ tags }) => {
  const onClick = tag => () => {
    navigate(`/blog/tag/${tag}`)
  }

  return (
    <section className="PingCAP-BlogTags">
      {tags &&
        tags.map(tag => (
          <Button key={tag} as="a" onClick={onClick(tag)}>
            {tag}
          </Button>
        ))}
    </section>
  )
}

BlogTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
}

export default BlogTags
