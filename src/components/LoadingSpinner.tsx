/**
 * LoadingSpinner Component
 * A visually pleasing loading indicator used throughout the application.
 * 
 * Features:
 * - Smooth animation with CSS transitions
 * - Consistent sizing and colors
 * - Accessible loading state indication
 * - Minimal impact on performance
 */

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      {/* Animated spinner with gradient border */}
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
} 