'use strict';

/**
 *  intervention controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::intervention.intervention',({ strapi }) =>  ({
    async create(ctx) {
        // some logic here
        const response = await super.create(ctx);
       
        // some more logic
        strapi.emitToAllUsers();
       
        return response;
      }
  }));
