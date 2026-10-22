'use client';

import { useContext } from 'react';
import { TokenValuesContext } from './token-value-provider';

export function TokenValue({ name }: { name: string }) {
  const values = useContext(TokenValuesContext);
  const value = values[name];

  return (
    <code>{value === undefined ? 'Resolving…' : value || 'Not available'}</code>
  );
}
