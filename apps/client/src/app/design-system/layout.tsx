import type { Metadata } from 'next';
import './design-system.css';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function DesignSystemLayout({
  children,
}: LayoutProps<'/design-system'>) {
  return children;
}
