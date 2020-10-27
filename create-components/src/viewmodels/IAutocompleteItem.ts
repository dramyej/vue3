/**
 * Interface that represents an item which can be used in autocomplete component
 */
export interface IAutocompleteItem {
    /** Item ID */
    Id: number;
    /** Item label */
    Label: string;
}

/**
 * Simple implementation of IAutocompleteItem interface.
 */
export class AutocompleteItem implements IAutocompleteItem {
    /**
     * Create an autocomplete item
     * @param Id Item ID
     * @param Label Item label
     */
    constructor(public Id: number, public Label: string) { }
}