import { permission } from "../store/Login/permisson.store";
const permissionHandler = requirements => {
  if (requirements)
    setTimeout(() => {
      permission.yes();
    }, 5000);
  else permission.no();
};
export default permissionHandler;
