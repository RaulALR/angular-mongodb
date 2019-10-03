const router = require('express').Router();
const midAuth = require('../middlewares/authentication-middleware')

const routerList = [
    {
        route: '/contacts',
        properties: ['get', 'post']
    },
    {
        route: '/contacts/:contact_id',
        properties: ['get', 'patch', 'put', 'delete']
    },
    {
        route: '/login',
        properties: ['post']
    },
    {
        route: '/register',
        properties: ['post']
    }
];

router.get('/', function (req, res) {
    res.json(routerList);
});

// Contact router
var contactController = require('../controllers/contact-controllers');
router.route('/contacts')
    .get(midAuth.requiresLogin, contactController.index)
    .post(midAuth.requiresLogin, contactController.new);

//Contacts by id router 
router.route('/contacts/:contact_id')
    .get(midAuth.requiresLogin, contactController.view)
    .patch(midAuth.requiresLogin, contactController.update)
    .put(midAuth.requiresLogin, contactController.update)
    .delete(midAuth.requiresLogin, contactController.delete);

//Login router
var loginController = require('../controllers/login-controller');
router.route('/login')
    .post(loginController.login);

//Register user router
var registerUserController = require('../controllers/register-user-controller');
router.route('/registerUser')
    .post(registerUserController.registerUser)
    .get(registerUserController.createToken);

module.exports = router;