import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // ==================== MUSIC & INSTRUMENTS ====================
  {
    id: 'music-1',
    name: 'Yamaha F310 Acoustic Guitar',
    brand: 'Yamaha',
    category: 'music',
    price: 9490,
    originalPrice: 11500,
    rating: 4.8,
    reviewsCount: 3850,
    image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=800&q=80',
    description: 'The benchmark entry-to-intermediate acoustic guitar featuring a spruce top, rosewood fretboard, and resonant tone for songwriting and stage performance.',
    features: [
      'Traditional Western spruce top body with rich resonant acoustics',
      'Rosewood fingerboard with comfortable low string action',
      'Durable Yamaha tuning pegs for rock-solid pitch stability',
      'Comfortable neck profile perfect for beginners and seasoned players alike',
      'Includes padded gig bag and strap'
    ],
    tags: ['music', 'guitar', 'acoustic', 'yamaha', 'instrument', 'beginner', 'strings', 'under ₹10000', 'under 10000'],
    specs: {
      'Top Material': 'Spruce',
      'Back & Sides': 'Meranti',
      'Neck Material': 'Nato',
      'Fretboard': 'Rosewood (20 frets)',
      'Scale Length': '634 mm'
    },
    inStock: true,
    popular: true
  },
  {
    id: 'music-2',
    name: 'Casio CT-S300 61-Key Touch Sensitive Keyboard',
    brand: 'Casio',
    category: 'music',
    price: 10995,
    originalPrice: 13495,
    rating: 4.7,
    reviewsCount: 1920,
    image: 'https://images.unsplash.com/photo-1520523839898-50712825e617?auto=format&fit=crop&w=800&q=80',
    description: 'Portable arranger keyboard featuring touch response keys, pitch bend wheel, 400 tones, 77 rhythms, and USB MIDI connectivity.',
    features: [
      '61 piano-style touch-sensitive keys for expressive dynamics',
      'Pitch bend wheel for expressive synths, saxophone, and guitar lead bends',
      'Dance Music Mode with 50 built-in EDM tracks & effects',
      'Connects via Micro USB to PC, Mac, iPad, and smartphone for learning apps',
      'Lightweight with built-in carry handle & battery power option'
    ],
    tags: ['music', 'keyboard', 'piano', 'casio', 'synthesizer', 'midi', 'keys', 'learning', 'under ₹15000'],
    specs: {
      'Keys': '61 Piano-style with Touch Response',
      'Tones / Rhythms': '400 Tones / 77 Rhythms',
      'Connectivity': 'USB Micro-B, Audio In, Sustain Pedal',
      'Speakers': 'Dual 2.5W Oval Speakers',
      'Weight': '3.3 kg'
    },
    inStock: true,
    popular: true
  },
  {
    id: 'music-3',
    name: 'Shure SM58 Cardioid Dynamic Vocal Microphone',
    brand: 'Shure',
    category: 'music',
    price: 9850,
    originalPrice: 11900,
    rating: 4.9,
    reviewsCount: 4700,
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
    description: 'The world standard live vocal microphone known for tailored vocal response, legendary durability, and pneumatic shock mount system.',
    features: [
      'Frequency response tailored for vocals with brightened midrange and bass rolloff',
      'Uniform cardioid pickup pattern isolates the main sound source and minimizes background noise',
      'Pneumatic shock-mount system cuts down handling noise',
      'Rugged steel mesh grille with built-in spherical wind and pop filter',
      'Iconic indestructible build quality trusted by top touring artists worldwide'
    ],
    tags: ['music', 'mic', 'microphone', 'vocal', 'shure', 'studio', 'live performance', 'audio gear', 'under ₹10000'],
    specs: {
      'Type': 'Dynamic',
      'Polar Pattern': 'Cardioid',
      'Frequency Response': '50 Hz – 15,000 Hz',
      'Connector': 'Three-pin professional audio (XLR)',
      'Weight': '298 g'
    },
    inStock: true
  },
  {
    id: 'music-4',
    name: 'Audio-Technica AT-LP60X Belt-Drive Turntable',
    brand: 'Audio-Technica',
    category: 'music',
    price: 17990,
    originalPrice: 21990,
    rating: 4.8,
    reviewsCount: 1400,
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80',
    description: 'Fully automatic belt-drive turntable designed for analog vinyl lovers, featuring switchable phono preamp and Dual Magnet phono cartridge.',
    features: [
      'Fully automatic belt-drive operation with two speeds (33-1/3 and 45 RPM)',
      'Anti-resonance, die-cast aluminum platter with dampening mat',
      'Redesigned tonearm base and headshell for improved tracking and reduced resonance',
      'Integral Dual Magnet phono cartridge with replaceable diamond stylus',
      'Built-in switchable phono pre-amplifier for direct connection to any speaker'
    ],
    tags: ['music', 'vinyl', 'turntable', 'record player', 'audio-technica', 'analog', 'audiophile', 'music gear'],
    specs: {
      'Speeds': '33-1/3 RPM, 45 RPM',
      'Drive': 'Belt-drive',
      'Cartridge': 'Dual Magnet with diamond stylus',
      'Preamp': 'Built-in switchable PHONO / LINE'
    },
    inStock: true
  },
  {
    id: 'music-5',
    name: 'Focusrite Scarlett 2i2 (4th Gen) USB Audio Interface',
    brand: 'Focusrite',
    category: 'music',
    price: 18990,
    originalPrice: 22500,
    rating: 4.9,
    reviewsCount: 2200,
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
    description: 'The studio-grade 2-in/2-out audio interface with ultra-low noise preamps, Auto Gain, Clip Safe, and flagship RedNet converters.',
    features: [
      'Two 4th-Gen remote-controlled mic preamps with 69dB gain range',
      'Flagship 192kHz, 24-bit RedNet converters with 120dB dynamic range',
      'Auto Gain and Clip Safe ensure you never clip or ruin a take',
      'Re-engineered Air Mode with Harmonic Drive and Presence boost',
      'Includes Ableton Live Lite and Pro Tools recording software bundles'
    ],
    tags: ['music', 'recording', 'audio interface', 'studio', 'focusrite', 'home studio', 'music production'],
    specs: {
      'Inputs/Outputs': '2x XLR-1/4" combo, 2x 1/4" TRS out, Headphone out',
      'Resolution': '24-bit / 192kHz',
      'Dynamic Range': '120dB',
      'Connectivity': 'USB Type-C'
    },
    inStock: true
  },
  {
    id: 'music-6',
    name: 'Kala Makala Soprano Ukulele',
    brand: 'Kala',
    category: 'music',
    price: 3999,
    originalPrice: 4999,
    rating: 4.6,
    reviewsCount: 980,
    image: 'https://images.unsplash.com/photo-1541689592655-f5f52825a3b8?auto=format&fit=crop&w=800&q=80',
    description: 'Traditional wood ukulele that sounds bright, joyous, and sweet. Great for music enthusiasts and travelers.',
    features: [
      'Agathis wood top body with vintage satin finish',
      'Geared tuners to stay in tune longer',
      'Fitted with Italian Aquila Super Nylgut strings',
      'Lightweight and compact companion for campfire jams'
    ],
    tags: ['music', 'ukulele', 'instrument', 'acoustic', 'strings', 'budget', 'under ₹5000'],
    specs: {
      'Size': 'Soprano',
      'Strings': 'Aquila Super Nylgut',
      'Frets': '12 brass frets'
    },
    inStock: true
  },

  // ==================== FOOD & GOURMET ====================
  {
    id: 'food-1',
    name: 'Blue Tokai Specialty Coffee Beans (Attikan Estate - 500g)',
    brand: 'Blue Tokai',
    category: 'food',
    price: 890,
    originalPrice: 990,
    rating: 4.9,
    reviewsCount: 3100,
    image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=800&q=80',
    description: 'Artisanal 100% Arabica whole beans roasted in small batches from the Biligirirangana Hills. Tasting notes of dark chocolate, figs, and roasted almonds.',
    features: [
      'Single-origin 100% Arabica beans harvested from Attikan Estate (1,650m altitude)',
      'Medium-dark roast profile crafted specifically for Moka pot, French Press, or Espresso',
      'Tasting notes: Dark Chocolate, Roasted Almond, Sweet Fig',
      'Freshly roasted and packed with one-way degassing valve seal',
      'Direct-trade ethical sourcing supporting Indian coffee growers'
    ],
    tags: ['food', 'coffee', 'gourmet', 'beverage', 'arabica', 'beans', 'blue tokai', 'snacks', 'under ₹1000'],
    specs: {
      'Origin': 'Attikan Estate, Karnataka (1,650m)',
      'Roast Level': 'Medium Dark',
      'Weight': '500 grams',
      'Format': 'Whole Beans (or custom grind)'
    },
    inStock: true,
    popular: true
  },
  {
    id: 'food-2',
    name: 'Lindt Swiss Excellence Dark Chocolate Luxury Box (Set of 4)',
    brand: 'Lindt',
    category: 'food',
    price: 1450,
    originalPrice: 1700,
    rating: 4.8,
    reviewsCount: 2600,
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80',
    description: 'Premium Swiss chocolatier collection featuring 70%, 85%, Sea Salt, and Roasted Hazelnut dark chocolate bars made from fine cocoa beans.',
    features: [
      'Curated four-bar gift collection (100g each): 70% Cocoa, 85% Cocoa, Touch of Sea Salt, and Roasted Hazelnut',
      'Expertly crafted by Lindt Swiss Master Chocolatiers since 1845',
      'Silky smooth melt with rich, balanced, full-bodied cocoa profile',
      'No artificial preservatives; non-GMO ingredients',
      'Presented in elegant luxury gold-trimmed gift packaging'
    ],
    tags: ['food', 'chocolate', 'dark chocolate', 'gourmet', 'swiss', 'sweet', 'gift box', 'snacks', 'under ₹2000'],
    specs: {
      'Bars Included': '4 x 100g bars',
      'Cocoa Content': '70% and 85% variants',
      'Origin': 'Switzerland'
    },
    inStock: true,
    popular: true
  },
  {
    id: 'food-3',
    name: 'Vahdam Himalayan Green & Herbal Tea Gift Reserve (6 Blends)',
    brand: 'Vahdam',
    category: 'food',
    price: 1299,
    originalPrice: 1699,
    rating: 4.8,
    reviewsCount: 1850,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    description: 'Award-winning loose leaf tea gift collection packaged in reusable gold tins, direct from high-elevation Himalayan tea gardens.',
    features: [
      '6 artisan blends: Kashmiri Kahwa, Chamomile Green Tea, Turmeric Spiced Herbal, Sweet Himalayan Detox, Earl Grey, Mint Green',
      '100% pure whole leaf teas packed at source within days of harvest',
      'Packed with natural polyphenols, antioxidants, and soothing botanicals',
      'Airtight golden tin caddies to lock in delicate aromas and freshness',
      'Climate Neutral and Plastic Neutral certified brand'
    ],
    tags: ['food', 'tea', 'green tea', 'herbal', 'gourmet', 'healthy', 'vahdam', 'beverages', 'under ₹1500'],
    specs: {
      'Caddies': '6 Tins (30g each, 180g total)',
      'Ingredients': 'Whole Leaf Green Tea, Saffron, Spices, Herbs',
      'Origin': 'Darjeeling & Kashmir, India'
    },
    inStock: true
  },
  {
    id: 'food-4',
    name: 'Nutraj Signature California Almonds, Walnuts & Berries Box (1kg)',
    brand: 'Nutraj',
    category: 'food',
    price: 1599,
    originalPrice: 2199,
    rating: 4.7,
    reviewsCount: 4200,
    image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=800&q=80',
    description: 'Deluxe mix of handpicked California Almonds, Chilean Walnuts, Cashews, Cranberries, and Black Raisins.',
    features: [
      '1 Kilogram jumbo gourmet assortment (250g x 4 sealed partitions)',
      'Rich in plant-based Omega-3 fatty acids, dietary fiber, and Vitamin E',
      'Zero trans-fats, zero added sugar, raw & unsalted for pure nutritional integrity',
      'Nitrogen flushed vacuum packaging guarantees peak crunch and fresh aroma'
    ],
    tags: ['food', 'dry fruits', 'nuts', 'almonds', 'healthy', 'snacks', 'superfood', 'under ₹2000'],
    specs: {
      'Total Weight': '1 kg (1000g)',
      'Items': 'Almonds, Walnuts, Cashews, Cranberries',
      'Shelf Life': '9 Months'
    },
    inStock: true
  },
  {
    id: 'food-5',
    name: 'Borges 100% Extra Virgin Olive Oil (1 Litre)',
    brand: 'Borges',
    category: 'food',
    price: 1350,
    originalPrice: 1650,
    rating: 4.8,
    reviewsCount: 3500,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80',
    description: 'Cold-extracted Mediterranean olive oil crafted from the first cold press of specially selected Spanish olives for salads and cooking.',
    features: [
      '100% Pure Extra Virgin Olive Oil obtained solely by mechanical cold pressing',
      'Delicate fruity aroma with a hint of green almond and gentle peppery finish',
      'Rich in heart-healthy monounsaturated fats (MUFA) and natural antioxidants',
      'Ideal for gourmet salads, pasta dressings, dips, sautéing, and bread dipping'
    ],
    tags: ['food', 'olive oil', 'cooking', 'gourmet', 'healthy', 'mediterranean', 'grocery', 'under ₹1500'],
    specs: {
      'Volume': '1 Litre',
      'Extraction': 'First Cold Extraction',
      'Acidity': '< 0.5%',
      'Origin': 'Spain'
    },
    inStock: true
  },
  {
    id: 'food-6',
    name: 'Samyang & Nongshim Gourmet Korean Ramen Box (10 Packs)',
    brand: 'K-Gourmet',
    category: 'food',
    price: 1699,
    originalPrice: 1999,
    rating: 4.8,
    reviewsCount: 1540,
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
    description: 'Authentic imported Korean ramen assortment featuring Buldak 2x Spicy, Carbonara, Shin Ramyun Black, and Chapagetti.',
    features: [
      'Includes 10 assorted popular Korean noodle packs',
      'Chewy thick noodles infused with savory bone broth and fiery chili sauces',
      'Quick 5-minute gourmet preparation for late night cravings or lunch',
      'Halal certified genuine imports'
    ],
    tags: ['food', 'ramen', 'noodles', 'korean', 'snacks', 'spicy', 'instant food', 'under ₹2000'],
    specs: {
      'Quantity': '10 Packs (140g each)',
      'Flavor Profiles': 'Carbonara, Spicy Chicken, Shin Ramyun, Jjapaguri'
    },
    inStock: true
  },

  // ==================== SMARTPHONES ====================
  {
    id: 'phone-1',
    name: 'Google Pixel 8a 5G',
    brand: 'Google',
    category: 'smartphones',
    price: 39999,
    originalPrice: 43999,
    rating: 4.6,
    reviewsCount: 1420,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
    description: 'The AI-first phone with Google Tensor G3, extraordinary camera capabilities, Best Take, and 7 years of OS updates.',
    features: [
      'Google Tensor G3 chip with Gemini Nano on-device AI',
      '64MP dual-camera system with Magic Eraser and Night Sight',
      '6.1" Actua OLED 120Hz display with Gorilla Glass 3',
      'All-day battery life (up to 72 hours with Extreme Battery Saver)',
      'IP67 water and dust resistance'
    ],
    tags: ['phone', 'smartphone', 'under 40000', 'under 50000', 'android', 'camera', 'ai', 'google', '5g'],
    specs: {
      'Display': '6.1-inch OLED 120Hz',
      'Processor': 'Tensor G3',
      'RAM / Storage': '8GB / 128GB',
      'Battery': '4,492 mAh',
      'Weight': '188g'
    },
    inStock: true,
    popular: true
  },
  {
    id: 'phone-2',
    name: 'Samsung Galaxy A35 5G',
    brand: 'Samsung',
    category: 'smartphones',
    price: 27999,
    originalPrice: 30999,
    rating: 4.4,
    reviewsCount: 890,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80',
    description: 'Super AMOLED 120Hz screen, 50MP triple camera with OIS, Knox security, and 5000mAh battery for all-day endurance.',
    features: [
      '6.6" Super AMOLED 120Hz display with Vision Booster',
      '50MP main camera with Optical Image Stabilization (OIS)',
      '5,000 mAh battery with 25W fast charging',
      'Corning Gorilla Glass Victus+ & IP67 water protection',
      'Samsung Knox Vault hardware-backed security'
    ],
    tags: ['phone', 'smartphone', 'under 30000', 'under 35000', 'samsung', '5g', 'battery', 'budget'],
    specs: {
      'Display': '6.6-inch Super AMOLED 120Hz',
      'Processor': 'Exynos 1380 5nm',
      'RAM / Storage': '8GB / 128GB',
      'Battery': '5,000 mAh',
      'Weight': '209g'
    },
    inStock: true
  },
  {
    id: 'phone-3',
    name: 'OnePlus 12R 5G (16GB RAM)',
    brand: 'OnePlus',
    category: 'smartphones',
    price: 39999,
    originalPrice: 45999,
    rating: 4.7,
    reviewsCount: 950,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
    description: 'Flagship killer with Snapdragon 8 Gen 2, blazing 100W SUPERVOOC charging, and 5500mAh powerhouse battery.',
    features: [
      'Snapdragon 8 Gen 2 high-performance chipset',
      '1.5K 120Hz ProXDR 4th Gen LTPO display (4500 nits peak)',
      '100W SUPERVOOC charging (1-100% in 26 minutes)',
      'Massive 5,500 mAh battery',
      'Dual Cryo-velocity VC cooling for high-FPS gaming'
    ],
    tags: ['phone', 'smartphone', 'under 40000', 'gaming phone', 'fast charging', 'performance', 'oneplus'],
    specs: {
      'Display': '6.78-inch AMOLED 120Hz LTPO',
      'Processor': 'Snapdragon 8 Gen 2',
      'RAM / Storage': '16GB / 256GB',
      'Battery': '5,500 mAh',
      'Weight': '207g'
    },
    inStock: true,
    popular: true
  },
  {
    id: 'phone-4',
    name: 'Moto G84 5G (12GB RAM)',
    brand: 'Motorola',
    category: 'smartphones',
    price: 18999,
    originalPrice: 22999,
    rating: 4.5,
    reviewsCount: 1820,
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-thin vegan leather 5G smartphone with 120Hz pOLED 10-bit screen, 50MP OIS camera, and clean Android.',
    features: [
      '10-bit billion color 120Hz pOLED display',
      '50MP camera with Optical Image Stabilization (OIS)',
      '12GB RAM + 256GB storage at budget pricing',
      'Dolby Atmos stereo speakers',
      '5000 mAh battery with 33W TurboPower charger'
    ],
    tags: ['phone', 'smartphone', 'under 20000', 'under 25000', 'budget phone', 'motorola', '5g', 'cheap phone'],
    specs: {
      'Display': '6.55-inch pOLED 120Hz',
      'Processor': 'Snapdragon 695 5G',
      'RAM / Storage': '12GB / 256GB',
      'Battery': '5,000 mAh',
      'Weight': '166g'
    },
    inStock: true
  },
  {
    id: 'phone-5',
    name: 'Apple iPhone 15 Pro (128GB)',
    brand: 'Apple',
    category: 'smartphones',
    price: 127900,
    originalPrice: 134900,
    rating: 4.8,
    reviewsCount: 2310,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
    description: 'Forged in titanium with revolutionary A17 Pro chip, customizable Action button, and versatile 48MP Pro camera system.',
    features: [
      'Aerospace-grade titanium design with textured matte glass',
      'A17 Pro chip with 6-core GPU for console-quality gaming',
      '48MP Main camera with 3x optical telephoto lens',
      'Action button for fast shortcuts',
      'USB-C with USB 3 speeds up to 10Gb/s'
    ],
    tags: ['phone', 'smartphone', 'apple', 'iphone', 'flagship', 'titanium', 'camera', 'premium'],
    specs: {
      'Display': '6.1-inch Super Retina XDR OLED ProMotion',
      'Processor': 'Apple A17 Pro (3nm)',
      'RAM / Storage': '8GB / 128GB',
      'Battery': '3,274 mAh',
      'Weight': '187g'
    },
    inStock: true
  },

  // ==================== LAPTOPS ====================
  {
    id: 'laptop-1',
    name: 'Apple MacBook Air 13" (M2, 16GB)',
    brand: 'Apple',
    category: 'laptops',
    price: 89900,
    originalPrice: 99900,
    rating: 4.9,
    reviewsCount: 3100,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    description: 'Incredibly thin and fast laptop with Apple M2 chip, silent fanless design, and up to 18 hours of battery life for coding and college.',
    features: [
      'Apple M2 chip with 8-core CPU and 10-core GPU',
      'Liquid Retina display with 500 nits brightness',
      'Up to 18 hours battery life',
      'Silent, completely fanless acoustic design',
      'MagSafe 3 charging and dual Thunderbolt ports'
    ],
    tags: ['laptop', 'macbook', 'coding', 'programming', 'lightweight', 'apple', 'students', 'under 100000', 'under 1 lakh'],
    specs: {
      'Display': '13.6-inch Liquid Retina (2560x1664)',
      'Processor': 'Apple M2 8-core',
      'RAM / Storage': '16GB Unified / 256GB SSD',
      'Battery': '52.6 Wh (Up to 18h)',
      'Weight': '1.24 kg'
    },
    inStock: true,
    popular: true
  },
  {
    id: 'laptop-2',
    name: 'Acer Swift Go 14 (OLED Intel Core Ultra)',
    brand: 'Acer',
    category: 'laptops',
    price: 59990,
    originalPrice: 72990,
    rating: 4.5,
    reviewsCount: 520,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    description: 'Vibrant 2.8K 90Hz OLED screen paired with Intel Core Ultra 5 and AI Boost engine in an ultra-portable aluminum chassis.',
    features: [
      '14" 2.8K 90Hz 100% DCI-P3 OLED display',
      'Intel Core Ultra 5 125H processor with Intel Arc Graphics',
      'Dedicated Intel AI NPU for Copilot and video background effects',
      '1440p QHD webcam with temporal noise reduction',
      'Thin aluminum chassis weighing only 1.3kg'
    ],
    tags: ['laptop', 'oled', 'under 60000', 'under 70000', 'budget laptop', 'students', 'office', 'lightweight', 'intel'],
    specs: {
      'Display': '14-inch 2.8K (2880x1800) OLED 90Hz',
      'Processor': 'Intel Core Ultra 5 125H',
      'RAM / Storage': '16GB LPDDR5X / 512GB PCIe Gen4',
      'Battery': '65 Wh (Up to 12h)',
      'Weight': '1.32 kg'
    },
    inStock: true
  },
  {
    id: 'laptop-3',
    name: 'Lenovo Legion Slim 5 Gaming Laptop (RTX 4060)',
    brand: 'Lenovo',
    category: 'laptops',
    price: 112990,
    originalPrice: 129990,
    rating: 4.7,
    reviewsCount: 880,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
    description: 'Pure gaming and 3D creative horsepower with AMD Ryzen 7 8845HS and NVIDIA GeForce RTX 4060 graphics.',
    features: [
      'NVIDIA GeForce RTX 4060 8GB GDDR6 GPU (140W TGP)',
      'AMD Ryzen 7 8845HS 8-core / 16-thread processor',
      '16" WQXGA (2560x1600) 165Hz IPS gaming display',
      'Legion ColdFront 5.0 advanced thermal cooling',
      'Legion TrueStrike keyboard with anti-ghosting'
    ],
    tags: ['laptop', 'gaming', 'rtx 4060', 'video editing', '3d modeling', 'heavy work', 'lenovo', 'high performance'],
    specs: {
      'Display': '16-inch WQXGA 165Hz 100% sRGB',
      'Processor': 'AMD Ryzen 7 8845HS',
      'RAM / Storage': '16GB DDR5 / 1TB NVMe SSD',
      'GPU': 'RTX 4060 8GB',
      'Weight': '2.3 kg'
    },
    inStock: true
  },

  // ==================== AUDIO ====================
  {
    id: 'audio-1',
    name: 'Sony WH-1000XM5 Wireless ANC Headphones',
    brand: 'Sony',
    category: 'audio',
    price: 29990,
    originalPrice: 34990,
    rating: 4.8,
    reviewsCount: 4200,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
    description: 'Industry-leading noise canceling headphones with dual processors and 8 microphones for unmatched silence and crystal calls.',
    features: [
      'Two processors and 8 microphones for auto-optimizing ANC',
      'Up to 30 hours battery life with quick charging',
      'Crystal clear hands-free calling with AI voice beamforming',
      'Multipoint Bluetooth connection to switch between devices',
      'Ultra-comfortable, lightweight soft fit leather'
    ],
    tags: ['audio', 'headphones', 'anc', 'noise cancelling', 'travel', 'wireless', 'sony', 'audiophile', 'under 30000'],
    specs: {
      'Driver': '30mm carbon fiber composite',
      'Battery': '30h (ANC on) / 40h (ANC off)',
      'Connectivity': 'Bluetooth 5.2 / LDAC / 3.5mm jack',
      'Weight': '250g'
    },
    inStock: true,
    popular: true
  },
  {
    id: 'audio-2',
    name: 'Anker Soundcore Life Q30 Hybrid ANC',
    brand: 'Anker',
    category: 'audio',
    price: 6499,
    originalPrice: 7999,
    rating: 4.5,
    reviewsCount: 6500,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    description: 'The best budget active noise cancelling headphones with hybrid ANC, customizable EQ, and 40-60 hours of playtime.',
    features: [
      'Hybrid active noise cancellation (Transport, Outdoor, Indoor)',
      'Hi-Res Audio certified with 40mm silk diaphragm drivers',
      '40-hour playtime in ANC mode (60 hours normal mode)',
      'Soundcore companion app with 22 EQ presets',
      'Fast 5-minute charge gives 4 hours of music'
    ],
    tags: ['audio', 'headphones', 'budget', 'under 10000', 'under 7000', 'anc', 'noise cancelling', 'anker', 'long battery'],
    specs: {
      'Driver': '40mm dynamic drivers',
      'Battery': '40-60 hours',
      'Weight': '260g'
    },
    inStock: true
  },
  {
    id: 'audio-3',
    name: 'boAt Rockerz 550 Wireless Bluetooth Headphones',
    brand: 'boAt',
    category: 'audio',
    price: 1799,
    originalPrice: 4999,
    rating: 4.3,
    reviewsCount: 12400,
    image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80',
    description: 'Thumping bass headphones with 50mm dynamic drivers, 20 hours battery, and physical noise isolation earcups.',
    features: [
      '50mm dynamic audio drivers tuned for deep punchy bass',
      '20 hours of non-stop playback on a single charge',
      'Plush padded earcups for comfortable long sessions',
      'Dual mode: Bluetooth v5.0 and 3.5mm AUX cable'
    ],
    tags: ['audio', 'headphones', 'budget', 'cheap headphones', 'under 2000', 'under 3000', 'boat', 'bass'],
    specs: {
      'Driver': '50mm Bass Drivers',
      'Battery': '20 hours',
      'Connectivity': 'Bluetooth 5.0 / AUX'
    },
    inStock: true
  },
  {
    id: 'audio-4',
    name: 'Apple AirPods Pro (2nd Gen, USB-C)',
    brand: 'Apple',
    category: 'audio',
    price: 20999,
    originalPrice: 24900,
    rating: 4.8,
    reviewsCount: 5400,
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80',
    description: 'Up to 2x more active noise cancellation, Adaptive Audio, and personalized Spatial Audio with dynamic head tracking.',
    features: [
      'Apple H2 headphone chip delivering smarter noise cancellation',
      'Adaptive Audio dynamically blends Transparency and ANC',
      'Conversation Awareness lowers volume when you speak',
      'MagSafe Charging Case (USB-C) with speaker and lanyard loop'
    ],
    tags: ['audio', 'earbuds', 'in-ear', 'apple', 'anc', 'wireless', 'airpods', 'iphone companion', 'under 25000'],
    specs: {
      'Chip': 'Apple H2 chip',
      'Battery': '6 hours per charge (30 hours with case)',
      'Water Resistance': 'IP54',
      'Weight': '5.3g per earbud'
    },
    inStock: true,
    popular: true
  },

  // ==================== HOME & KITCHEN ====================
  {
    id: 'home-1',
    name: 'Philips Digital Air Fryer HD9252 (4.1L)',
    brand: 'Philips',
    category: 'home',
    price: 7999,
    originalPrice: 11995,
    rating: 4.7,
    reviewsCount: 6200,
    image: 'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?auto=format&fit=crop&w=800&q=80',
    description: 'Rapid Air technology fries with up to 90% less fat. Touch screen with 7 presets for samosas, fries, chicken, and baking.',
    features: [
      'Rapid Air Technology with unique starfish design for even, crispy frying',
      'Touchscreen with 7 preset cooking programs',
      'Keep warm function keeps meals ready for up to 30 minutes',
      'Dishwasher-safe non-stick basket and pan'
    ],
    tags: ['home', 'kitchen', 'air fryer', 'cooking', 'healthy cooking', 'philips', 'under 10000', 'appliances'],
    specs: {
      'Capacity': '4.1 Litres',
      'Power': '1400 Watts',
      'Temperature': 'Up to 200°C'
    },
    inStock: true,
    popular: true
  },
  {
    id: 'home-2',
    name: 'Wonderchef Regalia Espresso Coffee Machine (15 Bar)',
    brand: 'Wonderchef',
    category: 'home',
    price: 8499,
    originalPrice: 12000,
    rating: 4.5,
    reviewsCount: 1450,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80',
    description: 'Authentic 15-bar Italian pressure espresso and cappuccino maker with high-pressure steam frother wand.',
    features: [
      '15-bar pressure Italian pump delivers rich crema and aromatic coffee',
      'Stainless steel steam frother wand for velvety cappuccinos and lattes',
      'Die-cast aluminum alloy boiler with dual thermostat control',
      'Detachable transparent 1.5L water tank and drip tray'
    ],
    tags: ['home', 'kitchen', 'coffee machine', 'espresso', 'cappuccino', 'wonderchef', 'coffee', 'under 10000'],
    specs: {
      'Pressure': '15 Bar Italian Pump',
      'Tank Capacity': '1.5 Litres',
      'Power': '1050 Watts'
    },
    inStock: true
  },

  // ==================== WEARABLES ====================
  {
    id: 'watch-1',
    name: 'Garmin Forerunner 265 Running GPS Watch',
    brand: 'Garmin',
    category: 'wearables',
    price: 44990,
    originalPrice: 48990,
    rating: 4.8,
    reviewsCount: 740,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    description: 'The ultimate GPS running smartwatch with brilliant AMOLED touchscreen, training readiness metrics, and 13 days of battery.',
    features: [
      '1.3" colorful AMOLED touchscreen display',
      'Morning Report with sleep score, HRV status, and workout suggestions',
      'Multi-band GPS for pinpoint pacing accuracy',
      'Training Readiness and Recovery Time insights',
      'Up to 13 days of battery life in smartwatch mode'
    ],
    tags: ['wearable', 'smartwatch', 'fitness', 'running', 'marathon', 'garmin', 'gps', 'sports', 'under 50000'],
    specs: {
      'Display': '1.3" AMOLED 416x416',
      'Battery': 'Up to 13 days (20 hrs in GPS mode)',
      'Water Rating': '5 ATM (50 meters)',
      'Weight': '47g'
    },
    inStock: true
  },
  {
    id: 'watch-2',
    name: 'Apple Watch Series 9 (GPS 41mm)',
    brand: 'Apple',
    category: 'wearables',
    price: 38900,
    originalPrice: 41900,
    rating: 4.7,
    reviewsCount: 2200,
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
    description: 'Powerful S9 SiP with Double Tap gesture, brighter display, on-device Siri, and advanced health & ECG sensors.',
    features: [
      'Double tap gesture for magical one-handed interactions',
      'Edge-to-edge Always-On Retina display (up to 2000 nits)',
      'ECG app and Blood Oxygen sensor',
      'Crash Detection & Fall Detection for emergency SOS'
    ],
    tags: ['wearable', 'smartwatch', 'apple', 'health', 'ecg', 'fitness', 'iphone companion', 'under 40000'],
    specs: {
      'Chip': 'S9 SiP dual-core',
      'Display': 'OLED Always-On 2000 nits',
      'Battery': '18 hours (36h Low Power Mode)',
      'Weight': '38.7g'
    },
    inStock: true,
    popular: true
  },
  {
    id: 'watch-3',
    name: 'Amazfit GTR 4 Classic Smartwatch',
    brand: 'Amazfit',
    category: 'wearables',
    price: 16999,
    originalPrice: 19999,
    rating: 4.4,
    reviewsCount: 680,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80',
    description: 'Classic round design with 14-day ultra battery life, dual-band GPS tracking, and 150+ sports modes.',
    features: [
      'Ultra-long 14-day battery life on a single charge',
      'Dual-band circularly-polarized GPS antenna system',
      '1.43" HD AMOLED display with anti-glare glass bezel',
      'Bluetooth phone calls and local music storage'
    ],
    tags: ['wearable', 'smartwatch', 'budget', 'under 20000', 'long battery', 'fitness', 'sports'],
    specs: {
      'Display': '1.43-inch AMOLED',
      'Battery': '14 days typical use',
      'Water Rating': '5 ATM',
      'Weight': '34g (without strap)'
    },
    inStock: true
  },

  // ==================== GAMING ====================
  {
    id: 'gaming-1',
    name: 'Valve Steam Deck OLED (512GB)',
    brand: 'Valve',
    category: 'gaming',
    price: 56990,
    originalPrice: 62990,
    rating: 4.9,
    reviewsCount: 1650,
    image: 'https://images.unsplash.com/photo-1612287233649-752178051287?auto=format&fit=crop&w=800&q=80',
    description: 'Handheld gaming PC powerhouse featuring a stunning 7.4" 90Hz HDR OLED screen and 50Wh battery for on-the-go AAA PC gaming.',
    features: [
      '7.4" 90Hz HDR OLED display with 1,000,000:1 contrast ratio',
      '6nm AMD APU for improved thermal efficiency and speed',
      '50Wh battery providing 3-12 hours of gameplay',
      'Wi-Fi 6E for ultra-fast game downloads'
    ],
    tags: ['gaming', 'handheld', 'pc gaming', 'steam', 'portable', 'oled', 'console', 'under 60000'],
    specs: {
      'Display': '7.4" OLED 90Hz HDR 1000 nits',
      'APU': '6nm AMD Zen 2 (4c/8t) + RDNA 2',
      'Storage': '512GB NVMe SSD',
      'Battery': '50Wh'
    },
    inStock: true,
    popular: true
  },
  {
    id: 'gaming-2',
    name: 'Sony PlayStation 5 Slim Digital Edition',
    brand: 'Sony',
    category: 'gaming',
    price: 44990,
    originalPrice: 49990,
    rating: 4.8,
    reviewsCount: 3800,
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
    description: 'Sleek, slimmed-down console design packing 1TB of ultra-high speed SSD storage, ray tracing, and 120fps capability.',
    features: [
      '1TB built-in high speed SSD storage',
      'DualSense wireless controller with haptic feedback and adaptive triggers',
      'Tempest 3D AudioTech for immersive soundscapes',
      'Support for 4K 120Hz TVs'
    ],
    tags: ['gaming', 'console', 'ps5', 'playstation', 'sony', 'under 50000', '4k gaming'],
    specs: {
      'Processor': 'Custom AMD Zen 2 8-core',
      'GPU': 'AMD RDNA 2 10.3 TFLOPs',
      'Storage': '1TB NVMe SSD'
    },
    inStock: true
  },
  {
    id: 'gaming-3',
    name: 'Nintendo Switch OLED Model',
    brand: 'Nintendo',
    category: 'gaming',
    price: 29999,
    originalPrice: 34999,
    rating: 4.8,
    reviewsCount: 4500,
    image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=800&q=80',
    description: 'Play at home on the TV or on-the-go with a vibrant 7-inch OLED screen, wide adjustable stand, and enhanced audio.',
    features: [
      '7-inch OLED screen with vivid colors and crisp contrast',
      'Wide adjustable tabletop stand for comfortable multiplayer',
      'Play anywhere in TV mode, Tabletop mode, or Handheld mode'
    ],
    tags: ['gaming', 'nintendo', 'switch', 'handheld', 'family', 'portable', 'under 30000', 'under 35000'],
    specs: {
      'Display': '7.0-inch OLED 720p',
      'Storage': '64GB internal (expandable)'
    },
    inStock: true
  },

  // ==================== ACCESSORIES & CAMERAS ====================
  {
    id: 'camera-1',
    name: 'Sony ZV-E10 Mirrorless Camera Body',
    brand: 'Sony',
    category: 'cameras',
    price: 59990,
    originalPrice: 69990,
    rating: 4.6,
    reviewsCount: 710,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    description: 'Large 24.2 MP APS-C sensor camera engineered for content creators with 4K video, flip screen, and directional 3-capsule mic.',
    features: [
      '24.2 MP APS-C Exmor CMOS sensor',
      'Fast Hybrid AF with Real-time Eye AF for humans and animals',
      'Product Showcase Setting for beauty and tech reviews',
      'Side-opening vari-angle LCD touch screen'
    ],
    tags: ['camera', 'vlogging', 'youtube', 'content creator', 'video', 'mirrorless', 'sony', 'under 60000'],
    specs: {
      'Sensor': '24.2MP APS-C',
      'Video': '4K at 30fps / 1080p at 120fps'
    },
    inStock: true
  },
  {
    id: 'acc-1',
    name: 'Logitech MX Master 3S Wireless Mouse',
    brand: 'Logitech',
    category: 'accessories',
    price: 8995,
    originalPrice: 10995,
    rating: 4.9,
    reviewsCount: 5200,
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80',
    description: 'Iconic ergonomic productivity mouse with 8K DPI any-surface tracking and 90% quieter clicks for coders and creators.',
    features: [
      'MagSpeed electromagnetic scrolling - 1,000 lines in 1 second',
      '8,000 DPI sensor tracks on glass and any surface',
      'Quiet clicks with 90% reduced click noise',
      'App-specific customizations and cross-computer Flow control'
    ],
    tags: ['accessories', 'mouse', 'productivity', 'office', 'coding', 'ergonomic', 'under 10000', 'logitech'],
    specs: {
      'DPI': '200 to 8000 DPI',
      'Battery': 'Up to 70 days per full charge'
    },
    inStock: true,
    popular: true
  },
  {
    id: 'acc-2',
    name: 'Anker Prime 20,000mAh Power Bank (200W)',
    brand: 'Anker',
    category: 'accessories',
    price: 9999,
    originalPrice: 12999,
    rating: 4.7,
    reviewsCount: 1120,
    image: 'https://images.unsplash.com/photo-1609592426867-0c7f12e1dfdf?auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-high 200W total output portable charger capable of fast-charging two laptops simultaneously with smart digital display.',
    features: [
      '200W total multi-device output (up to 100W per port)',
      '20,000 mAh capacity charges a laptop or multiple phones fast',
      'Smart digital display reveals battery percentage and live wattage'
    ],
    tags: ['accessories', 'power bank', 'charger', 'portable', 'travel', 'anker', 'fast charging', 'under 10000'],
    specs: {
      'Capacity': '20,000 mAh',
      'Max Output': '200W Total'
    },
    inStock: true
  }
];

export const SAMPLE_QUERIES = [
  { label: '🎸 Acoustic guitar under ₹10,000', query: 'I want an acoustic guitar for music under ₹10,000' },
  { label: '☕ Specialty coffee & chocolates', query: 'Show me artisanal coffee beans, gourmet dark chocolate, and snacks' },
  { label: '📱 Phone under ₹30,000', query: 'Best 5G smartphone under ₹30,000 with great camera' },
  { label: '🎹 Piano keyboard for music', query: 'Electronic keyboard piano instrument for learning music under ₹15,000' },
  { label: '🎧 Noise cancelling headphones', query: 'Wireless noise cancelling headphones under ₹10,000' },
  { label: '🍳 Kitchen appliances', query: 'Healthy cooking appliances like air fryer or coffee maker under ₹10,000' }
];
