import { useDispatch, useSelector } from 'react-redux';
import { Check, ShoppingBag } from 'lucide-react';
import { addItem } from '../redux/CartSlice.jsx';
import { plantCategories } from '../data/plants.js';

const money = (amount) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);

export default function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) =>
    cartItems.some((item) => item.id === id);

  return (
    <main className="page-content plants-page">
      <section className="page-heading plants-heading">
        <span className="eyebrow dark-eyebrow">
          FIND YOUR GREEN
        </span>

        <h1>
          Plants for every
          <br />
          <em>kind of space.</em>
        </h1>

        <p>
          Meet your new leafy friend. Browse our collection and find
          the right plant for your home.
        </p>

        <div className="catalog-meta">
          <span>18 plants to love</span>
          <span className="meta-divider" />
          <span>3 curated collections</span>
        </div>
      </section>

      {plantCategories.map((category, index) => (
        <section
          className="plant-category"
          key={category.id}
          id={category.id}
        >
          <div className="category-heading">
            <div>
              <span className="category-number">
                0{index + 1} / COLLECTION
              </span>

              <h2>{category.name}</h2>

              <p>{category.subtitle}</p>
            </div>

            <span className="category-count">
              {String(category.plants.length).padStart(2, '0')} PLANTS
            </span>
          </div>

          <div className="product-grid">
            {category.plants.map((plant) => {
              const added = isInCart(plant.id);

              return (
                <article className="product-card" key={plant.id}>
                  <div className="product-image-wrap">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      loading="lazy"
                    />

                    <span className="product-tag">
                      HOUSEPLANT
                    </span>
                  </div>

                  <div className="product-info">
                    <div className="product-title-row">
                      <h3>{plant.name}</h3>

                      <span className="product-price">
                        {money(plant.price)}
                      </span>
                    </div>

                    <p>{plant.description}</p>

                    <button
                      type="button"
                      className={added ? 'btn btn-added' : 'btn btn-add'}
                      disabled={added}
                      onClick={() =>
                        dispatch(
                          addItem({
                            ...plant,
                            category: category.name,
                          })
                        )
                      }
                    >
                      {added ? (
                        <>
                          <Check size={17} />
                          Added to Cart
                        </>
                      ) : (
                        <>
                          <ShoppingBag size={17} />
                          Add to Cart
                        </>
                      )}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}

      <section className="catalog-bottom">
        <span>GOOD THINGS GROW HERE</span>

        <h2>
          Your home called.
          <br />
          <em>It wants more plants.</em>
        </h2>
      </section>
    </main>
  );
}