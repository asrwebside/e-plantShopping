import { Heart, Leaf, Sun, Sprout } from 'lucide-react';

export default function AboutUs() {
  return (
    <main className="page-content about-page">
      <section className="page-heading">
        <span className="eyebrow dark-eyebrow">OUR ROOTS, OUR REASON</span>
        <h1>A greener home<br /><em>begins with us.</em></h1>
        <p>We believe plants make everyday spaces feel more alive, more peaceful, and more like you.</p>
      </section>
      <section className="about-story">
        <div className="about-photo" role="img" aria-label="Sunlit indoor plants in a home" />
        <div className="about-copy">
          <span className="eyebrow dark-eyebrow">A NOTE FROM OUR NURSERY</span>
          <h2>Little leaves.<br /><em>Big difference.</em></h2>
          <p>Paradise Nursery began with a simple idea: everyone deserves a little nature in their everyday life. Whether you're adding your first plant to a desk or creating a home jungle, we're here to make choosing plants feel easy and joyful.</p>
          <p>We curate approachable houseplants for real homes, with clear care guidance and options for different spaces, routines, and levels of experience.</p>
        </div>
      </section>
      <section className="values-grid">
        <article><span className="value-icon"><Leaf /></span><h3>Thoughtfully chosen</h3><p>Plants picked for their character, beauty, and everyday appeal.</p></article>
        <article><span className="value-icon"><Sun /></span><h3>Easy to grow</h3><p>Helpful choices for new plant parents and seasoned leaf lovers.</p></article>
        <article><span className="value-icon"><Heart /></span><h3>Made with care</h3><p>A welcoming plant-shopping experience, one leaf at a time.</p></article>
      </section>
    </main>
  );
}