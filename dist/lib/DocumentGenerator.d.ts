export declare enum DocumentType {
    RFC = "rfc",
    CURP = "curp"
}
declare type Gender = 'M' | 'F';
export default class DocumentGenerator {
    static getCURP: (name: string, surnameFather: string, surnameMother: string, bornDay: string, bornMonth: string, bornYear: string, bornState: string, gender: Gender) => string;
    static getRFC: (name: string, surnameFather: string, surnameMother: string, bornDay: string, bornMonth: string, bornYear: string) => string;
    private static getCommonPart;
    private static getBornStateCode;
    private static getGenderLetter;
    private static getSpecialChar;
    private static removeCommonNames;
    private static removePrefixes;
    private static removeBadWords;
    private static states;
    private static notAcceptedNames;
    private static prefixes;
    private static badWordsCURP;
    private static getLastCURPDigit;
    private static badWordsRFC;
    private static characterValues;
}
export {};
