import type { Metadata } from 'next';
import { BlurSection } from './_components/blur-section';
import { BorderRadiusSection } from './_components/border-radius-section';
import { ColorsSection } from './_components/colors-section';
import { GridSection } from './_components/grid-section';
import { OtherTokensSection } from './_components/other-tokens-section';
import { ShadowsSection } from './_components/shadows-section';
import { SpacingSection } from './_components/spacing-section';
import { TokenValueProvider } from './_components/token-value-provider';
import { TypographySection } from './_components/typography-section';
import './tokens-showcase.css';

export const metadata: Metadata = {
  title: 'CSS Tokens',
  description: 'A reference for the CSS design tokens used by the application.',
};

export default function TokensPage() {
  return (
    <TokenValueProvider>
      <main id="tokensShowcase">
        <header className="hero">
          <p className="eyebrow">Design system / Foundations</p>
          <h1 className="pageTitle">CSS Tokens</h1>
          <p className="intro">
            A practical reference to the colors, typography, spacing, and layout
            foundations currently defined in the application.
          </p>
          <div className="heroMeta">
            <span>Source: existing CSS theme</span>
            <span>Font: Inter via next/font</span>
          </div>
        </header>

        <ColorsSection />
        <TypographySection />
        <SpacingSection />
        <BorderRadiusSection />
        <ShadowsSection />
        <BlurSection />
        <GridSection />
        <OtherTokensSection />

        <footer className="footer">
          Token values are read from the computed CSS custom properties loaded
          by the application.
        </footer>
      </main>
    </TokenValueProvider>
  );
}
