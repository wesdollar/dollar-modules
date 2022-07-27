"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaseStatus = void 0;
var LeaseStatus;
(function (LeaseStatus) {
    LeaseStatus["Denied"] = "Denied";
    LeaseStatus["Pending"] = "Pending";
    LeaseStatus["PreApproved"] = "Pre-Approved";
    LeaseStatus["Approved"] = "Approved";
    LeaseStatus["ApprovalExpired"] = "Approval Expired";
    LeaseStatus["Contracts"] = "Contracts";
    LeaseStatus["ContractsExpired"] = "Contracts Expired";
    LeaseStatus["ContractsIncomplete"] = "Contracts Incomplete";
    LeaseStatus["ContractsReceived"] = "Contracts Received";
    LeaseStatus["VCardAvailable"] = "VCard Available";
    LeaseStatus["LeaseAccepted"] = "Lease Accepted";
})(LeaseStatus = exports.LeaseStatus || (exports.LeaseStatus = {}));
