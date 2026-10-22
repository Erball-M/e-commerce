'use client';

import { createContext, useSyncExternalStore } from 'react';
import { resolvedTokenNames } from '../token-data';

export type TokenValues = Record<string, string>;

const emptyValues: TokenValues = {};
let clientValues: TokenValues | undefined;

const subscribe = () => () => {};

function getClientValues() {
  if (!clientValues) {
    const computedStyle = getComputedStyle(document.documentElement);
    clientValues = Object.fromEntries(
      resolvedTokenNames.map((name) => [
        name,
        computedStyle.getPropertyValue(name).trim(),
      ]),
    );
  }

  return clientValues;
}

export const TokenValuesContext = createContext<TokenValues>(emptyValues);

export function TokenValueProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const values = useSyncExternalStore(
    subscribe,
    getClientValues,
    () => emptyValues,
  );

  return (
    <TokenValuesContext.Provider value={values}>
      {children}
    </TokenValuesContext.Provider>
  );
}
