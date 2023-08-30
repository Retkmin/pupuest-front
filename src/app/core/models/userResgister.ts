export class UserRegisterData {
    #name: string;
    #surname: string;
    #userName: string;
    #roleCode: number;
    #email: string;
    #birthdate: Date;
    #language: string;
    #currency: string;
    #companyCondition: boolean;
    #legalCondition: boolean;
    #protectionCondition: boolean;

    constructor() {
        this.#name = '';
        this.#surname = '';
        this.#userName = '';
        this.#roleCode = 0;
        this.#email = '';
        this.#birthdate = new Date();
        this.#language = '';
        this.#currency = '';
        this.#companyCondition = false;
        this.#legalCondition = false;
        this.#protectionCondition = false;
      }

    public get name(): string {
        return this.#name;
    }
    public set name(name: string) {
        this.#name = name;
    }
    public get surname(): string {
        return this.#surname;
    }
    public set surname(surname: string) {
        this.#surname = surname;
    }
    public get userName(): string {
        return this.#userName;
    }
    public set userName(userName: string) {
        this.#userName = userName;
    }
    public get roleCode(): number {
        return this.#roleCode;
    }
    public set roleCode(roleCode: number) {
        this.#roleCode = roleCode;
    }
    public get email(): string {
        return this.#email;
    }
    public set email(email: string) {
        this.#email = email;
    }
    public get birthdate(): Date {
        return this.#birthdate;
    }
    public set birthdate(birthdate: Date) {
        this.#birthdate = birthdate;
    }
    public get language(): string {
        return this.#language;
    }
    public set language(language: string) {
        this.#language = language;
    }
    public get currency(): string {
        return this.#currency;
    }
    public set currency(currency: string) {
        this.#currency = currency;
    }
    public get companyCondition(): boolean {
        return this.#companyCondition;
    }
    public set companyCondition(companyCondition: boolean) {
        this.#companyCondition = companyCondition;
    }
    public get legalCondition(): boolean {
        return this.#legalCondition;
    }
    public set legalCondition(legalCondition: boolean) {
        this.#legalCondition = legalCondition;
    }
    public get protectionCondition(): boolean {
        return this.#protectionCondition;
    }
    public set protectionCondition(protectionCondition: boolean) {
        this.#protectionCondition = protectionCondition;
    }
}