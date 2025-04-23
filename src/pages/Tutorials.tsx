import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, User, EyeIcon, Filter, ChevronDown, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getTutorials } from '@/lib/tutorialData';
import { Tutorial } from '@/types/tutorial';
import VideoTutorials from '@/components/VideoTutorials';

const Tutorials = () => {
  const [tutorials, setTutorials] = useState<Tutorial[]>(getTutorials());
  const [filteredTutorials, setFilteredTutorials] = useState<Tutorial[]>(getTutorials());
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [difficulty, setDifficulty] = useState('all');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    filterTutorials(category, difficulty);
  };

  const handleDifficultyChange = (value: string) => {
    setDifficulty(value);
    filterTutorials(selectedCategory, value);
  };

  const filterTutorials = (category: string, difficultyLevel: string) => {
    let filtered = [...tutorials];
    
    if (category !== 'all') {
      filtered = filtered.filter(tutorial => tutorial.category === category);
    }
    
    if (difficultyLevel !== 'all') {
      filtered = filtered.filter(tutorial => tutorial.difficulty === difficultyLevel);
    }
    
    setFilteredTutorials(filtered);
  };

  const openTutorialDialog = (tutorial: Tutorial) => {
    setSelectedTutorial(tutorial);
    setIsDialogOpen(true);
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Makeup Tutorials & Guides</h1>
      
      <Tabs defaultValue="videos" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="videos">Video Tutorials</TabsTrigger>
          <TabsTrigger value="guides">Step-by-Step Guides</TabsTrigger>
          <TabsTrigger value="tips">Pro Tips</TabsTrigger>
        </TabsList>
        
        <TabsContent value="videos">
          <VideoTutorials />
        </TabsContent>
        
        <TabsContent value="guides">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Add your step-by-step guides content here */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Natural Makeup Look</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Start with a clean, moisturized face</li>
                <li>Apply a light foundation or BB cream</li>
                <li>Use concealer for any blemishes</li>
                <li>Add a natural blush to cheeks</li>
                <li>Define brows lightly</li>
                <li>Apply mascara and a nude lip color</li>
              </ol>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Evening Glam Look</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Prep skin with primer</li>
                <li>Apply full coverage foundation</li>
                <li>Contour and highlight</li>
                <li>Create a smokey eye look</li>
                <li>Add false lashes</li>
                <li>Finish with a bold lip color</li>
              </ol>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Quick 5-Minute Makeup</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Apply tinted moisturizer</li>
                <li>Use cream blush</li>
                <li>Quick brow fill</li>
                <li>One swipe of mascara</li>
                <li>Lip balm or gloss</li>
              </ol>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="tips">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Foundation Tips</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Always match foundation to your neck</li>
                <li>Use a damp beauty sponge for natural finish</li>
                <li>Set with translucent powder</li>
                <li>Blend down the neck</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Eye Makeup Tips</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Use primer to prevent creasing</li>
                <li>Start with light colors and build up</li>
                <li>Blend edges for seamless look</li>
                <li>Use waterproof mascara for longevity</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Lip Makeup Tips</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Exfoliate lips before application</li>
                <li>Use lip liner to prevent bleeding</li>
                <li>Apply with a brush for precision</li>
                <li>Blot and reapply for long wear</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Contouring Tips</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Use cream products before powder</li>
                <li>Blend thoroughly for natural look</li>
                <li>Highlight high points of face</li>
                <li>Use cool tones for shadows</li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Tutorials;
