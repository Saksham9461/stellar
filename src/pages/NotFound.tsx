import React from 'react';
import { ShieldAlert } from 'lucide-react';
import Button from '../components/Button';
import Badge from '../components/Badge';

export const NotFound: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col items-center justify-center text-center gap-6 min-h-[60vh] relative">
      {/* Background soft glowing blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none" />

      <Badge variant="cyan">404 Error</Badge>

      <div className="p-4 rounded-full bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
        <ShieldAlert className="w-10 h-10" />
      </div>

      <h1 className="font-display font-black text-4xl sm:text-5xl text-gray-900 dark:text-white tracking-tight mt-2">
        Code Path Not Resolved
      </h1>

      <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md leading-relaxed">
        The requested routing URL does not resolve to an active page node inside our application files. Let's redirect you.
      </p>

      <div className="pt-4">
        <Button to="/" variant="primary">
          Return to Safe Node (Home)
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
