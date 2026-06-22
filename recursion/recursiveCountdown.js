const recursiveCountdown = (number) => {
    if (number < 1) {
        return;
    }
    recursiveCountdown(number - 1);
    console.log(number);

};

recursiveCountdown(5); 