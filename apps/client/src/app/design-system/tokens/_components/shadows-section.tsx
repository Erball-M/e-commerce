import { shadowTokens } from '../token-data';
import { SectionHeading } from './section-heading';
import { TokenValue } from './token-value';

export function ShadowsSection() {
  return (
    <section className="section" aria-labelledby="shadows-heading">
      <SectionHeading
        id="shadows-heading"
        number="05"
        title="Shadows"
        description="Cards use the original shadow variables directly."
      />
      <div className="effectGrid">
        {shadowTokens.map((token) => (
          <article className="effectCard" key={token.name}>
            <div className={`shadowPreview ${token.utilityClass}`}>Shadow</div>
            <strong>{token.name}</strong>
            <span className="variable">{token.variable}</span>
            <TokenValue name={token.variable} />
          </article>
        ))}
      </div>
    </section>
  );
}
