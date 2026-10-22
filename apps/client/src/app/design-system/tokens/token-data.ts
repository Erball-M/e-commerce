export type ColorToken = {
  name: string;
  variable: string;
  utilityClass: string;
};

export type ColorGroup = {
  name: string;
  tokens: ColorToken[];
};

const createColorTokens = (
  prefix: string,
  steps: string[],
  utilityClasses: string[],
) =>
  steps.map((step, index) => ({
    name: `${prefix}-${step}`,
    variable: `--color-${prefix}-${step}`,
    utilityClass: utilityClasses[index],
  }));

export const colorGroups: ColorGroup[] = [
  {
    name: 'Primary',
    tokens: createColorTokens(
      'primary',
      ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
      [
        'bg-primary-100',
        'bg-primary-200',
        'bg-primary-300',
        'bg-primary-400',
        'bg-primary-500',
        'bg-primary-600',
        'bg-primary-700',
        'bg-primary-800',
        'bg-primary-900',
      ],
    ),
  },
  {
    name: 'Neutral / Black',
    tokens: createColorTokens(
      'black',
      ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
      [
        'bg-black-100',
        'bg-black-200',
        'bg-black-300',
        'bg-black-400',
        'bg-black-500',
        'bg-black-600',
        'bg-black-700',
        'bg-black-800',
        'bg-black-900',
      ],
    ),
  },
  {
    name: 'Neutral / White',
    tokens: createColorTokens(
      'white',
      ['100', '200', '900'],
      ['bg-white-100', 'bg-white-200', 'bg-white-900'],
    ),
  },
  {
    name: 'Semantic / Blue',
    tokens: createColorTokens(
      'blue',
      ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
      [
        'bg-blue-100',
        'bg-blue-200',
        'bg-blue-300',
        'bg-blue-400',
        'bg-blue-500',
        'bg-blue-600',
        'bg-blue-700',
        'bg-blue-800',
        'bg-blue-900',
      ],
    ),
  },
  {
    name: 'Semantic / Green',
    tokens: createColorTokens(
      'green',
      ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
      [
        'bg-green-100',
        'bg-green-200',
        'bg-green-300',
        'bg-green-400',
        'bg-green-500',
        'bg-green-600',
        'bg-green-700',
        'bg-green-800',
        'bg-green-900',
      ],
    ),
  },
  {
    name: 'Semantic / Red',
    tokens: createColorTokens(
      'red',
      ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
      [
        'bg-red-100',
        'bg-red-200',
        'bg-red-300',
        'bg-red-400',
        'bg-red-500',
        'bg-red-600',
        'bg-red-700',
        'bg-red-800',
        'bg-red-900',
      ],
    ),
  },
  {
    name: 'Semantic / Yellow',
    tokens: createColorTokens(
      'yellow',
      ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
      [
        'bg-yellow-100',
        'bg-yellow-200',
        'bg-yellow-300',
        'bg-yellow-400',
        'bg-yellow-500',
        'bg-yellow-600',
        'bg-yellow-700',
        'bg-yellow-800',
        'bg-yellow-900',
      ],
    ),
  },
];

export type TypographyToken = {
  name: string;
  variable: string;
  utilityClass: string;
  sample: string;
  element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
};

