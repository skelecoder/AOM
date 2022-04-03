'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    const io = require('socket.io')(strapi.server.httpServer, {
      cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
      }
  });
    const users = [];
    
    io.on('connection', socket => {
      console.log('socket connected')
     
      socket.user_id = (Math.random() * 100000000000000); // not so secure
      
      users.push(socket); // save the socket to use it later
      
      socket.on('disconnect', () => {
        users.forEach((user, i) => {
          // delete saved user when they disconnect
          if(user.user_id === socket.user_id) users.splice(i, 1);
        });
      });
    });
   
    strapi.io = io;
    // send to all users connected
    strapi.emitToAllUsers = () => io.emit('new_intervention', {count:1});
  },
};
