// https://deno.land/std/async/delay.ts
// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.
/* Resolves after the given number of milliseconds. */
export function delay(ms: number): Promise<void> {
  return new Promise((res) =>
    setTimeout((): void => {
      res()
    }, ms)
  )
}
