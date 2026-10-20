import { Heart, Leaf, Sun } from 'lucide-react';

export default function AboutUs() {
  return (
    <main className="page-content about-page about-us-container">
      <section className="page-heading">
        <span className="eyebrow dark-eyebrow">
          OUR ROOTS, OUR REASON
        </span>

        <h1>
          A greener home
          <br />
          <em>begins with us.</em>
        </h1>

        <p>
          Welcome to Paradise Nursery, your destination for beautiful indoor
          plants and greenery. We believe plants make everyday spaces feel
          more alive, peaceful, and welcoming.
        </p>
      </section>

      <section className="about-story">
        <div
          className="about-photo"
          role="img"
          aria-label="Sunlit indoor plants in a home"
        />

        <div className="about-copy">
          <span className="eyebrow dark-eyebrow">
            A NOTE FROM OUR NURSERY
          </span>

          <h2>
            Little leaves.
            <br />
            <em>Big difference.</em>
          </h2>

          <p>
            Paradise Nursery began with a simple mission: to help people bring
            nature into their everyday lives. Whether you are choosing your
            first desk plant or creating a home jungle, we make finding the
            right plants easy and enjoyable.
          </p>

          <p>
            We offer a variety of houseplants for different spaces, preferences,
            and levels of plant-care experience. Our goal is to help customers
            create greener, healthier, and more welcoming environments through
            the beauty of plants.
          </p>
        </div>
      </section>

      <section className="values-grid">
        <article>
          <span className="value-icon">
            <Leaf />
          </span>
          <h3>Thoughtfully chosen</h3>
          <p>
            We offer beautiful plants selected to bring character and natural
            beauty into your home.
          </p>
        </article>

        <article>
          <span className="value-icon">
            <Sun />
          </span>
          <h3>Easy to grow</h3>
          <p>
            We help beginners and experienced plant lovers find plants suited
            to their spaces and routines.
          </p>
        </article>

        <article>
          <span className="value-icon">
            <Heart />
          </span>
          <h3>Made with care</h3>
          <p>
            We aim to provide a welcoming plant-shopping experience and help
            customers enjoy caring for their plants.
          </p>
        </article>
      </section>
    </main>
  );
}