import { UserProfile } from "./userProfile";
import { UserSettings } from "./userSettings";

export class LocalStorageData {
    #userToken: string;
    #userRefreshToken: string;
    #isLoggedIn: boolean;
    #userProfile: UserProfile;
    #settings: UserSettings;

    constructor() {
        this.#userToken = '';
        this.#userRefreshToken = '';
        this.#isLoggedIn = false;
        this.#userProfile = new UserProfile();
        this.#settings = new UserSettings();
    }

    public get userToken(): string {
        return this.#userToken;
    }
    public set userToken(value: string) {
        this.#userToken = value;
    }

    public get userRefreshToken(): string {
        return this.#userRefreshToken;
    }
    public set userRefreshToken(value: string) {
        this.#userRefreshToken = value;
    }

    public get isLoggedIn(): boolean {
        return this.#isLoggedIn;
    }
    public set isLoggedIn(value: boolean) {
        this.#isLoggedIn = value;
    }

    public get userProfile(): UserProfile {
        return this.#userProfile;
    }
    public set userProfile(value: UserProfile) {
        this.#userProfile = value;
    }

    public get settings(): UserSettings {
        return this.#settings;
    }
    public set settings(value: UserSettings) {
        this.#settings = value;
    }

    public toJSON() {
        return {
          userToken: this.userToken,
          userRefreshToken: this.userRefreshToken,
          isLoggedIn: this.isLoggedIn,
          userProfile: this.userProfile.toJSON(),
          settings: this.settings.toJSON()
        };
    }
}