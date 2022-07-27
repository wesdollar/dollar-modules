import { CartPricing } from "./finalize-cart";
import { TransformedProductData } from "./common";
import { ApplicationStatuses } from "./submit-application";
import { StatesAbbr } from "./us-states";
import { Requests } from "./requests";
import { ErrorResponse } from "./error-response";
export declare namespace Responses {
    interface ProspectDocument extends Requests.ProspectUser {
        _id?: string;
    }
    interface FinalizeCart {
        success: boolean;
        status: number;
        cartPricing?: CartPricing;
        cartId?: number;
        rawErrorResponse?: Record<string, unknown>;
    }
    interface AuthorizeCard {
        success: boolean;
        status: number;
        cardAuthStatusCode: number;
        contract: string;
    }
    interface ResetContract {
        success: boolean;
        vCardUsed: boolean;
        error?: ErrorResponse;
    }
    interface ProductSearch {
        meta: {
            searchTerm: string;
            totalItems: number;
            serpMeta: Record<string, unknown>;
        };
        products: TransformedProductData[];
        filters: [];
    }
    interface SubmitApplication {
        status: number;
        application: {
            status: ApplicationStatuses;
            applicationId: string;
            approvalAmount: string;
            isOkToDeliver: boolean;
        };
    }
    interface VCardActiveUntil {
        activeUntil: string;
    }
    interface VCard extends VCardActiveUntil {
        number: string;
        cvv: string;
        expiration: string;
        cardProvider: string;
        activeTo: string;
    }
    interface TokenizeAppleWalletResponse {
        cardToken: string;
        encryptedPassData: string;
        activationData: string;
        ephemeralPublicKey: string;
    }
    interface TokenizeGoogleWalletResponse {
        createdTime: string;
        lastModifiedTime: string;
        cardToken: string;
        pushTokenizeRequestData: {
            displayName: string;
            lastDigits: string;
            network: string;
            tokenServiceProvider: string;
            opaquePaymentCard: string;
            userAddress: {
                name: string;
                address1: string;
                address2: string;
                city: string;
                state: string;
                postalCode: string;
                country: string;
                phone: string;
            };
        };
    }
    interface LookupLocation {
        city: string;
        state: StatesAbbr;
        panyEnabled: boolean;
        storeId: string | null;
        salesTaxEnabled?: boolean;
        testingEnabled?: boolean;
        lat?: string;
        long?: string;
    }
    interface LeaseCostEstimator {
        leaseTermId: number;
        costOfRental: number;
        initialBalance: number;
        initialCashPrice: number;
        initialPayment: number;
        initialPaymentHigh: number;
        invoiceAmount: number;
        periodicPayment: number;
        termMonths: number;
        numberOfPayments: number;
        numberOfRecurringPayments: number;
        paymentFrequency: string;
        paymentFrequencyId: number;
        termMonthEstimates: [
            {
                paymentMonth: number;
                costOfLease: number;
                cumulativeAmountPaid: number;
                paymentNumber: number;
                paymentAmount: number;
            },
            {
                paymentMonth: number;
                costOfLease: number;
                cumulativeAmountPaid: number;
                paymentNumber: number;
                paymentAmount: number;
            },
            {
                paymentMonth: number;
                costOfLease: number;
                cumulativeAmountPaid: number;
                paymentNumber: number;
                paymentAmount: number;
            },
            {
                paymentMonth: number;
                costOfLease: number;
                cumulativeAmountPaid: number;
                paymentNumber: number;
                paymentAmount: number;
            },
            {
                paymentMonth: number;
                costOfLease: number;
                cumulativeAmountPaid: number;
                paymentNumber: number;
                paymentAmount: number;
            },
            {
                paymentMonth: number;
                costOfLease: number;
                cumulativeAmountPaid: number;
                paymentNumber: number;
                paymentAmount: number;
            },
            {
                paymentMonth: number;
                costOfLease: number;
                cumulativeAmountPaid: number;
                paymentNumber: number;
                paymentAmount: number;
            },
            {
                paymentMonth: number;
                costOfLease: number;
                cumulativeAmountPaid: number;
                paymentNumber: number;
                paymentAmount: number;
            },
            {
                paymentMonth: number;
                costOfLease: number;
                cumulativeAmountPaid: number;
                paymentNumber: number;
                paymentAmount: number;
            },
            {
                paymentMonth: number;
                costOfLease: number;
                cumulativeAmountPaid: number;
                paymentNumber: number;
                paymentAmount: number;
            },
            {
                paymentMonth: number;
                costOfLease: number;
                cumulativeAmountPaid: number;
                paymentNumber: number;
                paymentAmount: number;
            },
            {
                paymentMonth: number;
                costOfLease: number;
                cumulativeAmountPaid: number;
                paymentNumber: number;
                paymentAmount: number;
            }
        ];
    }
    namespace Capi {
        interface ApplicationStatus {
            status: number;
            data: {
                applicationId: {
                    storeApplicationIdentifier: string;
                    accountNumber: number;
                };
                approvalStatus: string;
                approvalLimit: number;
                statusReason: string;
                approvalReason: string;
            };
        }
        interface Application {
            status: number;
            data: {
                applicationId: string;
                status: string;
                approvalAmount: number;
                isOkToDeliver: boolean;
                dateOfApplication: string;
                invoiceAmount: number;
                merchantTransactionId: string;
                firstName: string;
                lastName: string;
                homePhone: string;
                cellPhone: string;
                emailAddress: string;
                homeAddress: {
                    streetAddress1: string;
                    streetAddress2: string;
                    city: string;
                    state: string;
                    zip: string;
                };
                initialPaymentSalesTaxAmount: number;
                initialPaymentPreSalesTax: number;
                initialPaymentTotal: number;
                periodicPaymentTotal: number;
                payFrequency: string;
            };
        }
    }
}
