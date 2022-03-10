import Head from 'next/head'
import Link from 'next/link'

export default function Home({posts}) {

  console.log(posts)
  return (
    <div>
      <h1>Welcome to My Blogaadd</h1>
      <ul>
        {posts.map(post=>(
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
} 


/*
테스트용 데이터 주소 http://jsonplaceholder.typicode.com/
getServerSideProps - 서버사이드 렌더링 함수명은 
사용자정의가 아니라 예약된 함수명을 사용해야 한다.
*/
export const getServerSideProps = async() => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_end=5`)
  const posts = await res.json();
  return {
    props: {
      posts
    }
  }
}
/*
동적 웹페이지 생성이 아니라 미리 데이터를 받아서 렌더링 해놓고 기다림
데이터가 바껴도 갱신되지 않는방식
서버빌드는 직접 구축해서 사용해볼것
[참조해서 실제 Nodejs서버를 만들어서 테스트 해야됨]
https://youtu.be/pdWQvfQBSGg?t=1242
*/
// export const getStaticSideProps = async() => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_end=5`)
//   const posts = await res.json();
//   return {
//     props: {
//       posts,
//     },
//     revalidate:20 //20초 후 새롭게 데이터를 생성
//   }
// }