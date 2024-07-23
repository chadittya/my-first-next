import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function BlogPost({ params }) {
  return (
    <div>
      <Header />
      <main>
        <h1>Blog Post {params.slug}</h1>
        <p>This is the content for blog post {params.slug}.</p>
      </main>
      <Footer />
    </div>
  );
}
