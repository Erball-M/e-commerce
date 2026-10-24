import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Icon } from './Icon';

afterEach(cleanup);

describe('Icon', () => {
  it.each([
    ['sm', 'w-05'],
    ['md', 'w-06'],
    ['lg', 'w-07'],
    ['xl', 'w-08'],
  ] as const)('maps the %s size to its width class', (size, widthClass) => {
    render(<Icon name="cart" size={size} data-testid="icon" />);

    expect(screen.getByTestId('icon')).toHaveClass(widthClass, 'h-auto');
  });

  it('defaults to the md size', () => {
    render(<Icon name="cart" data-testid="icon" />);

    expect(screen.getByTestId('icon')).toHaveClass('w-06', 'h-auto');
  });

  it('renders an accessible icon with its aria-label as the name', () => {
    render(<Icon name="cart" aria-label="Shopping cart" size="lg" />);

    const icon = screen.getByRole('img', { name: 'Shopping cart' });

    expect(icon).toHaveClass('w-07', 'h-auto');
    expect(icon).not.toHaveAttribute('aria-hidden');
  });

  it('hides decorative icons from assistive technology when no accessible name is provided', () => {
    render(<Icon name="heart" data-testid="icon" />);

    expect(screen.getByTestId('icon')).toHaveAttribute('aria-hidden', 'true');
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('preserves custom classes alongside its default classes', () => {
    render(
      <Icon
        name="search"
        className="text-primary hover:text-secondary"
        data-testid="icon"
      />,
    );

    expect(screen.getByTestId('icon')).toHaveClass(
      'w-06',
      'h-auto',
      'text-primary',
      'hover:text-secondary',
    );
  });

  it('forwards supported SVG attributes to the rendered icon', () => {
    render(
      <Icon
        name="check"
        data-testid="icon"
        strokeWidth={2}
        focusable="false"
      />,
    );

    const icon = screen.getByTestId('icon');

    expect(icon).toHaveAttribute('stroke-width', '2');
    expect(icon).toHaveAttribute('focusable', 'false');
  });
});
