module.exports = function toReadable(number) {
    let res = "";
    let x = String(number);
    const numbers0_19 = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const numbers20_90 = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    if (x.length == 3) {
        res += x[0] == "1" ? "one hundred " : numbers0_19[+x[0]] + " hundreds ";

        res +=
            +x[1] > 1
                ? numbers20_90[+x[1]] + " " + numbers0_19[+x[2]]
                : numbers0_19[+x[1] * 10 + +x[2]];
    } else if (x.length == 2) {
        // console.log(Number(x[0])*10 + Number(x[1]));
        res +=
           +x[0]>1
                ? numbers20_90[+x[0]] + " " + numbers0_19[+x[1]]
                : numbers0_19[Number(x[0]) * 10 + Number(x[1])];
    } else {
        res += numbers0_19[+x];
    }
    return res.trim();
};
