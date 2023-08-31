export class UserProfile {
    #firstName: string;
    #lastName: string;
    #email: string;
    #userId: number;
    #userName: string;

    constructor() {
        this.#firstName = '';
        this.#lastName = '';
        this.#email = '';
        this.#userId = 0;
        this.#userName = '';
    }

    public get firstName(): string {
        return this.#firstName;
    }
    public set firstName(value: string) {
        this.#firstName = value;
    }

    public get lastName(): string {
        return this.#lastName;
    }
    public set lastName(value: string) {
        this.#lastName = value;
    }

    public get email(): string {
        return this.#email;
    }
    public set email(value: string) {
        this.#email = value;
    }

    public get userId(): number {
        return this.#userId;
    }
    public set userId(value: number) {
        this.#userId = value;
    }

    public get userName(): string {
        return this.#userName;
    }
    public set userName(value: string) {
        this.#userName = value;
    }

    public toJSON(): any {
        return {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          userId: this.userId,
          userName: this.userName
        };
    }
}