import { inject } from "@angular/core"
import { Router } from "@angular/router"
import { AuthService } from "../services/auth.service";

export const CandAuth = () => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if(authService.IsAuthenticated()){
    return true;
  }else{
    router.navigate(['/welcome/:name']);
    return false;
  }
}