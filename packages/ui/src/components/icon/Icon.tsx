import type { SVGProps } from 'react';
import { type IconName, icons } from './icons';

const iconSizeClasses = {
  sm: 'w-05 h-auto',
  md: 'w-06 h-auto',
  lg: 'w-07 h-auto',
  xl: 'w-08 h-auto',
} as const;

export type IconSize = keyof typeof iconSizeClasses;

export type IconProps = Omit<
  SVGProps<SVGSVGElement>,
  'height' | 'name' | 'width'
> & {
  name: IconName;
  /** Defaults to md, using the spacing-06 width token. */
  size?: IconSize;
};

export function Icon({
  name,
  size = 'md',
  className,
  style,
  role,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  ...svgProps
}: IconProps) {
  const SvgIcon = icons[name];
  const hasAccessibleName = Boolean(ariaLabel || ariaLabelledBy);

  return (
    <SvgIcon
      {...svgProps}
      className={`${iconSizeClasses[size]}${className ? ` ${className}` : ''}`}
      role={role ?? (hasAccessibleName ? 'img' : undefined)}
      aria-hidden={hasAccessibleName ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
    />
  );
}
