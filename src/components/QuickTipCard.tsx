
import { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface QuickTipCardProps {
  title: string;
  content: string;
  icon: ReactNode;
}

const QuickTipCard = ({ title, content, icon }: QuickTipCardProps) => {
  return (
    <Card className="beauty-card hover:translate-y-[-5px] transition-transform duration-300">
      <CardContent className="p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-4">
            <div className="p-3 bg-white shadow-sm rounded-full">
              {icon}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-gray-600">{content}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickTipCard;
