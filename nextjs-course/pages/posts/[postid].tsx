import { useRouter } from 'next/router'
import { Post } from '../../interfaces/Post';

type Props = {
  post: Post
}

const Post = ({ post }: Props) => {
  // const router = useRouter();
  // console.log(router)
  // const { postid } = router.query;
  return (
    <>
      <div>
        {/* <h1>Post Id {postid} Detail</h1> */}
        <p>
          {post.title}
        </p>
      </div>
    </>
  )
}

export default Post

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { postid: '1' }
      },
      {
        params: { postid: '2' }
      },
      {
        params: { postid: '3' }
      }
    ],
    fallback: false
  }
}

export async function getStaticProps({ context }: any) {
  console.log(context)
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`)
  const data = await response.json();
  return {
    props: {
      post: data
    }
  }
}