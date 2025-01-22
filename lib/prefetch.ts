import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function usePrefetch(paths: string[]) {
  const router = useRouter();

  useEffect(() => {
    paths.forEach((path) => {
      router.prefetch(path);
    });
  }, [router, paths]);
}

export function useIntersectionPrefetch(paths: string[]) {
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const path = entry.target.getAttribute('data-prefetch');
            if (path) {
              router.prefetch(path);
            }
          }
        });
      },
      { rootMargin: '50px' }
    );

    document.querySelectorAll('[data-prefetch]').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [router]);
}