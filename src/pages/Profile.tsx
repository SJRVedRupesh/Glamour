import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Settings, Heart, ShoppingBag } from 'lucide-react';

const Profile = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Card className="p-6 mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="h-10 w-10 text-gray-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">User Name</h1>
              <p className="text-gray-600">user@email.com</p>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Settings className="h-5 w-5 mr-2" />
              Account Settings
            </h2>
            <Button variant="outline" className="w-full mb-2">Edit Profile</Button>
            <Button variant="outline" className="w-full mb-2">Change Password</Button>
            <Button variant="outline" className="w-full">Notification Settings</Button>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Heart className="h-5 w-5 mr-2" />
              Favorites
            </h2>
            <p className="text-gray-600">No favorite items yet</p>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <ShoppingBag className="h-5 w-5 mr-2" />
              Order History
            </h2>
            <p className="text-gray-600">No orders yet</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile; 