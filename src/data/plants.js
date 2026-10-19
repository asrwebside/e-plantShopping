export const plantCategories = [
  {
    id: 'air-purifying',
    name: 'Air Purifying',
    subtitle: 'Freshen up your favourite corners.',
    plants: [
      { id: 'peace-lily', name: 'Peace Lily', price: 18.99, description: 'Elegant dark leaves and graceful white blooms.', image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=900&q=85' },
      { id: 'snake-plant', name: 'Snake Plant', price: 22.50, description: 'A sculptural, resilient plant for any room.', image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b8c?auto=format&fit=crop&w=900&q=85' },
      { id: 'spider-plant', name: 'Spider Plant', price: 14.99, description: 'Arching striped leaves with a cheerful feel.', image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=900&q=85' },
      { id: 'rubber-plant', name: 'Rubber Plant', price: 28.00, description: 'Glossy leaves that make a bold green statement.', image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=900&q=85' },
      { id: 'areca-palm', name: 'Areca Palm', price: 34.50, description: 'Feathery tropical fronds with a light, airy look.', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=85' },
      { id: 'boston-fern', name: 'Boston Fern', price: 19.75, description: 'Soft, lush fronds for a fresh and leafy display.', image: 'https://images.unsplash.com/photo-1597055181300-a8f6e8f0d5d0?auto=format&fit=crop&w=900&q=85' },
    ],
  },
  {
    id: 'easy-care',
    name: 'Low Maintenance',
    subtitle: 'Lovely leaves, without the fuss.',
    plants: [
      { id: 'golden-pothos', name: 'Golden Pothos', price: 16.50, description: 'Trailing heart-shaped leaves with golden touches.', image: 'https://images.unsplash.com/photo-1614594895304-fe7116ac3b58?auto=format&fit=crop&w=900&q=85' },
      { id: 'zz-plant', name: 'ZZ Plant', price: 24.99, description: 'Shiny upright leaves that thrive on neglect.', image: 'https://images.unsplash.com/photo-1632207691143-643e2e9a9361?auto=format&fit=crop&w=900&q=85' },
      { id: 'monstera', name: 'Monstera Deliciosa', price: 32.00, description: 'Iconic split leaves for a statement-making space.', image: 'https://images.unsplash.com/photo-1616479779743-6a46b2e5d6b2?auto=format&fit=crop&w=900&q=85' },
      { id: 'heartleaf-philodendron', name: 'Heartleaf Philodendron', price: 17.25, description: 'Easy-going vines with sweet heart-shaped leaves.', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=900&q=85' },
      { id: 'jade-plant', name: 'Jade Plant', price: 15.00, description: 'Plump green leaves and a naturally tree-like shape.', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=900&q=85' },
      { id: 'cast-iron-plant', name: 'Cast Iron Plant', price: 26.50, description: 'A dependable leafy companion for low-light rooms.', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=85' },
    ],
  },
  {
    id: 'succulents',
    name: 'Succulents & Cacti',
    subtitle: 'Small plants with big personality.',
    plants: [
      { id: 'echeveria', name: 'Echeveria', price: 9.50, description: 'A pretty rosette succulent for sunny windowsills.', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=900&q=85' },
      { id: 'aloe-vera', name: 'Aloe Vera', price: 12.00, description: 'A useful succulent with architectural pointed leaves.', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=85' },
      { id: 'jade-succulent', name: 'Mini Jade', price: 11.25, description: 'A compact succulent with plump, glossy foliage.', image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=900&q=85' },
      { id: 'barrel-cactus', name: 'Barrel Cactus', price: 13.75, description: 'A round, sun-loving desert character.', image: 'https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=900&q=85' },
      { id: 'haworthia', name: 'Haworthia', price: 10.50, description: 'A compact striped succulent for desks and shelves.', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=85' },
      { id: 'string-of-pearls', name: 'String of Pearls', price: 18.00, description: 'Beaded trailing stems that spill beautifully over pots.', image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=85' },
    ],
  },
];

export const allPlants = plantCategories.flatMap((category) =>
  category.plants.map((plant) => ({ ...plant, category: category.name }))
);