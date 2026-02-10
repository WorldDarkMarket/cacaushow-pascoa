'use client';

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

export default function RegisterDialog() {
  const { registerOpen, setRegisterOpen, signUp } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signUp(name, email, password);
      toast.success("Cadastro realizado");
      setName("");
      setEmail("");
      setPassword("");
    } catch (e) {
      toast.error(typeof e === "string" ? e : "Não foi possível cadastrar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={registerOpen} onOpenChange={setRegisterOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Cadastrar</DialogTitle>
        </DialogHeader>
        <form onSubmit={submit} className="space-y-3">
          <Input placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
          <Input placeholder="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Cadastrando..." : "Cadastrar"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
