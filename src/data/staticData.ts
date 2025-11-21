export interface Category {
  id: string;
  name: string;
  type: string;
  icon: string;
}

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category_id: string;
  rating: number;
  review_count: number;
  calories: number;
  prep_time: number;
  is_popular: boolean;
   allergens: string[]; 
}

export interface Ingredient {
  id: string;
  name: string;
  price: number;
  image_url: string;
  quantity: string;
}

export const categories: Category[] = [
  { id: '1', name: 'Meat', type: 'food', icon: '🥩' },
  { id: '2', name: 'Fast Food', type: 'food', icon: '🍔' },
  { id: '3', name: 'Sushi', type: 'food', icon: '🍣' },
  { id: '4', name: 'Salads', type: 'food', icon: '🥗' },
  { id: '5', name: 'Pasta', type: 'food', icon: '🍝' },
  { id: '6', name: 'Wine', type: 'drink', icon: '🍷' },
  { id: '7', name: 'Cocktails', type: 'drink', icon: '🍸' },
  { id: '8', name: 'Beer', type: 'drink', icon: '🍺' },
  { id: '9', name: 'Soft Drinks', type: 'drink', icon: '🥤' },
];

export const dishes: Dish[] = [
  {
    id: '1',
    name: 'Melting Cheese Pizza',
    description: 'Authentic Italian pizza with melted mozzarella, fresh basil, and homemade tomato sauce',
    price: 10.99,
    image_url: 'https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=800',
    category_id: '2',
    rating: 4.8,
    review_count: 2200,
    calories: 440,
    prep_time: 20,
    is_popular: true,
    allergens: ['gluten', 'lactose'],
  },
  {
    id: '2',
    name: 'Cheese Burger',
    description: 'Juicy beef patty with premium cheese, fresh vegetables, and our special sauce',
    price: 4.99,
    image_url: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800',
    category_id: '2',
    rating: 4.6,
    review_count: 1800,
    calories: 520,
    prep_time: 15,
    is_popular: true,
    allergens: ['gluten', 'lactose'],
  },
  {
    id: '3',
    name: 'Chicken Salad',
    description: 'Fresh mixed greens with grilled chicken, cherry tomatoes, and honey mustard dressing',
    price: 4.56,
    image_url: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=800',
    category_id: '4',
    rating: 4.7,
    review_count: 950,
    calories: 280,
    prep_time: 12,
    is_popular: true,
    allergens: ['eggs'],
  },
  {
    id: '4',
    name: 'Salmon Salad',
    description: 'Grilled salmon on a bed of fresh greens with cherry tomatoes, onions, and lemon dressing',
    price: 12.50,
    image_url: 'https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&w=800',
    category_id: '4',
    rating: 5.0,
    review_count: 458,
    calories: 320,
    prep_time: 18,
    is_popular: true,
    allergens: ['fish', 'nuts'],
  },
  {
    id: '5',
    name: 'Chinese Noodles',
    description: 'Savory noodles with vegetables and signature spices',
    price: 8.99,
    image_url: 'https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&w=800',
    category_id: '5',
    rating: 4.5,
    review_count: 325,
    calories: 450,
    prep_time: 15,
    is_popular: false,
    allergens: ['gluten', 'soja'],
  },
  {
    id: '6',
    name: 'Vegetable Chowmein',
    description: 'Fresh vegetables stir-fried with noodles in Asian style',
    price: 7.99,
    image_url: 'https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&w=800',
    category_id: '5',
    rating: 4.6,
    review_count: 412,
    calories: 380,
    prep_time: 15,
    is_popular: false,
    allergens: ['gluten'],
  },
  {
    id: '7',
    name: 'Pasta al Pomodoro',
    description: 'Classic Italian pasta with fresh tomato sauce and basil',
    price: 9.99,
    image_url: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800',
    category_id: '5',
    rating: 4.7,
    review_count: 567,
    calories: 420,
    prep_time: 18,
    is_popular: false,
    allergens: ['gluten'],
  },
  {
    id: '8',
    name: 'Rice and Curry',
    description: 'Aromatic rice served with flavorful curry and vegetables',
    price: 11.99,
    image_url: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800',
    category_id: '1',
    rating: 4.8,
    review_count: 892,
    calories: 480,
    prep_time: 25,
    is_popular: false,
    allergens: [],
  },
  {
    id: '9',
    name: 'Grilled Steak',
    description: 'Premium beef steak grilled to perfection with herbs',
    price: 18.99,
    image_url: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=800',
    category_id: '1',
    rating: 4.9,
    review_count: 1250,
    calories: 580,
    prep_time: 30,
    is_popular: false,
    allergens: [],
  },
  { 
    id: '10',
    name: 'California Roll',
    description: 'Fresh sushi roll with crab, avocado, and cucumber',
    price: 13.99,
    image_url: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=800',
    category_id: '3',
    rating: 4.7,
    review_count: 680,
    calories: 290,
    prep_time: 15,
    is_popular: false,
    allergens: ['fish', 'gluten'],
  },
  
  {
    id: '11',
    name: 'Mojito',
    description: 'Refreshing rum cocktail with mint, lime, and soda',
    price: 6.00,
    image_url: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=800',
    category_id: '7',
    rating: 4.6,
    review_count: 450,
    calories: 150,
    prep_time: 5,
    is_popular: false,
    allergens: ['alcohol'],
  },
  {
    id: '12',
    name: 'Long Island Ice Tea',
    description: 'Classic cocktail with rum, tequila, gin, vodka, and cola',
    price: 8.00,
    image_url: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=800',
    category_id: '7',
    rating: 4.5,
    review_count: 380,
    calories: 220,
    prep_time: 5,
    is_popular: false,
    allergens: ['alcohol'],
  },
  {
    id: '13',
    name: 'Red Wine',
    description: 'Premium red wine with rich flavors',
    price: 12.00,
    image_url: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=800',
    category_id: '6',
    rating: 4.8,
    review_count: 620,
    calories: 125,
    prep_time: 2,
    is_popular: false,
    allergens: ['alcohol'],
  },
  {
    id: '14',
    name: 'Craft Beer',
    description: 'Local craft beer with hoppy notes',
    price: 5.50,
    image_url: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=800',
    category_id: '8',
    rating: 4.4,
    review_count: 340,
    calories: 180,
    prep_time: 2,
    is_popular: false,
    allergens: ['gluten'],
  },
];

export const ingredients: Ingredient[] = [
  {
    id: '1',
    name: 'Chicken',
    price: 1.40,
    image_url: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=200',
    quantity: '250 gm',
  },
  {
    id: '2',
    name: 'Mushroom',
    price: 0.40,
    image_url: 'https://images.pexels.com/photos/1482101/pexels-photo-1482101.jpeg?auto=compress&cs=tinysrgb&w=200',
    quantity: '100 gm',
  },
  {
    id: '3',
    name: 'Extra Cheese',
    price: 0.80,
    image_url: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=200',
    quantity: '150 gm',
  },
  {
    id: '4',
    name: 'Pepperoni',
    price: 1.20,
    image_url: 'https://images.pexels.com/photos/4518842/pexels-photo-4518842.jpeg?auto=compress&cs=tinysrgb&w=200',
    quantity: '100 gm',
  },
];
