import { SalesAssociate, ProgMerchantId, MerchantApplicationIdentifier, CreditCard } from "./common";
export interface CartPricing {
    appStatus: {
        applicationId: string;
        status: string;
        approvalAmount: string;
        isOkToDeliver: boolean;
    };
    cashPrice: string;
    costOfRental: string;
    depositAmount: string;
    depositSalesTax: string;
    effectiveLeaseBalance: string;
    estimatedTax: string;
    initialBalance: string;
    initialBalancePlusEstimatedTax: string;
    initialPaymentAmount: string;
    invoiceTotal: string;
    invoiceRemaining: string;
    depositNet: string;
    nextPaymentDate: string;
    ninetyDayBuyout: string;
    totalNumberOfPayment: number;
    paymentFrequency: string;
    periodicPaymentAmount: string;
    salesTaxRate: number;
    sumOfAllPayments: string;
    termInMonths: number;
    totalLeasePrice: string;
    totalDueAtSigning: string;
    totalRetailerDeliveryFees: string;
    totalTax: string;
}
export declare namespace CommerceApi {
    interface CartPricingGet {
        appStatus: {
            applicationId: string;
            status: string;
            approvalAmount: number;
            isOkToDeliver: boolean;
        };
        cashPrice: number;
        costOfRental: number;
        depositAmount: number;
        depositSalesTax: number;
        effectiveLeaseBalance: number;
        estimatedTax: number;
        initialBalance: number;
        initialBalancePlusEstimatedTax: number;
        initialPaymentAmount: number;
        invoiceTotal: number;
        invoiceRemaining: number;
        depositNet: number;
        nextPaymentDate: string;
        ninetyDayBuyout: number;
        totalNumberOfPayment: number;
        paymentFrequency: string;
        periodicPaymentAmount: number;
        salesTaxRate: number;
        sumOfAllPayments: number;
        termInMonths: number;
        totalLeasePrice: number;
        totalDueAtSigning: number;
        totalRetailerDeliveryFees: number;
        totalTax: number;
    }
    interface CartPost {
        Store: {
            progressiveMerchantId: number;
            merchantStoreId: string;
            salesAssociate: string;
            merchantApplicationIdentifier: string;
            merchantTerminalId: string;
        };
        applicationId: number;
        deliveryDate: string;
        merchantTransactionId: string;
        cartTotal: number;
        items: CartItem[];
        custom: {
            keys: [
                {
                    key: "isUnbanked";
                    value: "true";
                }
            ];
        };
    }
    interface CartItem {
        sku: string;
        description: string;
        priceEach: number;
        quantity: number;
        lineTotal: number;
        isNew: true;
        type: "DeliveryFee" | "LeaseItem";
    }
    interface CartStore {
        progressiveMerchantId: number;
        merchantStoreId: string;
        salesAssociate: string;
        merchantApplicationIdentifier: string;
        merchantTerminalId: string;
    }
    interface CardPost {
        applicationId: number;
        store: CartStore;
        card: CreditCard;
    }
    interface ContractGet {
        applicationId: number;
    }
    interface CartDeliveryPost {
        store: {
            progressiveMerchantId: ProgMerchantId;
            merchantStoreId: ProgMerchantId;
            salesAssociate: SalesAssociate;
            merchantApplicationIdentifier: MerchantApplicationIdentifier;
            merchantTerminalId: string;
        };
        applicationId: number;
        deliveryDate: string;
    }
}
export declare namespace FinalizeCartApiResponses {
    interface BadRequest {
        type?: string;
        title?: string;
        status?: number;
        detail?: string;
        instance?: string;
        errors?: unknown;
    }
    interface Conflict {
        type?: string;
        title?: string;
        status?: number;
        detail?: string;
        instance?: string;
        additionalProp1?: [];
        additionalProp2?: [];
        additionalProp3?: [];
    }
    interface ServerError {
        type?: string;
        title?: string;
        status?: number;
        detail?: string;
        instance?: string;
        additionalProp1?: [];
        additionalProp2?: [];
        additionalProp3?: [];
    }
}
