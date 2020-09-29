/**
 * ### `css = scope.replace(css, 'replacement $1$2')`
 * 
 * Apply replace to css, where `$1` is matched selectors
 * and `$2` is rules for the selectors. It does not do
 * any self/host detection, so use it for more flexible replacements.
 * 
 * ```js
 * scope.replace(`
 * .my-component, .my-other-component {
 *    padding: 0;
 * }
 * `, '$1');
 * 
 * // `.my-component, .my-other-component`
 * ```
 */
export declare function replace(
  css: string,
  replacement: string
): string;

/**
 * ### `css = scope(css, parent, options?)`
 * 
 * Return css string with each rule prefixed with the parent selector.
 * Note that parent selector itself will be ignored.
 * Also each `:host` keyword will be replaced with parent value.
 */
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
