export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  purchasedVariant: string;
  verified: boolean;
  avatarText: string;
  avatarBg: string;
}

export interface PhotoSlot {
  id: string;
  title: string;
  category: string;
  originalFilename: string;
  currentUrl: string;
  caption: string;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
  price?: string;
  originalPrice?: string;
  discount?: string;
}

export interface LivePurchase {
  id: string;
  buyerName: string;
  location: string;
  quantity: number;
  timeAgo: string;
  productName: string;
}
