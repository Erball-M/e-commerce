import { spacingTokens } from '../token-data';
import { SectionHeading } from './section-heading';
import { TokenValue } from './token-value';

export function SpacingSection() {
  return (
    <section className="section" aria-labelledby="spacing-heading">
      <SectionHeading
        id="spacing-heading"
        number="03"
        title="Spacing"
        description="The 24-step Figma spacing scale, verified against the theme values."
      />
      <div className="spacingList">
        {spacingTokens.map((token) => (
          <div className="spacingRow" key={token.name}>
            <strong>{token.name}</strong>
            <span className="variable">{token.variable}</span>
            <TokenValue name={token.variable} />
            <div className="spacingTrack">
              <div
                className={`spacingBar ${token.utilityClass}`}
                style={{ width: `var(${token.variable})` }}
              />
            </div>
          </div>
        ))}
      </div>
      <h3 className="subheading">Spacing in use</h3>
      <div className="usageGrid">
        <article className="usageCard">
          <span className="variable">p-05 / --spacing-05</span>
          <div className="p-05 paddingExample">
            Existing spacing utility for padding
          </div>
        </article>
        <article className="usageCard">
          <span className="variable">m-03 / --spacing-03</span>
          <div className="marginStage">
            <div className="m-03 marginExample">Margin</div>
          </div>
        </article>
        <article className="usageCard">
          <span className="variable">gap-04 / --spacing-04</span>
          <div className="gap-04 gapExample">
            <span>Item</span>
            <span>Item</span>
            <span>Item</span>
          </div>
        </article>
      </div>
    </section>
  );
}
