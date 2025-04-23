import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  channel: string;
  duration: string;
  views: string;
  uploadDate: string;
  youtubeId: string;
}

const initialVideos: Video[] = [
  {
    id: '1',
    title: 'Natural Everyday Makeup Tutorial',
    thumbnail: 'https://www.youtube.com/watch?v=E0HhlxxA1w4&pp=ygUbYmVhdXR5IHRpcHMgYnkgZm9yZWlnbiBnaXJs',
    channel: 'Wayne Goss',
    duration: '12:34',
    views: '1.2M',
    uploadDate: '2 weeks ago',
    youtubeId: '0KJ6i0QwXk4'
  },
  {
    id: '2',
    title: '5-Minute Natural Makeup Routine',
    thumbnail: 'https://img.youtube.com/vi/8Z0qQHdUQ1w/maxresdefault.jpg',
    channel: 'Lisa Eldridge',
    duration: '5:20',
    views: '856K',
    uploadDate: '1 month ago',
    youtubeId: '8Z0qQHdUQ1w'
  },
  {
    id: '3',
    title: 'Beginner Friendly Makeup Tutorial',
    thumbnail: 'https://img.youtube.com/vi/3xMqJmMcME0/maxresdefault.jpg',
    channel: 'Robert Welsh',
    duration: '15:45',
    views: '2.3M',
    uploadDate: '3 days ago',
    youtubeId: '3xMqJmMcME0'
  },
  {
    id: '4',
    title: 'Professional Makeup Tips & Tricks',
    thumbnail: 'https://img.youtube.com/vi/4Y14XwU2k9Q/maxresdefault.jpg',
    channel: 'Alexandra Anele',
    duration: '18:12',
    views: '1.5M',
    uploadDate: '1 week ago',
    youtubeId: '4Y14XwU2k9Q'
  }
];

const VideoTutorials = () => {
  const [videos, setVideos] = useState<Video[]>(initialVideos);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    video.channel.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleVideoSelect = (video: Video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">Makeup Tutorials</h1>
        <div className="relative w-full md:w-64">
          <Input
            type="text"
            placeholder="Search tutorials..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {selectedVideo ? (
        <div className="mb-8">
          <div className="relative pb-[56.25%] h-0 mb-4">
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
              title={selectedVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg"
            />
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold mb-2">{selectedVideo.title}</h2>
              <p className="text-gray-600">{selectedVideo.channel}</p>
            </div>
            <Button
              variant="outline"
              onClick={() => setSelectedVideo(null)}
            >
              Back to Videos
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVideos.map((video) => (
            <Card
              key={video.id}
              className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleVideoSelect(video)}
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{video.title}</h3>
                <p className="text-gray-600 text-sm mb-1">{video.channel}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{video.views} views</span>
                  <span>{video.uploadDate}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoTutorials; 