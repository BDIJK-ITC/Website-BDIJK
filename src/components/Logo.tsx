import React from 'react';
import { Code } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Code size={32} className="text-blue-600" />
    </div>
  );
};

export default Logo;