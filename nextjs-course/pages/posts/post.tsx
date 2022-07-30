import { Grid, Card, Typography, Box } from "@mui/material"
import { Post } from '../../interfaces/Post'

type Props = {
  posts: Post[]
}

const Posts = ({ posts }: Props) => {
  return <>
    <Grid container sx={{ height: '100%' }}>
      <Card sx={{ width: '100%', height: '100%' }}>
        <Box sx={{ ml: '15px' }}>
          <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
            Posts List
          </Typography>
          <hr />
          {
            posts.map((post: any) => {
              return <div key={post.id}>
                <p><b>User ID</b> :{post.userId}</p>
                <p><b>Title</b> :{post.title}</p>
                <p><b>Body</b> :{post.body}</p>
              </div>
            })
          }
          <hr />
        </Box>
      </Card>
    </Grid>

  </>
}

Posts.getInitialProps = async (ctx: any) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const json = await res.json()
  return {
    posts: json
  }
}

export default Posts