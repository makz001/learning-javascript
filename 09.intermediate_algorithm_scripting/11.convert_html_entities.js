// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their 
// corresponding HTML entities.


let htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
}

/* TODO: improve with
 * String.prototype.replace
 */
function convertHTML(str) {
    return str.split('').map(i => htmlEntities.hasOwnProperty(i) ? htmlEntities[i] : i).join('');
}

console.log(convertHTML("Dolce & Gabbana")); // Dolce &amp; Gabbana
console.log(convertHTML("Hamburgers < Pizza < Tacos")); // Hamburgers &lt; Pizza &lt; Tacos
console.log(convertHTML("Sixty > twelve")); // Sixty &gt; twelve
console.log(convertHTML('Stuff in "quotation marks"')); // Stuff in &quot;quotation marks&quot;
console.log(convertHTML("Schindler's List")); // Schindler&apos;s List
console.log(convertHTML("<>")); // &lt;&gt;.
console.log(convertHTML("abc")); // abc
