'use strict';

/**
 * intervention service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::intervention.intervention', ({ strapi }) =>  ({
    
  async create(params) {
    // some logic here
    const result = await super.create(params);
    // some more logic
  
    return result;
  }
 }));
