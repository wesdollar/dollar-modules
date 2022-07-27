import { TransformedProductData } from "./common";
export interface Product {
    name: string;
    lowestPrice: string;
    rating: number;
    totalRatings: number;
    thumbnailImage: string;
}
export declare type TransformedResponse = Array<TransformedProductData>;
export declare type ProductSearchLog = {
    ip: string;
    totalResults: number;
    searchTerm: string;
    lat: string;
    long: string;
    location: string;
    deviceId: string;
    prospectId: string;
    created: string;
    retailerSource?: string;
};
export interface ProductSearchResponse {
    meta: {
        totalResults: number;
        pagination: Record<string, unknown>;
        searchInfo: Record<string, unknown>;
        searchMeta: Record<string, unknown>;
        searchParameters: Record<string, unknown>;
        serpPagination: Record<string, unknown>;
    };
    products: SerpProductData[];
    filters: [];
    error?: string;
}
export interface SerpProductData {
    product: {
        position: number;
        title: string;
        link: string;
        product_link: string;
        product_id: string;
        serpapi_product_api: string;
        source: string;
        price: string;
        extracted_price: number;
        rating: number;
        reviews: number;
        extensions: [];
        thumbnail: string;
        tag: string;
        delivery: string;
    };
    vendors: SerpVendorData[];
}
export interface SerpVendorData {
    name: string;
    price: number;
    shipping: number;
    tax: number;
    link: string;
}
