import React, { useState } from "react";
import axios from "axios";

export default function CadastroClientes() {
  const [form, setForm] = useState({
    pri_nome: "",
    sob_nome: "",
    cpf: "",
    país: "",
    estado: "",
    cidade: "",
    bairro: "",
    rua: "",
    end_numero: "",
    end_detalhe: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/clientes", form);
      alert("Cliente cadastrado com sucesso!");
    } catch (err) {
      alert("Erro ao cadastrar cliente");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-4xl"
      >
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
          Cadastro de Clientes
        </h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Campo: Primeiro Nome */}
          <div>
            <label className="text-gray-700 font-semibold">Primeiro Nome</label>
            <input
              name="pri_nome"
              value={form.pri_nome}
              onChange={handleChange}
              placeholder="Digite o primeiro nome"
              className="border p-3 w-full rounded-xl mt-1 shadow-sm"
              required
            />
          </div>

          {/* Campo: Sobrenome */}
          <div>
            <label className="text-gray-700 font-semibold">Sobrenome</label>
            <input
              name="sob_nome"
              value={form.sob_nome}
              onChange={handleChange}
              placeholder="Digite o sobrenome"
              className="border p-3 w-full rounded-xl mt-1 shadow-sm"
              required
            />
          </div>

          {/* Campo: CPF */}
          <div>
            <label className="text-gray-700 font-semibold">CPF</label>
            <input
              name="cpf"
              value={form.cpf}
              onChange={handleChange}
              placeholder="Apenas números"
              className="border p-3 w-full rounded-xl mt-1 shadow-sm"
              required
            />
          </div>

          {/* Campo: Pais */}
          <div>
            <label className="text-gray-700 font-semibold">País</label>
            <input
              name="país"
              value={form.país}
              onChange={handleChange}
              placeholder="Digite o país"
              className="border p-3 w-full rounded-xl mt-1 shadow-sm"
              required
            />
          </div>

          {/* Campo: Estado */}
          <div>
            <label className="text-gray-700 font-semibold">Estado</label>
            <input
              name="estado"
              value={form.estado}
              onChange={handleChange}
              placeholder="Digite o estado"
              className="border p-3 w-full rounded-xl mt-1 shadow-sm"
              required
            />
          </div>

          {/* Campo: Cidade */}
          <div>
            <label className="text-gray-700 font-semibold">Cidade</label>
            <input
              name="cidade"
              value={form.cidade}
              onChange={handleChange}
              placeholder="Digite a cidade"
              className="border p-3 w-full rounded-xl mt-1 shadow-sm"
              required
            />
          </div>

          {/* Campo: Bairro */}
          <div>
            <label className="text-gray-700 font-semibold">Bairro</label>
            <input
              name="bairro"
              value={form.bairro}
              onChange={handleChange}
              placeholder="Digite o bairro"
              className="border p-3 w-full rounded-xl mt-1 shadow-sm"
              required
            />
          </div>

          {/* Campo: Rua */}
          <div>
            <label className="text-gray-700 font-semibold">Rua</label>
            <input
              name="rua"
              value={form.rua}
              onChange={handleChange}
              placeholder="Digite a rua"
              className="border p-3 w-full rounded-xl mt-1 shadow-sm"
              required
            />
          </div>

          {/* Campo: Número */}
          <div>
            <label className="text-gray-700 font-semibold">Número</label>
            <input
              name="end_numero"
              value={form.end_numero}
              onChange={handleChange}
              placeholder="Número"
              className="border p-3 w-full rounded-xl mt-1 shadow-sm"
              required
            />
          </div>

          {/* Campo: Complemento */}
          <div>
            <label className="text-gray-700 font-semibold">Detalhes</label>
            <input
              name="end_detalhe"
              value={form.end_detalhe}
              onChange={handleChange}
              placeholder="Apartamento, bloco..."
              className="border p-3 w-full rounded-xl mt-1 shadow-sm"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-10 w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold shadow hover:bg-blue-700 transition"
        >
          Cadastrar Cliente
        </button>
      </form>
    </div>
  );
}
