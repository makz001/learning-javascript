// Use export to share a code block:

// There are two string-related functions in the editor. 
// Export both of them using the method of your choice.

// export a single function (or things):

    // export const uppercaseString = (string) => {
    //     return string.toUpperCase();
    // }

// export multiple functions (or things):

const uppercaseString = string => string.toUpperCase();

const lowercaseString = string => string.toLowerCase();

export { uppercaseString, lowercaseString };
