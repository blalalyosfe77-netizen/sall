export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
}

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: 'قميص رجالي أنيق بأكمام طويلة',
    price: 199,
    originalPrice: 249,
    image: 'https://images.pexels.com/photos/8154113/pexels-photo-8154113.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.5,
    reviews: 128,
    badge: 'الأكثر مبيعاً'
  },
  {
    id: 2,
    name: 'فستان صيفي نسائي مطبوع',
    price: 299,
    originalPrice: 399,
    image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    reviews: 95,
    badge: 'جديد'
  },
  {
    id: 3,
    name: 'سماعات بلوتوث لاسلكية عالية الجودة',
    price: 449,
    originalPrice: 599,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    reviews: 203,
    badge: 'عرض خاص'
  },
  {
    id: 4,
    name: 'حقيبة يد جلدية أنيقة للنساء',
    price: 389,
    originalPrice: 489,
    image: 'https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6,
    reviews: 74,
  },
  {
    id: 5,
    name: 'حذاء رياضي مريح للجري',
    price: 329,
    originalPrice: 429,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.4,
    reviews: 156,
  },
  {
    id: 6,
    name: 'ساعة ذكية متطورة مقاومة للماء',
    price: 899,
    originalPrice: 1199,
    image: 'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    reviews: 89,
    badge: 'الأحدث'
  },
  {
    id: 7,
    name: 'جاكيت شتوي دافئ ومقاوم للرياح',
    price: 549,
    originalPrice: 699,
    image: 'https://images.pexels.com/photos/1103829/pexels-photo-1103829.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.5,
    reviews: 112,
  },
  {
    id: 8,
    name: 'كاميرا رقمية احترافية',
    price: 2299,
    originalPrice: 2799,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    reviews: 67,
    badge: 'محدود'
  }
];

export const newArrivals: Product[] = [
  {
    id: 9,
    name: 'تيشيرت قطني مطبوع بألوان زاهية',
    price: 89,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.3,
    reviews: 45,
    badge: 'جديد'
  },
  {
    id: 10,
    name: 'بنطال جينز نسائي عصري',
    price: 239,
    originalPrice: 299,
    image: 'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6,
    reviews: 78,
    badge: 'جديد'
  },
  {
    id: 11,
    name: 'محفظة جلدية أنيقة للرجال',
    price: 179,
    image: 'https://images.pexels.com/photos/1153838/pexels-photo-1153838.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.4,
    reviews: 92,
    badge: 'جديد'
  },
  {
    id: 12,
    name: 'نظارات شمسية كلاسيكية',
    price: 159,
    originalPrice: 199,
    image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    reviews: 134,
    badge: 'جديد'
  }
];