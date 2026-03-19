import { UserResponseDto } from '../../user/nats/user.nats';
export declare class LoginNatsRequest {
    email: string;
    password: string;
    ipAddress?: string;
    userAgent?: string;
}
export declare class CreateUserCredentialsNatsRequest {
    userId: string;
    email: string;
    hashedPassword: string;
    emailVerified?: boolean;
}
export declare class RefreshTokenNatsRequest {
    refreshToken: string;
}
export declare class LogoutNatsRequest {
    refreshToken?: string;
}
export declare class CheckPermissionNatsRequest {
    userId: string;
    resource: string;
    action: string;
    tenantId?: string;
    hotelId?: string;
}
export declare class ChangePasswordNatsRequest {
    userId: string;
    currentPassword: string;
    newPassword: string;
}
export declare class ResetPasswordNatsRequest {
    email: string;
}
export declare class LoginNatsResponse {
    accessToken: string;
    refreshToken: string;
    tokenType: string;
    expiresIn: number;
    user: UserResponseDto;
}
export declare class ValidationNatsResponse {
    isValid: boolean;
    userId: string;
    permissions: string[];
    tenantId?: string;
    hotelId?: string;
}
//# sourceMappingURL=auth.nats.d.ts.map