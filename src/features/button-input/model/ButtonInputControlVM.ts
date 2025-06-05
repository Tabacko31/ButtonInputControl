import { makeAutoObservable } from "mobx";

export interface ButtonConfig {
    label: string;
    onClick: () => void;
}

export class ButtonInputControlVM {
value = "";
leftButtons: ButtonConfig[] = [];
rightButtons: ButtonConfig[] = [];

constructor(init?: Partial<ButtonInputControlVM>) {
    Object.assign(this, init);
    makeAutoObservable(this);
}

setValue(value: string) {
    this.value = value;
}

}
