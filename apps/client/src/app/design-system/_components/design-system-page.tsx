import type { ReactNode } from 'react';

type DesignSystemPageProps = {
  id: string;
  title: string;
  intro: string;
  headerContent?: ReactNode;
  children: ReactNode;
};

export function DesignSystemPage({
  id,
  title,
  intro,
  headerContent,
  children,
}: DesignSystemPageProps) {
  return (
    <main id={id}>
      <header className="hero">
        <p className="eyebrow">Design system / Foundations</p>
        <h1 className="pageTitle">{title}</h1>
        <p className="intro">{intro}</p>
        {headerContent}
      </header>
      {children}
    </main>
  );
}
