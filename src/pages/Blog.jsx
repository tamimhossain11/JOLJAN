import AnimatedSection from '../components/AnimatedSection';
import GlassCard from '../components/GlassCard';
import { FiCalendar, FiUser } from 'react-icons/fi';
import '../styles/Blog.css';

const Blog = () => {
  const posts = [
    {
      title: 'Journey to Roboboat 2024',
      date: 'January 2024',
      author: 'Team Lead',
      excerpt: 'Our experience preparing for and competing in the Roboboat Competition 2024...',
    },
    {
      title: 'Autonomous Navigation Breakthrough',
      date: 'December 2023',
      author: 'Software Lead',
      excerpt: 'How we achieved precise waypoint navigation using advanced algorithms...',
    },
    {
      title: 'Designing Our New Hull',
      date: 'November 2023',
      author: 'Mechanical Team',
      excerpt: 'The engineering process behind our latest hull design improvements...',
    },
    {
      title: 'Sensor Integration Success',
      date: 'October 2023',
      author: 'Electronics Lead',
      excerpt: 'Successfully integrating multiple sensors for robust navigation...',
    },
  ];

  return (
    <div className="blog-page">
      <section className="page-hero">
        <div className="container">
          <AnimatedSection>
            <h1 className="page-title">Blog</h1>
            <p className="page-subtitle">
              Stay updated with our latest developments and insights
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="blog-posts-section">
        <div className="container">
          <div className="blog-grid">
            {posts.map((post, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <GlassCard className="blog-card">
                  <div className="blog-meta">
                    <span className="blog-date">
                      <FiCalendar size={16} /> {post.date}
                    </span>
                    <span className="blog-author">
                      <FiUser size={16} /> {post.author}
                    </span>
                  </div>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <button className="blog-read-more">Read More</button>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;


