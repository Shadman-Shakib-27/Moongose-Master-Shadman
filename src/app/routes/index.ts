import { Router } from 'express';
import { StudentRoutes } from '../modules/student/student.router';
import { UserRoutes } from '../user/user.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;