import { gridProperties } from '../token-data';
import { SectionHeading } from './section-heading';
import { TokenValue } from './token-value';

export function OtherTokensSection() {
  return (
    <section className="section" aria-labelledby="other-heading">
      <SectionHeading
        id="other-heading"
        number="08"
        title="Other design tokens"
        description="Additional token types are included only when present in the current CSS sources."
      />
      <div className="otherTokens">
        <p>
          The theme also defines the font family and grid foundation tokens,
          documented above. No border-width, opacity, transition, or animation
          tokens are currently defined.
        </p>
        <span className="variable">Grid variables inspected</span>
        <div className="otherGrid">
          {gridProperties.map((name) => (
            <div className="otherToken" key={name}>
              <span>{name}</span>
              <TokenValue name={name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
