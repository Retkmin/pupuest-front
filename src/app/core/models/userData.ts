export class UserData {
    #userId: string;
    #userName: string;
    #role: string;
    #roleCode: number;
    #language: string;
    #languageCode: number;
    #currency: string;
    #currencyCode: number;

    constructor() {
        this.#userId = '';
        this.#userName = '';
        this.#role = '';
        this.#roleCode = 0;
        this.#language = '';
        this.#languageCode = 0;
        this.#role = '';
        this.#currency = '';
        this.#currencyCode = 0;
      }

    public get userId(): string {
        return this.#userId;
    }
    public set userId(userId: string) {
        this.#userId = userId;
    }
    public get userName(): string {
        return this.#userName;
    }
    public set userName(userName: string) {
        this.#userName = userName;
    }
    public get role(): string {
        return this.#role;
    }
    public set role(role: string) {
        this.#role = role;
    }
    public get roleCode(): number {
        return this.#roleCode;
    }
    public set roleCode(roleCode: number) {
        this.#roleCode = roleCode;
    }
    public get language(): string {
        return this.#language;
    }
    public set language(language: string) {
        this.#language = language;
    }
    public get languageCode(): number {
        return this.#languageCode;
    }
    public set languageCode(languageCode: number) {
        this.#languageCode = languageCode;
    }
    public get currency(): string {
        return this.#currency;
    }
    public set currency(currency: string) {
        this.#currency = currency;
    }
    public get currencyCode(): number {
        return this.#currencyCode;
    }
    public set currencyCode(currencyCode: number) {
        this.#currencyCode = currencyCode;
    }
}