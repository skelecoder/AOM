'use strict';

/**
 *  notification controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

const { PassThrough } = require("stream");

module.exports = createCoreController('api::notification.notification', ({ strapi }) =>  ({
    
    // Method 2: Wrapping a core action (leaves core logic in place)
    async find(ctx) {

      //   ctx.request.socket.setTimeout(0);
      //   ctx.req.socket.setNoDelay(true);
      //   ctx.req.socket.setKeepAlive(true);
    
      //   ctx.set({
      //     "Content-Type": "text/event-stream",
      //     "Cache-Control": "no-cache",
      //     "Connection": "keep-alive",
      //   });
    
      //   const stream = new PassThrough();
    
      //   ctx.status = 200;
      //   ctx.body = stream;
    
       const { data, meta } = await super.find(ctx);

      // stream.write(`data: ${data.length}\n\n`);
  
      return { data, meta };
    },
 }));
