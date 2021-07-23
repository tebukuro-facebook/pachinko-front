/**
 * startからendの範囲の数列を生成.
 */
const range = (start: number, end: number): number[] => [...Array((end - start) + 1)].map((_, i) => start + i);

export default range

