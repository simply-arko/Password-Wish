const specialChars = "[$&+,:;=?@#|'<>.-^*(/){}_%!]";

function generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateUppercase = (): String => {
    const ascii = generateRandomNumber(65, 90);
    return String.fromCharCode(ascii);
};

const generateLowercase = (): String => {
    const ascii = generateRandomNumber(97, 122);
    return String.fromCharCode(ascii);
};

const generateNumber = (): number => {
    return generateRandomNumber(0, 9);
};

const generateSpecialCase = (): string | undefined => {
    const index = generateRandomNumber(0, specialChars.length - 1);
    return specialChars.at(index);
};

type PasswordFunction = () => String | number | undefined;

function stuffPassword(
    passwordFields: PasswordFunction[],
    passwordLength: number
) {
    let actualPassword = "";
    for (let i = 0; i < passwordFields.length; i++)
        actualPassword += passwordFields[i]();
    for (let i = 0; i < passwordLength - passwordFields.length; i++) {
        const index = generateRandomNumber(0, passwordFields.length - 1);
        actualPassword += passwordFields[index]();
    }

    return actualPassword;
}

function shuffle(passwordArr: Array<string>) {
    for (let i = passwordArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [passwordArr[i], passwordArr[j]] = [passwordArr[j], passwordArr[i]];
    }
    let password = "";
    passwordArr.forEach((val) => {
        password += val;
    });
    return password;
}

const Generator = (
    isLowercase: boolean,
    isUppercase: boolean,
    isDigits: boolean,
    isSymbols: boolean,
    passwordLength: number
) => {
    const passwordFields = [];
    if (isUppercase) {
        passwordFields.push(generateUppercase);
    }
    if (isLowercase) {
        passwordFields.push(generateLowercase);
    }
    if (isDigits) {
        passwordFields.push(generateNumber);
    }
    if (isSymbols) {
        passwordFields.push(generateSpecialCase);
    }

    if (passwordFields.length == 0) return;

    const password = stuffPassword(passwordFields, passwordLength);
    const shuffledPassword = shuffle(Array.from(password));
    return shuffledPassword;
};

export default Generator;
