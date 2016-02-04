/* Question: The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
Analysis:
To be a prime factor the number must be both factor and a prime number.
Make an empty array to first store the factors of 600851475143
Check the factors to see if they're prime
*/
var number = 600851475143;
var factors = [];

//Get factors of number
for (i = 2; i < ((number + 1) /2); i++) {
	if (number % i === 0) {
		var j = 0;
		factors[j] = i;
		j++;
	}
}

//Check if the factors are prime numbers
