import { Role } from './role.enum';

export interface MenuItem {
  label: string;
  icon: string;          // nombre de icono Material
  route: string;         // path absoluto
  allowedRoles: Role[];  // quién puede verlo
}