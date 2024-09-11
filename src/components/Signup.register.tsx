import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { TabsContent } from "./ui/tabs";

export default function Signup() {
  return (
    <TabsContent value="login">
      <Card>
        <CardHeader>
          <CardTitle>Entrar</CardTitle>
          <CardDescription>Seja Bem-Vindo(a), unknown!</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="username">Nome de usuário</Label>
            <Input id="username" placeholder="a.juninho123" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" placeholder="*********" />
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="default">Entrar</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
}
