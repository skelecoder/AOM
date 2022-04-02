'use strict';

/**
 * notification service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::notification.notification', ({ strapi }) =>  ({
    
    async find(params) {
        // some logic here
        const { results, pagination } = await super.find(params);
        // some more logic
      
        return { results, pagination };
      }
 }));
