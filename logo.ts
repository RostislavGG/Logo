class DrawLogoLogic {
    // We divide the logo in two parts - upper and lower
    // The connections between the amount of space characters and
    // letter characters is described in functions {buildNextUpperLine}
    // and {buildNextLowerLine}. Each of these functions creates just one 
    // line for one letter "M". That is why we add them twice to {logo}. 
    protected draw = (widthOfLetter: number): string => {
        let logo: string = "";
        for (let i = 0; i < (widthOfLetter + 1) /2; i++) {
            const buildLine: string = this.buildNextUpperLine(i, widthOfLetter);
            logo += buildLine + buildLine + "\n";
        }

        for (let i = 0; i < (widthOfLetter + 1) /2; i++) {
            const buildLine: string = this.buildNextLowerLine(i, widthOfLetter);
            logo += buildLine + buildLine + "\n";
        }
        return logo;
    }

    // Used to create the {difference} line of the upper part
    // of the lofo counting, from up to down, starting from 0.
    private buildNextUpperLine = (difference: number, widthOfLetter: number): string => {
        let answer: string = "";
        answer += this.buildEmptySpace(widthOfLetter - difference);
        answer += this.buildLetterSymbol(widthOfLetter + difference*2);
        answer += this.buildEmptySpace(widthOfLetter - difference*2);
        answer += this.buildLetterSymbol(widthOfLetter + difference*2);
        answer += this.buildEmptySpace(widthOfLetter - difference);
        return answer;
    }

    // Used to creat the {difference} line of the lower part 
    // of the logo, counting from up to down, starting from 0.
    private buildNextLowerLine = (difference: number, widthOfLetter: number): string => {
        let answer: string = "";
        answer += this.buildEmptySpace(widthOfLetter - difference - (widthOfLetter+1)/2);
        answer += this.buildLetterSymbol(widthOfLetter);
        answer += this.buildEmptySpace(1 + 2*difference);
        answer += this.buildLetterSymbol(widthOfLetter*2 - 1 - 2*difference);
        answer += this.buildEmptySpace(1 + 2*difference);
        answer += this.buildLetterSymbol(widthOfLetter);
        answer += this.buildEmptySpace(widthOfLetter - difference - (widthOfLetter+1)/2);
        return answer;
    }

    // Returns a string with {amount} characters for space.
    private buildEmptySpace = (amount: number): string => {
        let answer: string = "";
        for (let i = 0; i < amount; i++) {
            answer += "-";
        }

        return answer;
    }

    // Returns a string with {amount} characters for letters.
    private buildLetterSymbol = (amount: number): string => {
        let answer: string = "";
        for (let i = 0; i < amount; i++) {
            answer += "*";
        }

        return answer;
    }
}

class DrawLogo extends DrawLogoLogic {
    constructor() {
        super();
    }

    drawLogo = (n: number): string => {
        if (n < 0 || n % 2 === 0) {
            return "Number should be positive and odd";
        }
        return this.draw(n);
    } 
}


