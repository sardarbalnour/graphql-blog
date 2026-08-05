import Blogs from "./components/blog/blogs";
import HomePage from "./components/home/HomePage";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <HomePage />
        <Blogs />
      </Layout>
    </>
  );
}

export default App;
