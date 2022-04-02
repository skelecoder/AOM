module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '61c5a438ae4a0a0048313f53cc78ef80'),
  },
});
