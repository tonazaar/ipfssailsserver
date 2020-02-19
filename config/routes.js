/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝
  // …


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  // Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
  // from the Parasails library, or by using those method names as the `action` in <ajax-form>.

  'POST /api/auth/register': 'UserController.signup',
  'POST /api/auth/login': 'UserController.login',
  'GET /api/auth/protected': 'UserController.check',
  'POST /test': 'UserController.test',

  'GET /api/ipfsnode/startnode': 'IpfsnodeController.startnode',
  'GET /api/ipfsnode/stopnode': 'IpfsnodeController.stopnode',
  'POST /api/ipfsnode/getipfsconfig': 'IpfsnodeController.getipfsconfig',
  'POST /api/ipfsnode/getnodestatus': 'IpfsnodeController.getnodestatus',

  'POST /api/ipfsusage/getusage': 'IpfsusageController.getusage',
  'POST /api/ipfsusage/listfiles': 'IpfsusageController.listfiles',
  'POST /api/ipfsusage/createfile': 'IpfsusageController.createfile',
  'POST /api/ipfsusage/deletefile': 'IpfsusageController.deletefile',



};
