/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    {id: 'a5ce5aa3-706e-4c2c-b6a5-24a477fd2ae5', name: 'polera nike', image: 'https://aztecasoccer.com/cdn/shop/files/reusch-mens-match-ii-padded-goalkeeper-jersey-safety-yellow-blue-front.jpg?v=1710443734&width=1100', price: 40000, category: 'polera', stock: 10},
    {id: '8e24bf49-678f-48c7-9ff6-b7a6c89155f8', name: 'polera adidas', image: 'https://aztecasoccer.com/cdn/shop/files/reusch-mens-match-ii-padded-goalkeeper-jersey-red-black-front.jpg?v=1710443865&width=1100', price: 50000, category: 'polera', stock: 0},
    {id: 'a1cd3f86-c398-4146-9efa-499664007a8b', name: 'polera puma', image: 'https://aztecasoccer.com/cdn/shop/files/adidas-mens-lafc-2024-25-authentic-home-jersey-black-gold-front.jpg?v=1712190183&width=1100', price: 60000, category: 'camisetas de football', stock: 10},
    {id: 'af078526-3383-4ad5-806e-d6e3fc955ded', name: 'short nike', image: 'https://aztecasoccer.com/cdn/shop/products/reusch-mens-cotton-bowl-goalkeeper-shorts-black-black-front.jpg?v=1615937295&width=1100', price: 40000, category: 'short', stock: 10},
    {id: '28143c5f-3f5b-48e2-af86-d4b99c0266bf', name: 'zapatos deportivos mercurial', image: 'https://aztecasoccer.com/cdn/shop/files/nike-mens-zoom-mercurial-superfly-9-mds-elite-fg-green-strike-black.png?v=1709144919&width=1100', price: 50000, category: 'zapatillas deportivas', stock: 10},
    {id: '642949b5-937c-4b59-ad26-b44ef05646a6', name: 'zapatos deportivos adidas', image: 'https://aztecasoccer.com/cdn/shop/files/nike-womens-france-2022-23-home-jersey-w-griezman-7-printing-both.jpg?v=1712771352&width=1100', price: 60000, category: 'camisetas de football', stock: 10},
  ])
  await knex('products_details').del()
  await knex('products_details').insert([
    {id: 'e9f9968e-5403-45a3-8d14-6494591c7298', product_id: 'a5ce5aa3-706e-4c2c-b6a5-24a477fd2ae5', description: 'polera nike de poliestireno perfecto para jugar partidos en lo cual se requiere muchas cosas para juggar que se yo papito me esta quedando de pana siu', rating: '5', size: 'M', brand: 'nike'},
    {id: 'ec656cd8-4547-4f5e-9d58-db17beb465e1', product_id: '8e24bf49-678f-48c7-9ff6-b7a6c89155f8', description: 'polera adidas de poliestireno perfecto para jugar partidos en lo cual se requiere muchas cosas para juggar que se yo papito me esta quedando de pana siu', rating: '4', size: 'L', brand: 'adidas'},
    {id: '1c0db678-85c3-4a6c-9f65-84d35ec95dc6', product_id: 'a1cd3f86-c398-4146-9efa-499664007a8b', description: 'polera puma de poliestireno perfecto para jugar partidos en lo cual se requiere muchas cosas para juggar que se yo papito me esta quedando de pana siu', rating: '3', size: 'S', brand: 'puma'},
    {id: 'a6d0f12f-be8b-4676-a293-ce60397ce4f6', product_id: 'af078526-3383-4ad5-806e-d6e3fc955ded', description: 'short nike de poliestireno perfecto para jugar partidos en lo cual se requiere muchas cosas para juggar que se yo papito me esta quedando de pana siu', rating: '2', size: 'M', brand: 'nike'},
    {id: 'db9add46-4a94-41b4-8794-b8792ec626cc', product_id: '28143c5f-3f5b-48e2-af86-d4b99c0266bf', description: 'zapatos deportivos mercurial de poliestireno perfecto para jugar partidos en lo cual se requiere muchas cosas para juggar que se yo papito me esta quedando de pana siu', rating: '1', size: 'L', brand: 'nike'},
    {id: 'da5a3a4a-5f9c-439a-9bd8-51461c3fe8ec', product_id: '642949b5-937c-4b59-ad26-b44ef05646a6', description: 'zapatos deportivos adidas de poliestireno perfecto para jugar partidos en lo cual se requiere muchas cosas para juggar que se yo papito me esta quedando de pana siu', rating: '5', size: 'S', brand: 'adidas'},
  ])
};
