'use strict';

/**
 * all-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::all-user.all-user');
