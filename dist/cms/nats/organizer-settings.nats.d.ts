/**
 * Request body for updating organizer/webshop settings.
 * Performs a shallow merge of top-level keys into existing settings.
 */
export declare class UpdateOrganizerSettingsBody {
    hotel_id?: string;
    theme?: Record<string, any>;
    pages?: Record<string, any>;
    menus?: Record<string, any>[];
    [key: string]: any;
}
/**
 * Response wrapper for organizer settings endpoints.
 */
export declare class OrganizerSettingsResponse {
    settings: Record<string, any>;
}
//# sourceMappingURL=organizer-settings.nats.d.ts.map