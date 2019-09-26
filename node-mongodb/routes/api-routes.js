const router = require('express').Router();
const midAuth = require('../middlewares/authentication')

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
    .get(contactController.index)
    .post(contactController.new);

//Contacts by id router 
router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);

//Login router
var loginController = require('../controllers/login-controller');
router.route('/login')
    .post(loginController.login);

//Register user router
var registerUserController = require('../controllers/register-user-controller');
router.route('/registerUser')
    .post(registerUserController.registerUser);

module.exports = router;