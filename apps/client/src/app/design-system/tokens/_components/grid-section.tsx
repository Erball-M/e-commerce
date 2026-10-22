import { GridPreview } from './grid-preview';
import { SectionHeading } from './section-heading';
import { TokenValue } from './token-value';

const desktopGridItems = Array.from({ length: 12 }, (_, index) => index + 1);
const mobileGridItems = Array.from({ length: 4 }, (_, index) => index + 1);

export function GridSection() {
  return (
    <section className="section" aria-labelledby="grid-heading">
      <SectionHeading
        id="grid-heading"
        number="07"
        title="Grid and layout"
        description="The existing grid.css foundation, shown with its configured column counts and gutters."
      />
      <p className="supportNote">
        Grid previews keep their configured frame width inside a local scroll
        area on narrower screens, so the page itself never overflows. The
        implementation currently switches layouts at 768px and 1200px; these are
        CSS implementation thresholds, not Figma breakpoint specifications.
      </p>
      <div className="gridList">
        <GridPreview
          title="Desktop"
          detail="12 columns · 71px columns · 24px gutter · 1116px centered"
          type="desktop"
          items={desktopGridItems}
          properties={[
            '--grid-desktop-columns',
            '--grid-desktop-column-width',
            '--grid-gutter',
            '--grid-desktop-container-width',
          ]}
        />
        <GridPreview
          title="Tablet"
          detail="12 columns · 56px columns · 24px gutter · 936px centered"
          type="tablet"
          items={desktopGridItems}
          properties={[
            '--grid-tablet-columns',
            '--grid-tablet-column-width',
            '--grid-gutter',
            '--grid-tablet-container-width',
          ]}
        />
        <GridPreview
          title="Mobile"
          detail="4 flexible columns · 24px gutter · 12px side margins"
          type="mobile"
          items={mobileGridItems}
          properties={[
            '--grid-mobile-columns',
            '--grid-gutter',
            '--grid-mobile-margin',
          ]}
        />
      </div>
      <h3 className="subheading">Baseline grid</h3>
      <div className="baselineCard">
        <div className="baselinePreview">
          <span>8px row</span>
          <span>8px gutter</span>
          <span>16px repeating interval</span>
        </div>
        <div className="baselineDetails">
          <span>
            Row height <TokenValue name="--grid-baseline-row-height" />
          </span>
          <span>
            Row gutter <TokenValue name="--grid-baseline-row-gutter" />
          </span>
          <span>
            Top offset <TokenValue name="--grid-baseline-offset" />
          </span>
          <span>
            Repeating interval <TokenValue name="--grid-baseline-row-height" />{' '}
            + <TokenValue name="--grid-baseline-row-gutter" /> = 16px
          </span>
        </div>
      </div>
      <p className="supportNote">
        This baseline illustration is confined to this page and is not an
        application-wide overlay.
      </p>
    </section>
  );
}
