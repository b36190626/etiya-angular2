import type { CanDeactivateFn } from '@angular/router';

export const canLeaveGuard: CanDeactivateFn<any> = (component, currentRoute, currentState, nextState) => {
  console.log(component)
  if (confirm("Girmiş olduğunuz değişiklikler kaybolacak, Devam etmek istiyor musunuz?")) {
    return true;
  } else {
    return false;
  }
};
