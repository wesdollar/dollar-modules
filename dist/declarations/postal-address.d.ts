import { StatesAbbr } from "./us-states";
export interface PostalAddress {
    line1: string;
    line2?: string;
    city: string;
    state: StatesAbbr;
    zip: string;
    country?: string;
}
