import { Button } from "@chakra-ui/react";
import LeftBlock from "../components/Auth/LeftBlock";
import MyInput from "../components/MyInput";
import { Link } from "react-router-dom";

export function Signup() {
  return (
    <div id="page" className="flex">
      <LeftBlock></LeftBlock>
      <div id="right" className="w-1/2 flex justify-center items-center">
        <div id="siggnup-container" className="h-4/5 w-full flex flex-col items-center">
          <div id="siggnup-title-container" className="w-full h-1/4 flex justify-center items-center">
            <h1 className="text-6xl font-light">Inscription</h1>
          </div>

          <div id="form-container" className="h-2/5 w-3/5 grid grid-cols-2 grid-rows-2 gap-x-24 bg- items-center">
            <div id="email" className="h-1/2 bg- flex items-center">
              <MyInput label={"Nom d'utilisateur"} type={"text"}></MyInput>
            </div>

            <div id="email" className="h-1/2 bg- flex items-center">
              <MyInput label={"Email"} type={"email"}></MyInput>
            </div>

            <div id="email" className="h-1/2 bg- flex items-center">
              <MyInput label={"Mot de passe"} type={"password"}></MyInput>
            </div>

            <div id="pwd" className="h-1/2 bg- flex items-center">
              <MyInput label={"Confirmer mot de passe"} type={"password"}></MyInput>
            </div>
          </div>

          <div id="footer" className="h-1/3 w-full flex flex-col items-center justify-center bg-">
            <div id="btn-container" className="h-20 flex justify-center items-center">
              <Button fontSize={"large"} size={"lg"} rightIcon={<span className="material-symbols-outlined">person_add</span>} bg={"primary"} _hover={{ opacity: 0.8 }}>
                S&apos;inscrire
              </Button>
            </div>

            <div id="signup" className="h-20 flex justify-center items-end text-lg">
              <p>
                Déjà un compte ?{" "}
                <span className="text-primary font-semibold cursor-pointer underline underline-offset-4 hover:underline-offset-8 transition-all duration-200">
                  <Link to={"/signin"}>Connectez-vous</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
