import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";
import { CreateStudentController } from "./controllers/CreateStudentController";
import { ListStudentsController } from "./controllers/ListStudentsController";



const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();
const createStudentController = new CreateStudentController();
const listStudentsController = new ListStudentsController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticated , createComplimentController.handle); 
router.post("/students", ensureAuthenticated, createStudentController.handle)


router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsController.hundle );
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentsController.hundle );

router.get("/tags", ensureAuthenticated, listTagsController.handle);

router.get("/users",ensureAdmin , listUsersController.handle);
router.get("/students", ensureAuthenticated, listStudentsController.handle);

export { router };

