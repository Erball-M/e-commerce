import { SectionHeading } from './section-heading';

export function BorderRadiusSection() {
  return (
    <section className="section" aria-labelledby="radius-heading">
      <SectionHeading
        id="radius-heading"
        number="04"
        title="Border radius"
        description="Radius tokens are shown only when they exist in the source theme."
      />
      <p className="emptyState">
        No border-radius tokens are currently defined.
      </p>
    </section>
  );
}
