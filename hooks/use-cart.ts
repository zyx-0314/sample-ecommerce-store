import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { toast } from 'react-hot-toast';

import { Product } from '../types';

interface CartStore {
	items: Product[];
	addItem: (item: Product) => void;
	removeItem: (id: string) => void;
	removeAllItems: () => void;
}

const useCart = create(
	persist<CartStore>(
		(set, get) => ({
			items: [],
			addItem: (item: Product) => {
				const currentItems = get().items;
				const existingItem = currentItems.find((i) => i.id === item.id);

				if (existingItem) return toast('Item already in cart');

				set({ items: [...get().items, item] });
				toast.success('Item added to cart');
			},
			removeItem: (id: string) => {
				set({ items: get().items.filter((i) => i.id !== id) });
				toast.success('Item removed from cart');
			},
			removeAllItems: () => {
				set({ items: [] });
				toast.success('Cart cleared');
			},
		}),
		{
			name: 'cart-storage',
			storage: createJSONStorage(() => localStorage),
		}
	)
);

export default useCart;
