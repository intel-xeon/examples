import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`Mi chiamo Luca Marsilia ed ho maturato esperienza in ambito sviluppo e cybersecurity`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
