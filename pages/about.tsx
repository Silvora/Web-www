import React from 'react'
import Head from 'next/head'
import Intro from '../components/Intro'
import Introduce from '../components/Introduce'
import Layout from '../layout/Layout'
export default function about(props:any) {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Intro posts={props.posts}></Intro>
        <Introduce></Introduce>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
	// 调用外部 API 获取内容
	//const res = await fetch('https://international.v1.hitokoto.cn/')
  const res = await fetch('https://v1.hitokoto.cn')
	const posts = await res.json()
	//console.log("--",posts)
	// 在构建时将接收到 `posts` 参数
	return {
	  props: {
		  posts,
	  },
	}
  }


