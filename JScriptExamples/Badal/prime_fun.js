// find prime number using functions

function prime(n) {
    // flag as a counter variable
    var flag = -1;

    // loop starting from 2 and ending before the number
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            flag = 1;
            break;
        }
    }

    console.log(flag == -1 ? `${num} is a Prime Number` : `${num} is not a Prime Number`);
}

// user input for a number
var num = parseInt(prompt("Enter a number : "));

// calling the function
prime(num);


