import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Glam Guru</h1>
        <p className="text-xl text-gray-600 mb-8">Your personal makeup assistant</p>
        <Link to="/quiz">
          <Button className="bg-beauty-pink-dark hover:bg-beauty-pink text-white">
            Take the Makeup Quiz
          </Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Video Tutorials</h2>
          <p className="text-gray-600 mb-4">Learn makeup techniques from experts</p>
          <Link to="/tutorials">
            <Button variant="outline">Watch Tutorials</Button>
          </Link>
        </Card>
        
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Product Recommendations</h2>
          <p className="text-gray-600 mb-4">Discover products perfect for you</p>
          <Link to="/products">
            <Button variant="outline">Browse Products</Button>
          </Link>
        </Card>
        
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Personalized Advice</h2>
          <p className="text-gray-600 mb-4">Get customized makeup tips</p>
          <Link to="/quiz">
            <Button variant="outline">Get Started</Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Home; 