import Signin from "@/components/Signin.register";
import Signup from "@/components/Signup.register";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function About() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="create">Criar</TabsTrigger>
          <TabsTrigger value="login">Entrar</TabsTrigger>
        </TabsList>
        <Signin />
        <Signup />
      </Tabs>
    </div>
  );
}
