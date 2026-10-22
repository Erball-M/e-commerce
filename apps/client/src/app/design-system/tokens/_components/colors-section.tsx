import { colorGroups } from '../token-data';
import { SectionHeading } from './section-heading';
import { TokenValue } from './token-value';

export function ColorsSection() {
  return (
    <section className="section" aria-labelledby="colors-heading">
      <SectionHeading
        id="colors-heading"
        number="01"
        title="Colors"
        description="Every color token defined in the theme, grouped by its existing palette."
      />
      <div className="groups">
        {colorGroups.map((group) => (
          <div className="tokenGroup" key={group.name}>
            <h3 className="groupTitle">{group.name}</h3>
            <div className="colorGrid">
              {group.tokens.map((token) => (
                <article className="colorCard" key={token.variable}>
                  <div
                    className={`colorSwatch ${token.utilityClass}`}
                    aria-label={`${token.name} color swatch`}
                  />
                  <div className="colorDetails">
                    <strong>{token.name}</strong>
                    <span className="variable">{token.variable}</span>
                    <TokenValue name={token.variable} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
