import {GetStaticPaths, GetStaticProps, NextPage} from "next";

type Props = {
    date: Date;
}

const BlogPost: NextPage<Props> = ({date}) => {
  return (
    <div>
      <h1>Blog Post</h1>
      <h2>{date}</h2>
    </div>
  );
};

export default BlogPost;

export const getStaticPaths: GetStaticPaths = async () => {
  // Pegar páginas mais lidas
  return {
    paths: [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      date: new Date().toISOString()
    },
    revalidate: 5
  };
};


