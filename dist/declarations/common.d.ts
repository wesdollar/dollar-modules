import { PostalAddress } from "./postal-address";
import { Request } from "express";
import { Responses } from "./responses";
import { Vendor } from "./requests";
export interface RequestMeta {
    deviceId: string;
    lat: string;
    long: string;
    prospectId?: string;
}
export interface TransformedProductData {
    id: string;
    googleProductId: string;
    gtin: string;
    name: string;
    rating: number;
    thumbnailImage: string;
    totalRatings: number;
    vendors: Vendor[];
    description: string;
    link: string;
    source: string;
    sourceId: string;
    priceListed: string;
    userProvidedPrice: string;
    quantity: string;
    retailer: string;
}
export declare type ApplicationId = string;
export declare type PurchaseMethods = "online" | "in_store";
export declare type ProgMerchantId = "148624";
export declare type SalesAssociate = "online";
export declare type MerchantApplicationIdentifier = "8765409";
export declare type PayFrequency = "weekly" | "twice_a_month" | "every_two_weeks" | "monthly";
export interface CreditCard {
    cardNumber: string;
    cvv: string;
    expirationDate: string;
    firstNameOnCard: string;
    lastNameOnCard: string;
    billingAddress: PostalAddress;
}
export interface AppSettings {
    enabled: boolean;
    emailAllowAll: boolean;
    emailDenyAll: boolean;
    enableEmailWhitelist: boolean;
    allowAllStates: boolean;
    forceSalesTaxAllStates: boolean;
    testingEnabled: boolean;
    testingLocation: {
        state: string;
        lat: string;
        long: string;
    } | null;
    initialPaymentDeposit: number;
    mockResponsesEnabled: boolean;
    maintenanceModeEnabled: boolean;
    enableLegacyMode: boolean;
    minimumVersion: string;
    minimumVersionAndroid: string;
    minimumVersioniOS: string;
    allowContractReset: boolean;
    appleWalletEnabled: boolean;
    debugAppleWalletEnabled: boolean;
    enableStartupScreens: boolean;
    onboardingScreensAlwaysShow: boolean;
    googleWalletEnabled: boolean;
    debugGoogleWalletEnabled: boolean;
    forcedPurchaseMethod: PurchaseMethods;
    receiptCaptureEnabled: boolean;
}
export interface AppSettingsRequest extends Request {
    appSettings: AppSettings;
    userLocation: Responses.LookupLocation;
}
export interface EmailWhitelist {
    email: string;
}
export interface OnboardingContent {
    lastUpdated: string;
    screens: OnboardingScreens[];
}
export interface OnboardingScreens {
    image: string;
    header: string;
    text: string;
    label: string;
    cta: string;
}
export interface PriceRange {
    min: number;
    max: number;
}
export interface PopularSearch {
    label: string;
    searchTerm?: string;
    imageUrl: string;
    priceRange: PriceRange;
    storeCount: number;
}
export interface ContentResponse {
    lastUpdated: string;
    items: Content[];
}
export interface Content {
    lastUpdated: string;
    contentKey: string;
    enabled: boolean;
    sortOrder: number;
    content: unknown;
}
export declare enum LeaseStatus {
    Denied = "Denied",
    Pending = "Pending",
    PreApproved = "Pre-Approved",
    Approved = "Approved",
    ApprovalExpired = "Approval Expired",
    Contracts = "Contracts",
    ContractsExpired = "Contracts Expired",
    ContractsIncomplete = "Contracts Incomplete",
    ContractsReceived = "Contracts Received",
    VCardAvailable = "VCard Available",
    LeaseAccepted = "Lease Accepted"
}
