import type { Schema, Attribute } from '@strapi/strapi';

export interface PhotoPlaceholder extends Schema.Component {
  collectionName: 'components_photo_placeholders';
  info: {
    displayName: 'Placeholder';
    description: '';
  };
  attributes: {
    img1: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'photo.placeholder': PhotoPlaceholder;
    }
  }
}
