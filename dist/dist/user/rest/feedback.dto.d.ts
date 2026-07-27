import { FeedbackType, FeedbackPriority } from '../enums';
export declare class FeedbackDto {
    type: FeedbackType;
    subject: string;
    description: string;
    priority: FeedbackPriority;
    contactEmail: string;
    userAgent: string;
    appVersion: string;
}
export declare class FeedbackResponseDto {
    success: boolean;
    feedbackId: string;
    message: string;
}
//# sourceMappingURL=feedback.dto.d.ts.map