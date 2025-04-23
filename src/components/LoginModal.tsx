import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal = ({ onClose }: LoginModalProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login functionality
    console.log('Login attempt with:', { email, password });
  };

  return (
    <div className="absolute right-0 top-16 w-80 bg-white rounded-md shadow-lg border border-gray-200 p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Login</h3>
        <button
          type="button"
          aria-label="Close login"
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
      
      <div className="mt-4 text-center text-sm">
        <p>
          Don't have an account?{' '}
          <button className="text-beauty-pink-dark hover:underline">
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginModal; 