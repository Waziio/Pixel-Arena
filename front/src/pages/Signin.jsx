import { Button } from "@chakra-ui/react";
import LeftBlock from "../components/Auth/LeftBlock";
import MyInput from "../components/MyInput";

export default function Signin() {
  return (
    <>
      <div id="page" className="flex">
        <LeftBlock></LeftBlock>
        <div id="right" className="w-1/2 flex justify-center items-center">
          <div id="login-container" className="h-3/4 w-full flex flex-col items-center">
            <div id="login-title-container" className="w-full h-1/4 flex justify-center items-center">
              <h1 className="text-5xl font-light">Connexion</h1>
            </div>

            <div id="form-container" className="h-2/4 w-2/5 flex flex-col gap-10 justify-center">
              <div id="email" className="">
                <MyInput label={"Email"} type={"email"}></MyInput>
              </div>

              <div id="pwd">
                <MyInput label={"Mot de passe"} type={"password"}></MyInput>
              </div>
            </div>

            <div id="footer" className="h-1/4 w-full flex flex-col items-center mt-6">
              <div id="btn-container" className="h-20 flex justify-center items-center">
                <Button size={"lg"} rightIcon={<span className="material-symbols-outlined">login</span>} bg={"primary"} _hover={{opacity: 0.8}}>
                  Se connecter 
                </Button>
              </div>

              <div id="signup" className="h-20 flex justify-center items-center">
                <p>
                  Pas de compte ? <span className="text-primary font-semibold cursor-pointer underline underline-offset-4 hover:underline-offset-8 transition-all duration-200">Crééz en un</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
