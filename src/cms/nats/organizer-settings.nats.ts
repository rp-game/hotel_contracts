import { ApiProperty } from '@nestjs/swagger';

/**
 * Request body for updating organizer/webshop settings.
 * Performs a shallow merge of top-level keys into existing settings.
 */
export class UpdateOrganizerSettingsBody {
  @ApiProperty({
    description: 'Hotel ID associated with this organizer',
    required: false,
    example: '550e8400-e29b-41d4-a716-446655440001',
  })
  hotel_id?: string;

  @ApiProperty({
    description: 'Theme configuration (base_theme, sectionTypes, etc.)',
    required: false,
    type: Object,
    example: {
      base_theme: 'travel-agency',
      sectionTypes: { hero: { enabled: true }, gallery: { columns: 3 } },
    },
  })
  theme?: Record<string, any>;

  @ApiProperty({
    description: 'Page-level settings keyed by page name',
    required: false,
    type: Object,
    example: {
      home: { hero_enabled: true, sections: ['hero', 'featured-rooms'] },
      about: { layout: 'full-width' },
    },
  })
  pages?: Record<string, any>;

  @ApiProperty({
    description: 'Navigation menus configuration',
    required: false,
    type: [Object],
    example: [
      { id: 'main', label: 'Main Menu', items: [{ label: 'Home', url: '/' }] },
      { id: 'footer', label: 'Footer Menu', items: [{ label: 'About', url: '/about' }] },
    ],
  })
  menus?: Record<string, any>[];

  // Allow any additional top-level keys (dynamic JSONB)
  [key: string]: any;
}

/**
 * Response wrapper for organizer settings endpoints.
 */
export class OrganizerSettingsResponse {
  @ApiProperty({
    description: 'The full merged settings object',
    type: Object,
    example: {
      hotel_id: '550e8400-e29b-41d4-a716-446655440001',
      theme: { base_theme: 'travel-agency', sectionTypes: {} },
      pages: { home: { hero_enabled: true } },
      menus: [{ id: 'main', label: 'Main Menu', items: [] }],
    },
  })
  settings: Record<string, any>;
}
