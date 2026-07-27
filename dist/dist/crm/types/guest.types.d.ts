import { GuestStatus } from '../enums';
export interface Guest {
    id: string;
    tenantId: string;
    email: string;
    firstName: string;
    lastName: string;
    phone?: string;
    status: GuestStatus;
    totalStays: number;
    totalSpent: number;
    lastStayDate?: string;
    createdAt: string;
    updatedAt: string;
}
//# sourceMappingURL=guest.types.d.ts.map