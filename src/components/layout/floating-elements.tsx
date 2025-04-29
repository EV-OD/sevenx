import { cn } from '@/lib/utils';

const FloatingElements = () => {
  // Define positions and styles for floating elements
  // Adjust number, positions, sizes, delays as needed for desired effect
  const elements = [
    { style: 'top-1/4 left-1/4 w-16 h-16 bg-primary/10 rounded-full animate-float animation-delay-200' },
    { style: 'bottom-1/3 right-1/4 w-20 h-20 bg-secondary/20 border border-border rounded-lg animate-float-reverse animation-delay-400' },
    { style: 'top-1/2 right-1/6 w-12 h-12 bg-primary/5 rounded-md animate-float' },
    { style: 'bottom-1/4 left-1/5 w-24 h-8 bg-secondary/10 border border-border/50 rounded-sm animate-float-reverse animation-delay-600' },
     { style: 'top-1/5 right-2/5 w-10 h-10 bg-primary/15 rounded-full animate-float animation-delay-300' },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {elements.map((el, index) => (
        <div
          key={index}
          className={cn(
            'absolute blur-sm', // Added blur for softer effect
            el.style
          )}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
```