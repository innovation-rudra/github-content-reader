import React from 'react'
import Sponsers from '../widgets/homeComponents/Sponsers'
import NewsLetter from '../widgets/homeComponents/NewsLetter'
import { Box, Grid2 } from '@mui/material'
import CommonHeaderContent from '../components/CommonHeaderContent'
import BlogCard from '../components/BlogCard'
import Category from '../widgets/details/Category'
import PopularTags from '../widgets/details/PopularTags'
import PopularPosts from '../widgets/details/PopularPosts'

function Blog() {
  return (
    <Box className='width-100'>
      <CommonHeaderContent data={{ linkName: 'Home /  Blog', name: 'Blog', description: 'Powerful project management tools for your companies of all sizes.' }} />
      <Grid2 container columnSpacing={8}>
        <Grid2 size={{ xs: 12, md: 9, lg: 9, xl: 9 }}>
          <Grid2 container columnSpacing={8} rowSpacing={5}>
            {
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((e) => {
                return (
                  <Grid2 size={{ xs: 12, md: 6, lg: 6, xl: 6 }} spacing={5}>
                    <BlogCard />
                  </Grid2>
                )
              })
            }
          </Grid2>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 3, lg: 3, xl: 3 }}>
          <Category />
          <PopularPosts />
          <PopularTags />
        </Grid2>
      </Grid2>
      <Sponsers />
      <NewsLetter />
    </Box>
  )
}

export default Blog