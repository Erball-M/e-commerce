import { TokenValue } from './token-value';

export type GridPreviewType = 'desktop' | 'tablet' | 'mobile';

type GridPreviewProps = {
  title: string;
  detail: string;
  type: GridPreviewType;
  items: number[];
  properties: string[];
};

export function GridPreview({
  title,
  detail,
  type,
  items,
  properties,
}: GridPreviewProps) {
  return (
    <article className="gridCard">
      <div className="gridCardHeading">
        <div>
          <h3>{title}</h3>
          <p>{detail}</p>
        </div>
        <div className="gridProperties">
          {properties.map((property) => (
            <span key={property}>
              {property}: <TokenValue name={property} />
            </span>
          ))}
        </div>
      </div>
      <div className="gridScroll">
        <div className={`grid-container gridExample gridExample_${type}`}>
          <div className="grid gridColumns">
            {items.map((item) => (
              <div className="gridColumn" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      {type !== 'mobile' && (
        <span className="previewCaption">
          Scroll within this preview on smaller screens to inspect the full
          configured grid width.
        </span>
      )}
    </article>
  );
}
