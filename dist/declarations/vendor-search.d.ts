export interface VendorSearchApiResponse {
    data: Array<VendorRecord>;
}
export interface VendorRecord {
    name: string;
    price: string;
    link: string;
}
export interface VendorSearchResponse {
    meta: {
        productId: string | number;
        totalVendors: number;
    };
    vendors: Array<VendorRecord>;
}
export declare type VendorsFetchSimValues = "FetchFailed" | "SuccessWithRecords" | "SuccessNoRecords" | undefined;
