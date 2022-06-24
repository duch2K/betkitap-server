import { Request, Response } from 'express';
import UserService from '@/services/user.service';

export default class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
    console.log('Init UserController');
  }

  async getAllUsers(req: Request, res: Response) {
    const users = await this.service.getAllUsers();
    res.json({
      data: users
    });
  }
}
