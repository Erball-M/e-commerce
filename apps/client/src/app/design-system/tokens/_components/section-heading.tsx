type SectionHeadingProps = {
  id: string;
  number: string;
  title: string;
  description: string;
};

export function SectionHeading({
  id,
  number,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="sectionHeading">
      <span className="sectionNumber">{number}</span>
      <div>
        <h2 className="sectionTitle" id={id}>
          {title}
        </h2>
        <p className="sectionDescription">{description}</p>
      </div>
    </div>
  );
}
