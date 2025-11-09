"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useForm } from "@/hooks/useForm";
import { initialValues } from "./initialValues";

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const { form, handleForm } = useForm(initialValues);

  const handleLogin = () => {
    // Aquí iría la lógica de login
    // Por ahora, solo redirigimos a /dashboard (ejemplo)
    router.push("/dashboard");
  };

  const handleGoogleLogin = () => {
    // Lógica para login con Google (solo placeholder)
  };

  const handleRegister = () => {
    router.push("/registro");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {/* Contenedor flotante con sombra y margen */}
      <div className="flex w-full max-w-5xl min-h-[600px] bg-white rounded-2xl shadow-xl overflow-hidden m-8">
        {/* Columna de la imagen */}
        <div className="hidden md:flex md:w-1/3 bg-gray-200 items-center justify-center">
          <Image
            src='/bg/bell_adidas.jpg'
            width={424}
            height={676}
            quality={97}
            alt="Login Illustration"
            className="object-cover h-full w-full"
          />
        </div>

        {/* Columna del formulario */}
        <div className="flex flex-col justify-center md:w-1/2 p-10 max-w-lg mx-auto w-full">
          <h1 className="text-3xl font-bold mb-2">Iniciar Sesión</h1>
          <p className="text-gray-600 mb-6">
            Accede a tu cuenta para continuar
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="username" className="block mb-1 font-medium">
                Email
              </label>
              <input
                id="username"
                type="text"
                name="username"
                value={form.username}
                onChange={handleForm}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tu email"
                required
              />
            </div>

            <div className="relative">
              <label htmlFor="password" className="block mb-1 font-medium">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={handleForm}
                className="w-full border border-gray-300 rounded px-3 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tu contraseña"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(prev => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-blue-600 hover:underline"
                tabIndex={-1}
              >
                {showPassword ? "Ocultar" : "Mostrar"}
              </button>
              <p className="text-sm text-blue-600 mt-1 cursor-pointer hover:underline">
                ¿Olvidaste tu contraseña?
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Ingresar
            </button>
          </form>

          {/* Separador que divide el formulario de los botones */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500">o</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Botón de Google brandeado */}
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center border border-gray-300 py-2 rounded hover:bg-gray-100 transition"
          >
            <Image
              src="/logos/google_logo.png"
              width={25}
              height={25}
              quality={95}
              alt="Google Logo"
              className="h-5 w-5 mr-2"
            />
            Ingresar con Google
          </button>

          {/* Botón para registrarse */}
          <button
            onClick={handleRegister}
            className="w-full mt-4 border border-blue-600 text-blue-600 py-2 rounded hover:bg-blue-50 transition"
          >
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
}
