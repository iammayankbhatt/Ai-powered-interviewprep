const {Router} = require("express")
const authController = require("../controllers/auth.controller")
const authMiddleware= require("../middlewares/auth.middleware")
const authRouter = Router()
/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public
 * 
 */
authRouter.post("/register",authController.registerUserController)

/**
 * @route POST /api/auth/login
 * @description Login user
 * @access Public
 * 
 */
authRouter.post("/login",authController.loginUserController)


/**
 * @route GET /api/auth/logout
 * @description Log out the user
 * @access Public
 * 
 */
authRouter.get("/logout",authMiddleware.authUser,authController.logoutUserController)


/**
 * @route GET /api/auth/get-me
 * @description Get the current logged-in user details
 * @access Private
 * 
 */
authRouter.get("/get-me",authMiddleware.authUser,authController.getMeController)


/**
 * @route DELETE /api/auth/delete
 * @description Get the current logged-in user details
 * @access Private
 * 
 */
authRouter.delete("/delete",authMiddleware.authUser, authController.deleteAccountController)

module.exports= authRouter