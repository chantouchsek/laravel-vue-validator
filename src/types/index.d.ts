import { PluginFunction } from 'src/types/vue';

type AsyncFunction = ((arg0: any) => Promise<any>) | Promise<any>;

export default class Validator extends FormValidatorInstance {
    constructor(options?: FormValidatorOptions);
    busy: boolean;
    success: boolean;
    errors: ErrorsOptions;
    static install(): PluginFunction<any>;
}

/**
 * The vue-wait Instance
 */

export class FormValidatorInstance {
    /**
     * Check if field has any error
     * @return {boolean}
     * @param {string} field
     * @memberOf FormValidatorInstance
     */
    has(field: string|string[]): boolean;

    /**
     * Returns boolean value if any errors exists in page.
     *
     * @returns {boolean}
     * @memberOf FormValidatorInstance
     */
    any(): boolean;

    /**
     * Check if field is missed in errors object
     * @return {boolean}
     * @param {string} field
     * @memberOf FormValidatorInstance
     */
    missed(field: string|string[]): boolean;

    /**
     * Check if field is null or exist in errors object
     * @return {boolean|number}
     * @param {string} field
     * @memberOf FormValidatorInstance
     */
    nullState(field: string|string[]): boolean|null;

    /**
     * Get error message by field
     * @return string
     * @param {string} field
     * @memberOf FormValidatorInstance
     */
    get(field: string|string[]): string

    /**
     * Fill errors object
     * @return Object
     * @param errors
     * @memberOf FormValidatorInstance
     */
    fill(errors: object): object

    /**
     * To clear all errors
     * @return string|object
     * @memberOf FormValidatorInstance
     */
    flush(): string

    /**
     * To clear specific field from errors, if field null or undefined it will clear all errors
     * @return object
     * @param field
     * @memberOf FormValidatorInstance
     */
    clear(field: string|string[]): object

    /**
     * Check if there is any errors exist
     * @return {boolean}
     * @memberOf FormValidatorInstance
     */
    isValid(): boolean

    /**
     * Returns boolean value if some of given loaders exists in page.
     *
     * @param {(string|string[])} attribute
     * @returns {boolean}
     * @memberOf FormValidatorInstance
     */
    first(attribute: string | string[]): boolean;

    /**
     * Keyboard event on form
     * @return self
     * @param {KeyboardEvent} event
     * @memberOf FormValidatorInstance
     */
    onKeydown<T extends Function | AsyncFunction>(event: KeyboardEvent): T;
}

export interface FormValidatorOptions {}
export interface ErrorsOptions {
    errors: {
        [key: string]: any
    }
}
