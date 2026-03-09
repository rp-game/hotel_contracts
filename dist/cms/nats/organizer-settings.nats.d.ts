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
 * A single section within a page config.
 */
export declare class PageSectionDto {
    id: string;
    type: string;
    data?: Record<string, any>;
    visible?: boolean;
}
/**
 * Request body for updating a page config (PUT pages-settings/:name).
 * Mirrors riptik's PageConfigRequest struct.
 */
export declare class UpdatePageSettingsBody {
    title?: Record<string, string>;
    sections?: PageSectionDto[];
}
/**
 * Request body for updating a menu (PUT menus/:menuType).
 */
export declare class UpdateMenuBody {
    items: Record<string, any>[];
}
/**
 * Request body for upserting a custom domain.
 */
export declare class UpdateDomainBody {
    domain_name: string;
    domain_type?: string;
}
/**
 * Domain info returned from webshop.
 */
export declare class DomainInfoDto {
    domain_name: string;
    domain_type: string;
    verified: boolean;
    ssl_enabled: boolean;
}
/**
 * Response wrapper for organizer settings endpoints.
 */
export declare class OrganizerSettingsResponse {
    settings: Record<string, any>;
}
//# sourceMappingURL=organizer-settings.nats.d.ts.map