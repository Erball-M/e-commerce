import { typographyProperties, typographyTokens } from '../token-data';
import { SectionHeading } from './section-heading';
import { TokenValue } from './token-value';

export function TypographySection() {
  return (
    <section className="section" aria-labelledby="typography-heading">
      <SectionHeading
        id="typography-heading"
        number="02"
        title="Typography"
        description="All defined text styles, rendered with the configured Inter font."
      />
      <div className="note">
        <strong>Font connection</strong>
        <span>
          next/font exposes <code>--font-inter</code> on the root element; the
          typography theme uses it through <code>--font-sans</code>. Resolved
          font token: <TokenValue name="--font-sans" />
        </span>
      </div>
      <div className="typeList">
        {typographyTokens.map((token) => {
          const Sample = token.element;

          return (
            <article className="typeRow" key={token.name}>
              <div className="typeInfo">
                <strong>{token.name}</strong>
                <span className="variable">{token.variable}</span>
                {typographyProperties.map((property) => {
                  const variable = `${token.variable}${property.suffix}`;

                  return (
                    <span className="typeProperty" key={variable}>
                      <span>{property.label}</span>
                      <TokenValue name={variable} />
                    </span>
                  );
                })}
              </div>
              <div className="typePreview">
                <Sample className={`typeSample ${token.utilityClass}`}>
                  {token.sample}
                </Sample>
                <span className="previewCaption">
                  Rendered using <code>{token.utilityClass}</code>
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
