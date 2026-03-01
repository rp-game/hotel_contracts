import { TenantType } from '../../user/types/tenant.types';
export declare class TenantResponseDto {
    id: string;
    name: string;
    type: TenantType;
    slug?: string;
    isActive: boolean;
    description?: string;
    hotels?: string[];
    chainId?: string;
    address?: string;
    city?: string;
    country?: string;
    contactEmail?: string;
    contactPhone?: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare class CreateTenantDto {
    name: string;
    type: TenantType;
    slug?: string;
    description?: string;
    hotels?: string[];
    chainId?: string;
    address?: string;
    city?: string;
    country?: string;
    contactEmail?: string;
    contactPhone?: string;
    operationSettings?: Record<string, any>;
}
export declare class UpdateTenantDto {
    name?: string;
    type?: TenantType;
    slug?: string;
    isActive?: boolean;
    description?: string;
    hotels?: string[];
    chainId?: string;
    address?: string;
    city?: string;
    country?: string;
    contactEmail?: string;
    contactPhone?: string;
    operationSettings?: Record<string, any>;
}
//# sourceMappingURL=tenant.dto.d.ts.map