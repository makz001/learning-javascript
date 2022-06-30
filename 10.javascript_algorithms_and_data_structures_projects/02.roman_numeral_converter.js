// Convert the given number into a roman numeral.

// Roman numerals	Arabic numerals
// M	            1000
// CM	            900
// D	            500
// CD	            400
// C	            100
// XC	            90
// L	            50
// XL	            40
// X	            10
// IX	            9
// V	            5
// IV	            4
// I	            1

// All roman numerals answers should be provided in upper-case.

function ctr(n, zc) {
        if (n < 4) {
            let str = zc === 0 ? 'I' : zc === 1 ? 'X' : zc === 2 ? 'C' : 'M';
            return str.repeat(n);
        } else if (n == 4) {
            return zc === 0 ? 'IV' : zc === 1 ? 'XL' : 'CD';
        } else if (n > 4 && n < 9) {
            let str = zc === 0 ? 'V' : zc === 1 ? 'L' : 'D';
            let str2 = zc === 0 ? 'I' : zc === 1 ? 'X' :'C';
            return str + str2.repeat(n - 5);
        } else if (n == 9) {
            return zc === 0 ? 'IX' : zc === 1 ? 'XC' : 'CM';
        }
}

function convertToRoman(num) {
    num = num.toString().split(''); 
    for (let i = 0; i < num.length; i++) { 
        let zerosCount = num.length - 1 - i; 
        num[i] = ctr(num[i], zerosCount);
    }
    return num.join('');
}

convertToRoman(649) // should return the string DCXLIX

// convertToRoman(2) should return the string II.
// convertToRoman(3) should return the string III.
// convertToRoman(4) should return the string IV.
// convertToRoman(5) should return the string V.
// convertToRoman(9) should return the string IX.
// convertToRoman(12) should return the string XII.
// convertToRoman(16) should return the string XVI.
// convertToRoman(29) should return the string XXIX.
// convertToRoman(44) should return the string XLIV.
// convertToRoman(45) should return the string XLV.
// convertToRoman(68) should return the string LXVIII
// convertToRoman(83) should return the string LXXXIII
// convertToRoman(97) should return the string XCVII
// convertToRoman(99) should return the string XCIX
// convertToRoman(400) should return the string CD
// convertToRoman(500) should return the string D
// convertToRoman(501) should return the string DI
// convertToRoman(649) should return the string DCXLIX
// convertToRoman(798) should return the string DCCXCVIII
// convertToRoman(891) should return the string DCCCXCI
// convertToRoman(1000) should return the string M
// convertToRoman(1004) should return the string MIV
// convertToRoman(1006) should return the string MVI
// convertToRoman(1023) should return the string MXXIII
// convertToRoman(2014) should return the string MMXIV
// convertToRoman(3999) should return the string MMMCMXCIX
