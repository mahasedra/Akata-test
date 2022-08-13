function nonConsecutiveDigits(N) {
    const J = N + 1;
    stringNumber = J.toString();
    for (i=1; i< stringNumber.length; i++){
        if (stringNumber.charAt(index) === stringNumber.charAt(index - 1)) J =nonConsecutiveDigits(J);
    };
    return J;
}