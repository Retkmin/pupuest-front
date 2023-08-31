import { Asset } from "./asset";

export class Move {
    #asset: Asset;
    #state: boolean;
    #type: string;
    #startDate: Date;
    #risk: string;
    #id: number;
  
    constructor() {
      this.#asset = new Asset();
      this.#state = false;
      this.#type = '';
      this.#startDate = new Date();
      this.#risk = '';
      this.#id = 0;
    }
  
    public get asset(): Asset {
      return this.#asset;
    }
    public set asset(asset: Asset) {
      this.#asset = asset;
    }
  
    public get state(): boolean {
      return this.#state;
    }
    public set state(state: boolean) {
      this.#state = state;
    }
  
    public get type(): string {
      return this.#type;
    }
    public set type(type: string) {
      this.#type = type;
    }
  
    public get startDate(): Date {
      return this.#startDate;
    }
    public set startDate(startDate: Date) {
      this.#startDate = startDate;
    }
  
    public get risk(): string {
      return this.#risk;
    }
    public set risk(risk: string) {
      this.#risk = risk;
    }
  
    public get id(): number {
      return this.#id;
    }
    public set id(id: number) {
      this.#id = id;
    }
  }