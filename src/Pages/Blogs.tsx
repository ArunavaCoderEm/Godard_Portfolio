import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { motion } from 'framer-motion';

const GET_BLOGS = gql`
  query Publication {
    publication(host: "ardwebdevroadmap.hashnode.dev") {
      title
      isTeam
      posts(first: 10) {
        edges {
          node {
            title
            slug
            brief
            coverImage {
              attribution
              photographer
            }
          }
        }
      }
    }
  }
`;

const BlogList: React.FC = () => {
  const { data, loading, error } = useQuery(GET_BLOGS);

  if (loading) return <p className="text-center text-lg">Loading blogs...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

  const posts = data?.publication?.posts?.edges || [];

  return (
    <motion.div
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.0,
        duration: 0.4,
        ease: "easeInOut",
      }}
      id="contact"
      className="flex flex-col items-start text-white justify-start mukta p-6"
    >
      <button className="flex items-center mt-10 mb-8 px-4 py-1 w-36 mx-auto backdrop-blur-sm bg-black/60 text-white font-semibold rounded-full sha focus:outline-none mukta">
        <span className="mr-2">✨</span> Blogs{" "}
        <span className="ml-2">✨</span>
      </button>

      {posts.length === 0 ? (
        <p className="text-center">No blog posts found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map(({ node }: any) => (
            <a
              key={node.slug}
              href={`https://ardwebdevroadmap.hashnode.dev/${node.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block border rounded-lg p-4 shadow-white/10 shadow-lg transition duration-200"
            >
              <h2 className="text-xl font-semibold mb-2">{node.title}</h2>
              <p className="text-gray-500 text-sm mb-3">{node.brief}</p>
              {node.coverImage?.photographer && (
                <p className="text-xs italic text-gray-500">
                  📸 {node.coverImage.photographer} —{' '}
                  <a
                    href={node.coverImage.attribution}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Attribution
                  </a>
                </p>
              )}
            </a>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default BlogList;
