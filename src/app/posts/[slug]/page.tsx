import ReturnMainPage from "@/app/_components/ReturnMainPage"

export default function Post({params}: { params: { slug: string }}) {
  return (
    <div>
      <ReturnMainPage />
      <h1 className="text-3xl text-center">Page Post</h1>
      <pre className="text-center mt-20">
        url: /posts/{params.slug}
      </pre>
    </div>
  )
}