export const typographyTokens: TypographyToken[] = [
  {
    name: 'text-h1-tight',
    variable: '--text-h1-tight',
    utilityClass: 'text-h1-tight',
    sample: 'Heading one',
    element: 'h1',
  },
  {
    name: 'text-h2',
    variable: '--text-h2',
    utilityClass: 'text-h2',
    sample: 'Heading two',
    element: 'h2',
  },
  {
    name: 'text-h2-tight',
    variable: '--text-h2-tight',
    utilityClass: 'text-h2-tight',
    sample: 'Heading two tight',
    element: 'h2',
  },
  {
    name: 'text-h3',
    variable: '--text-h3',
    utilityClass: 'text-h3',
    sample: 'Heading three',
    element: 'h3',
  },
  {
    name: 'text-h4',
    variable: '--text-h4',
    utilityClass: 'text-h4',
    sample: 'Heading four',
    element: 'h4',
  },
  {
    name: 'text-h4-medium',
    variable: '--text-h4-medium',
    utilityClass: 'text-h4-medium',
    sample: 'Heading four medium',
    element: 'h4',
  },
  {
    name: 'text-h5',
    variable: '--text-h5',
    utilityClass: 'text-h5',
    sample: 'Heading five',
    element: 'h5',
  },
  {
    name: 'text-h6',
    variable: '--text-h6',
    utilityClass: 'text-h6',
    sample: 'Heading six',
    element: 'h6',
  },
  {
    name: 'text-body-regular',
    variable: '--text-body-regular',
    utilityClass: 'text-body-regular',
    sample: 'Regular body text for reading and longer descriptions.',
    element: 'p',
  },
  {
    name: 'text-body-medium',
    variable: '--text-body-medium',
    utilityClass: 'text-body-medium',
    sample: 'Medium body text for emphasis in a paragraph.',
    element: 'p',
  },
  {
    name: 'text-label',
    variable: '--text-label',
    utilityClass: 'text-label',
    sample: 'NORMAL LABEL',
    element: 'span',
  },
  {
    name: 'text-label-loose',
    variable: '--text-label-loose',
    utilityClass: 'text-label-loose',
    sample: 'LOOSE LABEL',
    element: 'span',
  },
];

const spacingWidthClasses = [
  'w-01',
  'w-02',
  'w-03',
  'w-04',
  'w-05',
  'w-06',
  'w-07',
  'w-08',
  'w-09',
  'w-10',
  'w-11',
  'w-12',
  'w-13',
  'w-14',
  'w-15',
  'w-16',
  'w-17',
  'w-18',
  'w-19',
  'w-20',
  'w-21',
  'w-22',
  'w-23',
  'w-24',
];

export const spacingTokens = Array.from({ length: 24 }, (_, index) => {
  const step = String(index + 1).padStart(2, '0');

  return {
    name: `spacing-${step}`,
    variable: `--spacing-${step}`,
    utilityClass: spacingWidthClasses[index],
  };
});

export const shadowTokens = [
  {
    name: 'shadow-design-small',
    variable: '--shadow-design-small',
    utilityClass: 'shadow-design-small',
  },
  {
    name: 'shadow-design-medium',
    variable: '--shadow-design-medium',
    utilityClass: 'shadow-design-medium',
  },
];

export const blurTokens = [
  {
    name: 'blur-design',
    variable: '--blur-design',
    utilityClass: 'blur-design',
  },
];

export const typographyProperties = [
  { label: 'Font size', suffix: '' },
  { label: 'Line height', suffix: '--line-height' },
  { label: 'Letter spacing', suffix: '--letter-spacing' },
  { label: 'Font weight', suffix: '--font-weight' },
];

export const gridProperties = [
  '--grid-desktop-columns',
  '--grid-desktop-column-width',
  '--grid-desktop-container-width',
  '--grid-tablet-columns',
  '--grid-tablet-column-width',
  '--grid-tablet-container-width',
  '--grid-mobile-columns',
  '--grid-mobile-margin',
  '--grid-gutter',
  '--grid-baseline-row-height',
  '--grid-baseline-row-gutter',
  '--grid-baseline-offset',
];

export const resolvedTokenNames = [
  ...colorGroups.flatMap((group) =>
    group.tokens.map((token) => token.variable),
  ),
  ...typographyTokens.flatMap((token) =>
    typographyProperties.map(
      (property) => `${token.variable}${property.suffix}`,
    ),
  ),
  ...spacingTokens.map((token) => token.variable),
  ...shadowTokens.map((token) => token.variable),
  ...blurTokens.map((token) => token.variable),
  '--font-sans',
  ...gridProperties,
];
