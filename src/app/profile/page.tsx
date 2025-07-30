
import { auth , signIn , signOut } from "@/auth"
 
export default async function SignIn() {
    const session = await auth();
    console.log(session);
    const user = session?.user;

  return user ? 
  (
    <>
        <h1 className="text-2xl">Welcome {user.name}</h1>
        <form
            action={async () => {
                "use server"
                await signOut();
            }}
            >
            <button type="submit" className="p-2 border-2 bg-blue-400">Sign Out</button>
        </form>
    </>
  )
  : 
  (
    <>
        <h1>You are not authenticated yet</h1>
        <form
            action={async () => {
                "use server"
                await signIn("google", {redirectTo: "/secret"});
            }}
        >
            <button type="submit" className="p-2 border-2 bg-blue-400">Sign In</button>
        </form>
    </>
  )
} 