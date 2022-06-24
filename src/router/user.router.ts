import { Router } from 'express';
import UserController from '@/controllers/user.controller';

export default class UserRouter {
  router: Router
  path: string
  controller: UserController

  constructor() {
    this.path = '/user'
    this.router = Router()
    this.controller = new UserController();
    this.initRoutes()
  }

  initRoutes() {
    this.router.get('/users', this.controller.getAllUsers);
  }
}
