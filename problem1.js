/* Question: 

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.

Analysis:

A loop is set an uknown number of times and the numbers that it goes through are checked off
too see if they're a multiple of 3 or 5, i.e. by division of both it's checked if their 
modulo is zero. In the case that it is, these numbers are stored(prefereably in an array)
and later computed to find the sum, again this is done through the use of the loop to add
the individual numbers stored in the array. As this problem has limits to be considered the
code below will be for this particular problem only. In the case that you may want to set
an arbitrary upper limit for the numbers to be processed you need to take input from the user
as well as create an extra variable to store this for use in the program*/

var multiple = [];
var sum = 0;
var upperLimit = prompt("input number");

for (i = 0; i < upperLimit; i++) {
	if ((i % 3) === 0 || (i % 5) === 0)) {
		multiple [i] = i;
		sum += i;
	}

}

