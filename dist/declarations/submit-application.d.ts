export declare type ApplicationStatuses = "Approved" | "Denied" | "Pending" | "Pre-Approved";
/**
 * API Response
 * {
 *  "applicationId": "string",
 *  "status": "string",
 *  "approvalAmount": 0,
 *  "isOkToDeliver": true
 *  }
 */
export declare type QuerySim = ApplicationStatuses;
export interface LightningApiRequestBody {
    store: {
        progressiveMerchantId: number;
        merchantStoreId: string;
        salesAssociate: string;
        merchantApplicationIdentifier: string;
        merchantTerminalId: string;
    };
    disclosureCode: number;
    languagePreference: "en";
    marketingOptIn: boolean;
    smsOptIn: boolean;
    threatMetrixId: string;
    applicationSource: string;
    customer: {
        merchantCustomerId: string;
        firstName: string;
        lastName: string;
        ssn: string;
        birthdate: string;
        homePhone: string;
        cellPhone: string;
        emailAddress: string;
        incomeSourceType: string;
        incomeName: string;
        grossIncomeMonthly: number;
        paymentFrequency: {
            payFrequency: string;
            nextPayDate: string;
            lastPayDate: string;
        };
        homeAddress: {
            streetAddress1: string;
            streetAddress2: string;
            city: string;
            state: string;
            zip: string;
        };
    };
    custom: {
        keys: [
            {
                key: "isUnbanked";
                value: "true";
            }
        ];
    };
}
export interface LightningApiResponse {
    status: number;
    detail: string;
    errors: Array<Record<string, unknown>>;
}
export declare type CommerceApiResponse = {
    applicationId: string;
    status: ApplicationStatuses;
    approvalAmount: number;
    isOkToDeliver: boolean;
};
