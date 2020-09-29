export declare function replace(
  css: string,
  replacement: string
): string;

declare function scopeCss(
  css: string,
  scope: string,
  o?: {
    /**
     * Whether `:global` selector should be allowed to escape scoping
     */
    allowGlobal?: boolean
    /**
     * Options can scope keyframes via `{ keyframes: bool|prefixStr }` option
     */
    keyframes?: boolean | string
  } | string
): string;

export default scopeCss; 

/**
 * I just couldn't export the way I should do in the handbook
 * 
 * @see https://www.typescriptlang.org/docs/handbook/modules.html#export--and-import--require
 */
// export = scopeCss;
