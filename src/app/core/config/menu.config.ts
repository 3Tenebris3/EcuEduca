import { MenuItem } from '../models/menu-item.model';

export const MENU_ITEMS: MenuItem[] = [
  /* === Visible para ambos === */
  { label: 'Inicio',       icon: 'home',        route: '/dashboard/home',      allowedRoles: ['admin', 'teacher'] },
  { label: 'Clases',       icon: 'class',       route: '/dashboard/classes',   allowedRoles: ['admin', 'teacher'] },
  { label: 'Cuestionarios',icon: 'quiz',        route: '/dashboard/quizzes',   allowedRoles: ['admin', 'teacher'] },

  /* === Solo Admin === */
  { label: 'Usuarios',     icon: 'group',       route: '/dashboard/users',     allowedRoles: ['admin'] },
  { label: 'Assets 3D',    icon: 'view_in_ar',  route: '/dashboard/assets',    allowedRoles: ['admin'] },
  { label: 'Reportes',     icon: 'analytics',   route: '/dashboard/reports',   allowedRoles: ['admin'] }
];