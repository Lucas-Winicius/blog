import Signin from "@/components/Signin.register";
import Signup from "@/components/Signup.register";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
