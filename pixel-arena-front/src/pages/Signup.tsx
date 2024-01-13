import { Button } from "@/components/ui/button";
import LeftBlock from "../components/Auth/LeftBlock";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Signup() {
  return (
    <>
      <div id="page" className="flex">
        <LeftBlock></LeftBlock>
        <div id="right" className="w-1/2 flex justify-center items-center">
          <div id="login-container" className="h-3/4 w-full flex flex-col items-center">
            <div id="login-title-container" className="w-full h-1/4 flex justify-center items-center">
              <h1 className="text-6xl">Inscription</h1>
            </div>

            <div id="form-container" className="h-2/4 w-3/5 grid grid-cols-2 py-10 gap-x-10 items-center">
              <div id="username" className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="username">Nom d'utilisateur</Label>
                <Input id="username"></Input>
              </div>

              <div id="email" className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Adresse email</Label>
                <Input type={"email"}></Input>
              </div>

              <div id="password" className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="password">Mot de passe</Label>
                <Input id="password" type={"password"}></Input>
              </div>

              <div id="confirmPassword" className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="confirmPassword">Confirmer mot de passe</Label>
                <Input type={"password"}></Input>
              </div>
            </div>

            <div id="footer" className="h-1/4 w-full flex flex-col items-center justify-around mt-6">
              <div id="btn-container" className="h-20 flex justify-center items-center">
                <Button size={"lg"}>
                  S&apos;inscrire
                </Button>
              </div>

              <div id="signup" className="h-20 flex justify-center items-end text-lg">
                <p>
                  Pas de compte ? <span className="text-primary font-semibold cursor-pointer underline underline-offset-4 hover:underline-offset-8 transition-all duration-200">
                    <Link to={"/signin"}>Connectez-vous</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
