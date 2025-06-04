export interface GarageItem {
  id: number;
  name: string;
  description: string;
  price: string;
  notes: string;
  image: string;
}

export const garageItems: GarageItem[] = [
  {
    id: 1,
    name: 'Vintage Lamp',
    description: 'Classic desk lamp from the 1960s.',
    price: '$30',
    notes: 'Works perfectly.',
  image: 'https://placehold.co/300x200?text=Lamp',
  },
  {
    id: 2,
    name: 'Old Game Console',
    description: 'Retro console with two controllers.',
    price: '$80',
    notes: 'Great condition.',
  image: 'https://placehold.co/300x200?text=Console',
  },
  {
    id: 3,
    name: 'Assorted Books',
    description: 'Collection of sci‑fi novels.',
    price: '$15',
    notes: 'Sold as bundle.',
  image: 'https://placehold.co/300x200?text=Books',
  },
  {
    id: 4,
    name: 'Kitchen Set',
    description: 'Plates and cutlery set for four.',
    price: '$25',
    notes: 'Some wear.',
  image: 'https://placehold.co/300x200?text=Kitchen',
  },
  {
    id: 5,
    name: 'Bicycle',
    description: 'Used mountain bike.',
    price: '$120',
    notes: 'Needs new tires.',
  image: 'https://placehold.co/300x200?text=Bicycle',
  },
  {
    id: 6,
    name: 'Board Games',
    description: 'Assortment of family board games.',
    price: '$20',
    notes: 'Pieces complete.',
  image: 'https://placehold.co/300x200?text=Games',
  },
];
