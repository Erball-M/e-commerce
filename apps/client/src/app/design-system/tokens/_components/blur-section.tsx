import { blurTokens } from '../token-data';
import { SectionHeading } from './section-heading';
import { TokenValue } from './token-value';

const blurToken = blurTokens[0];

export function BlurSection() {
  return (
    <section className="section" aria-labelledby="blur-heading">
      <SectionHeading
        id="blur-heading"
        number="06"
        title="Blur effects"
        description="The same existing blur token is demonstrated as element blur and backdrop blur."
      />
      <div className="note">
        <strong>{blurToken.name}</strong>
        <span className="variable">{blurToken.variable}</span>
        <TokenValue name={blurToken.variable} />
      </div>
      <div className="effectGrid">
        <article className="effectCard">
          <div className="blurStage">
            <div className="blurShapes" />
            <div className={`filterBlur ${blurToken.utilityClass}`}>
              Filter blur
            </div>
          </div>
          <strong>Filter blur</strong>
          <span className="previewCaption">
            Blurs the element and its contents.
          </span>
        </article>
        <article className="effectCard">
          <div className="blurStage">
            <div className="blurShapes" />
            <div
              className="backdropBlur"
              style={{
                backdropFilter: `blur(var(${blurToken.variable}))`,
                WebkitBackdropFilter: `blur(var(${blurToken.variable}))`,
              }}
            >
              Backdrop blur
            </div>
          </div>
          <strong>Backdrop blur</strong>
          <span className="previewCaption">
            Blurs the visible content behind this translucent surface.
          </span>
        </article>
      </div>
      <p className="supportNote">
        No separate backdrop-blur token is defined; this example applies
        <code> --blur-design</code> to the backdrop effect.
      </p>
    </section>
  );
}
