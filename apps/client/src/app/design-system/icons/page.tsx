import { Icon, iconCategories } from '@repo/ui';
import type { Metadata } from 'next';
import { DesignSystemPage } from '../_components/design-system-page';
import './icons-showcase.css';

export const metadata: Metadata = {
  title: 'Icons',
  description: 'A reference for the shared icon library.',
};

const categories = [
  {
    id: 'general-icons',
    title: 'General Icons',
    names: iconCategories.general,
  },
  { id: 'social-icons', title: 'Social Icons', names: iconCategories.social },
  {
    id: 'colored-icons',
    title: 'Colored Icons',
    names: iconCategories.colored,
  },
];

const sizes = ['sm', 'md', 'lg', 'xl'] as const;

export default function IconsPage() {
  return (
    <DesignSystemPage
      id="iconsShowcase"
      title="Icons"
      intro="A reference to the shared icons available throughout the application."
    >
      {categories.map((category) => (
        <section
          className="section"
          aria-labelledby={`${category.id}-heading`}
          key={category.id}
        >
          <h2 className="sectionTitle" id={`${category.id}-heading`}>
            {category.title}
          </h2>
          <div className="iconGrid">
            {category.names.map((name) => (
              <article className="iconCard" key={name}>
                <Icon name={name} size="lg" />
                <span>{name}</span>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="section" aria-labelledby="usage-example-heading">
        <h2 className="sectionTitle" id="usage-example-heading">
          Usage Example
        </h2>
        <pre className="usageExample">
          <code>{`import { Icon } from "@repo/ui";\n\n<Icon name="search" size="md" />;`}</code>
        </pre>
      </section>

      <section className="section" aria-labelledby="sizes-heading">
        <h2 className="sectionTitle" id="sizes-heading">
          Sizes
        </h2>
        <div className="sizeGrid">
          {sizes.map((size) => (
            <article className="sizeCard" key={size}>
              <Icon name="search" size={size} />
              <span>{size}</span>
            </article>
          ))}
        </div>
      </section>
    </DesignSystemPage>
  );
}
