import { useRouter } from 'next/router'
import React from 'react'

const Postid = () => {
  const router = useRouter();
  console.log(router)
  const {postid} = router.query;
  return (
    <div>Post Id {postid}</div>
  )
}

export default Postid