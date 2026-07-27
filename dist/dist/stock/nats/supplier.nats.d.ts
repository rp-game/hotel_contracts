import { NatsResponse, NatsPaginatedResponse } from '../../common';
export declare class FindSuppliersRequest {
    tenantId: string;
    search?: string;
    isActive?: boolean;
    page?: number;
    limit?: number;
}
export declare class SupplierResponse {
    id: string;
    tenantId: string;
    name: string;
    contactPerson?: string;
    phone?: string;
    email?: string;
    address?: string;
    taxCode?: string;
    notes?: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export type FindSuppliersNatsResponse = NatsPaginatedResponse<SupplierResponse>;
export declare class FindOneSupplierRequest {
    tenantId: string;
    id?: string;
}
export type FindOneSupplierNatsResponse = NatsResponse<SupplierResponse>;
export declare class CreateSupplierRequest {
    tenantId: string;
    name: string;
    contactPerson?: string;
    phone?: string;
    email?: string;
    address?: string;
    taxCode?: string;
    notes?: string;
}
export type CreateSupplierNatsResponse = NatsResponse<SupplierResponse>;
export declare class UpdateSupplierRequest {
    tenantId: string;
    id: string;
    name?: string;
    contactPerson?: string;
    phone?: string;
    email?: string;
    address?: string;
    taxCode?: string;
    notes?: string;
}
export type UpdateSupplierNatsResponse = NatsResponse<SupplierResponse>;
export declare class DeleteSupplierRequest {
    tenantId: string;
    id?: string;
}
export type DeleteSupplierNatsResponse = NatsResponse<{
    success: boolean;
}>;
//# sourceMappingURL=supplier.nats.d.ts.map