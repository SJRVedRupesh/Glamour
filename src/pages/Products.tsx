
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Filter, ShoppingBag, ExternalLink, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { getProductRecommendations } from '@/lib/productRecommendations';
import { Product } from '@/types/product';

const Products = () => {
  const { toast } = useToast();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    // Get stored quiz answers
    const quizAnswers = localStorage.getItem('quizAnswers');
    let parsedAnswers = {};
    
    if (quizAnswers) {
      try {
        parsedAnswers = JSON.parse(quizAnswers);
      } catch (e) {
        console.error('Error parsing quiz answers:', e);
      }
    }
    
    // Get product recommendations
    const recommendedProducts = getProductRecommendations(parsedAnswers);
    setProducts(recommendedProducts);
    setFilteredProducts(recommendedProducts);
    setLoading(false);
    
    // Get saved wishlist
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      try {
        setWishlist(JSON.parse(storedWishlist));
      } catch (e) {
        console.error('Error parsing wishlist:', e);
      }
    }
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  };

  const toggleWishlist = (productId: string) => {
    let newWishlist;
    
    if (wishlist.includes(productId)) {
      newWishlist = wishlist.filter(id => id !== productId);
      toast({
        description: "Product removed from wishlist",
      });
    } else {
      newWishlist = [...wishlist, productId];
      toast({
        description: "Product added to wishlist",
      });
    }
    
    setWishlist(newWishlist);
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
  };

  const buildShoppingUrl = (product: Product) => {
    // Simplified for demo - would normally use actual affiliate links
    return `https://www.google.com/search?q=${encodeURIComponent(product.brand + ' ' + product.name)}`;
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div 
          className="text-center mb-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-3xl md:text-4xl font-bold font-playfair">Your Recommended Products</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Based on your quiz answers, here are the perfect products for your beauty routine.
          </p>
        </motion.div>
        
        <div className="mb-8">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex items-center justify-between">
              <TabsList className="bg-beauty-pink-light/50">
                <TabsTrigger 
                  value="all" 
                  onClick={() => handleCategoryChange('all')}
                  className="data-[state=active]:bg-beauty-pink-dark data-[state=active]:text-white"
                >
                  All Products
                </TabsTrigger>
                <TabsTrigger 
                  value="face" 
                  onClick={() => handleCategoryChange('face')}
                  className="data-[state=active]:bg-beauty-pink-dark data-[state=active]:text-white"
                >
                  Face
                </TabsTrigger>
                <TabsTrigger 
                  value="eyes" 
                  onClick={() => handleCategoryChange('eyes')}
                  className="data-[state=active]:bg-beauty-pink-dark data-[state=active]:text-white"
                >
                  Eyes
                </TabsTrigger>
                <TabsTrigger 
                  value="lips" 
                  onClick={() => handleCategoryChange('lips')}
                  className="data-[state=active]:bg-beauty-pink-dark data-[state=active]:text-white"
                >
                  Lips
                </TabsTrigger>
                <TabsTrigger 
                  value="skincare" 
                  onClick={() => handleCategoryChange('skincare')}
                  className="data-[state=active]:bg-beauty-pink-dark data-[state=active]:text-white"
                >
                  Skincare
                </TabsTrigger>
              </TabsList>
              
              <Button variant="outline" size="sm" className="hidden md:flex">
                <Filter className="mr-2 h-4 w-4" /> Filter
              </Button>
            </div>
            
            {loading ? (
              <div className="py-16 text-center">
                <div className="inline-block animate-pulse-soft">
                  <div className="h-6 w-40 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 w-64 bg-gray-200 rounded"></div>
                </div>
              </div>
            ) : (
              <TabsContent value={selectedCategory || 'all'} className="mt-6">
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <motion.div key={product.id} variants={fadeIn}>
                        <Card className="beauty-card h-full">
                          <CardContent className="p-0">
                            <div className="relative">
                              <div className="aspect-[3/4] overflow-hidden rounded-t-lg">
                                <img 
                                  src={product.imageUrl} 
                                  alt={product.name}
                                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                              </div>
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                className="absolute top-2 right-2 bg-white/70 backdrop-blur-sm hover:bg-white"
                                onClick={() => toggleWishlist(product.id)}
                              >
                                <Heart 
                                  className={`h-5 w-5 ${wishlist.includes(product.id) ? 'fill-beauty-pink-dark text-beauty-pink-dark' : 'text-gray-600'}`}
                                />
                              </Button>
                              {product.tag && (
                                <Badge className="absolute top-2 left-2 bg-beauty-pink-dark text-white">
                                  {product.tag}
                                </Badge>
                              )}
                            </div>
                            <div className="p-4">
                              <div className="flex items-center justify-between mb-1">
                                <p className="text-sm text-beauty-pink-dark font-medium">{product.brand}</p>
                                <div className="flex items-center">
                                  <Star className="w-4 h-4 text-beauty-gold fill-beauty-gold" />
                                  <span className="text-sm ml-1">{product.rating}</span>
                                </div>
                              </div>
                              <h3 className="font-semibold mb-1">{product.name}</h3>
                              <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                              <Separator className="my-3" />
                              <div className="flex items-center justify-between">
                                <p className="font-semibold">{product.price}</p>
                                <div className="flex space-x-2">
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    className="border-beauty-pink-dark text-beauty-pink-dark hover:bg-beauty-pink-light"
                                    asChild
                                  >
                                    <a href={buildShoppingUrl(product)} target="_blank" rel="noopener noreferrer">
                                      <ExternalLink className="h-4 w-4 mr-1" /> View
                                    </a>
                                  </Button>
                                  <Button 
                                    size="sm"
                                    className="bg-beauty-pink-dark hover:bg-beauty-pink text-white"
                                  >
                                    <ShoppingBag className="h-4 w-4 mr-1" /> Buy
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))
                  ) : (
                    <div className="col-span-full py-16 text-center">
                      <p className="text-lg text-gray-500">No products found in this category.</p>
                    </div>
                  )}
                </motion.div>
              </TabsContent>
            )}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Products;
