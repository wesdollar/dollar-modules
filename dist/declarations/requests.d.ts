import { RequestMeta, PurchaseMethods, TransformedProductData, PayFrequency, AppSettingsRequest } from "./common";
import { PostalAddress } from "./postal-address";
import { StatesAbbr } from "./us-states";
import { CartPricing } from "./finalize-cart";
import { SerpVendorData } from "./product-search";
export declare namespace Requests {
    interface AuthorizeCard {
        meta: RequestMeta;
        card: Card;
    }
    interface TokenizeAppleWalletRequest {
        prospectId: string;
        data: {
            deviceType: DeviceType;
            provisioningAppVersion: string;
            leafCertificate: string;
            subCACertificate: string;
            nonce: string;
            nonceSignature: string;
        };
    }
    interface TokenizeGoogleWalletRequest {
        prospectId: string;
        data: {
            deviceType: DeviceType;
            provisioningAppVersion: string;
            walletAccountId: string;
            deviceId: string;
        };
    }
    interface FinalizeCart {
        meta: RequestMeta;
        purchaseDetails: PurchaseDetails;
        products: TransformedProductData[];
    }
    interface ProductSearch {
        meta: RequestMeta;
        productSearchTerm?: string;
        retailerSource?: string;
        maxPrice?: string;
    }
    interface Applicant {
        meta: RequestMeta;
        applicant: ApplicantDetails;
    }
    interface RecentSearch {
        searchTerm: string;
    }
    interface ProspectUser {
        meta: RequestMeta;
        prospect: {
            cartPricing?: CartPricing;
            lastSelectedProduct?: TransformedProductData | null;
            lastSelectedVendor?: Vendor;
            acknowledgements: Acknowledgements;
            monthlyIncome: string;
            payFrequency: PayFrequency;
            purchaseDetails?: PurchaseDetails;
            lastCheckpoint?: string | null;
            contractSigned?: boolean;
            vCardActivated?: boolean;
            vCardUsed?: boolean;
            checkoutComplete?: boolean;
            billingAddressMismatch?: boolean;
            resetVcardTimer?: boolean;
            viewedContract?: boolean;
            cartDetails?: Cart;
        };
        ip?: string;
        created?: string;
        searches?: RecentSearch[];
    }
    interface ProspectApprovalRequest extends AppSettingsRequest {
        prospectApproval: ProspectApproval;
    }
    interface LeaseCostEstimator {
        cashPrice: string;
        paymentFrequency: PayFrequencyKeys;
        state: StatesAbbr;
    }
    interface NotificaitonAttempts {
        attemptTime: string;
        isSuccessful: boolean;
        failureCode?: string;
        failureMessage?: string;
        phone: string;
    }
    interface ReceiptsReceived {
        receiptId: string;
        receiptUrl: string;
        isReviewComplete: boolean;
        isValidReceipt: boolean;
    }
    interface PurchaseRecord {
        purchaseId: string;
        created: string;
        isReceiptRequired: boolean;
        notificationAttempts: NotificaitonAttempts[];
        receiptsReceived: ReceiptsReceived[];
        purchase: Requests.ProspectUser;
    }
    interface PurchaseHistory {
        _id: string;
        prospectId: string;
        phone: string;
        purchases: PurchaseRecord[];
        lastSmsMessageSentTime: string;
        created: string;
        lastModified: string;
    }
}
export interface Vendor extends SerpVendorData {
    retailerSource?: string;
}
export interface Cart {
    estimatedDeliveryDate: string;
    retailerCarts: RetailerCart[];
    purchaseMethod: PurchaseMethods;
}
export interface RetailerCart {
    salesTax?: string;
    shippingCost?: string;
    name: string;
    uuid: string;
    domain?: string;
    items: RetailerItem[];
    retailerSource?: string;
    totalOnRetailer?: number;
}
export interface RetailerItem {
    product: TransformedProductData;
    vendor: Vendor;
    uuid: string;
}
export interface ApplicantDetails {
    email: string;
    mobilePhone: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    ssn: string;
    address: PostalAddress;
    monthlyIncome: string;
    payFrequency: PayFrequency;
    acknowledgements: Acknowledgements;
    lastPayDate: string;
    nextPayDate: string;
}
export interface Acknowledgements {
    applicationDisclosure: boolean;
    eSignDisclosure: boolean;
    termsOfService: boolean;
    privacyPolicy: boolean;
    smsOptIn: boolean;
}
export interface PurchaseDetails {
    purchaseMethod: PurchaseMethods;
    shippingCost?: string;
    salesTax?: string;
    estimatedDeliveryDate: string;
}
export interface Card {
    cardNumber: string;
    expirationDate: string;
    nameOnCard: string;
    billingAddress: PostalAddress;
    cvv: string;
}
export declare type LeaseCostPayFrequency = {
    weekly: number;
    biweekly: number;
    semiMonthly: number;
    monthly: number;
};
export declare type ProspectApproval = {
    prospectId: string;
    approvalAmount: number;
    applicationId: string;
    storeId: number;
    applicationDate: string;
    approvalStatus: string;
};
export interface ProspectApprovalDocument extends ProspectApproval {
    _id?: string;
}
export declare type PayFrequencyKeys = "weekly" | "biweekly" | "semiMonthly" | "monthly";
export declare enum DeviceType {
    MOBILE_PHONE = 1,
    WATCH = 2,
    TABLET = 3
}
