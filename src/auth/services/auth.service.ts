import { auth } from "@/core"
import { signInWithEmailAndPassword, signOut, User } from "firebase/auth"

interface LoginResponse {
  user: User | null
  error: string | null
}

export class AuthService {
  static login = async (email: string, password: string): Promise<LoginResponse> => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password)
      return {
        user,
        error: user ? null : "Error al iniciar sesión"
      }
    } catch (error) {
      console.log(error)

      return {
        user: null,
        error: "Error al iniciar sesión"
      }
    }
  }

  static singOutSession = async (): Promise<Pick<LoginResponse, "error">> => {
    try {
      await signOut(auth)
      return {
        error: null
      }
    } catch (error) {
      console.log(error)
      
      return {
        error: "Error al cerrar sesión"
      }
    }
  }
}