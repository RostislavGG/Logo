// We divide the logo in two parts - upper and lower
// The connections between the amount of space characters and
// letter characters is described in functions {buildNextUpperLine}
// and {buildNextLowerLine}. Each of these functions creates just one 
// line for one letter "M". That is why we add them twice to {logo}. 
const draw = (widthOfLetter: number): string => {
    let logo: string = "";
    for (let i = 0; i < (widthOfLetter + 1) /2; i++) {
        const buildLine: string = buildNextUpperLine(i, widthOfLetter);
        logo += buildLine + buildLine + "\n";
    }

    for (let i = 0; i < (widthOfLetter + 1) /2; i++) {
        const buildLine: string = buildNextLowerLine(i, widthOfLetter);
        logo += buildLine + buildLine + "\n";
    }
    return logo;
}

// Used to create the {difference} line of the upper part
// of the lofo counting, from up to down, starting from 0.
const buildNextUpperLine = (difference: number, widthOfLetter: number): string => {
    let answer: string = "";
    answer += buildEmptySpace(widthOfLetter - difference);
    answer += buildLetterSymbol(widthOfLetter + difference*2);
    answer += buildEmptySpace(widthOfLetter - difference*2);
    answer += buildLetterSymbol(widthOfLetter + difference*2);
    answer += buildEmptySpace(widthOfLetter - difference);
    return answer;
}

// Used to creat the {difference} line of the lower part 
// of the logo, counting from up to down, starting from 0.
const buildNextLowerLine = (difference: number, widthOfLetter: number): string => {
    let answer: string = "";
    answer += buildEmptySpace(widthOfLetter - difference - (widthOfLetter+1)/2);
    answer += buildLetterSymbol(widthOfLetter);
    answer += buildEmptySpace(1 + 2*difference);
    answer += buildLetterSymbol(widthOfLetter*2 - 1 - 2*difference);
    answer += buildEmptySpace(1 + 2*difference);
    answer += buildLetterSymbol(widthOfLetter);
    answer += buildEmptySpace(widthOfLetter - difference - (widthOfLetter+1)/2);
    return answer;
}

// Returns a string with {amount} characters for space.
const buildEmptySpace = (amount: number): string => {
    let answer: string = "";
    for (let i = 0; i < amount; i++) {
        answer += "-";
    }

    return answer;
}

// Returns a string with {amount} characters for letters.
const buildLetterSymbol = (amount: number): string => {
    let answer: string = "";
    for (let i = 0; i < amount; i++) {
        answer += "*";
    }

    return answer;
}