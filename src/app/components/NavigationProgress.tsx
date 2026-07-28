import { useEffect, useState } from 'react';
import { useNavigation } from 'react-router';

export function NavigationProgress() {
  const navigation = useNavigation();
  const isLoading = navigation.state !== 'idle';
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setVisible(true);
      return;
    }
    if (!visible) return;
    const timeout = setTimeout(() => setVisible(false), 250);
    return () => clearTimeout(timeout);
  }, [isLoading, visible]);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[100] overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className={`h-full bg-[var(--warm-orange)] transition-[width,opacity] ease-out ${
          isLoading ? 'w-4/5 opacity-100 duration-[4000ms]' : 'w-full opacity-0 duration-200'
        }`}
      />
    </div>
  );
}
