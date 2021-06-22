import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as admin from 'firebase-admin';


@Injectable()
export class UserService {

    async createUser (displayName: string, password: string, email: string, role: string, id: string): Promise<any> {
        try {
          const {uid} = await admin.auth().createUser({
            uid: id,
            displayName,
            password,
            email
          });
         /*  await admin.auth().setCustomUserClaims(uid, {role}); */
          let message = "Created succesfully"
          return {uid, displayName, message};
        } catch (error) {
          throw new UnauthorizedException(error.message);
        }
    }

}
