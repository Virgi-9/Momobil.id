"use client";

import { useState } from "react";

type Mode = "masuk" | "daftar";

type Props = {
  initialMode?: Mode;
  onClose: () => void;
  onLogin?: (id: string, password: string) => boolean;
};

export default function AuthModal({ initialMode = "masuk", onClose, onLogin }: Props) {
  const [mode, setMode] = useState<Mode>(initialMode);
  const [showPass, setShowPass] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [loginError, setLoginError] = useState("");

  // Masuk fields
  const [loginId, setLoginId] = useState("");
  const [loginPass, setLoginPass] = useState("");

  // Daftar fields
  const [nama, setNama] = useState("");
  const [registerId, setRegisterId] = useState("");
  const [registerPass, setRegisterPass] = useState("");

  const isLoginFilled = loginId.trim() !== "" && loginPass.trim() !== "";
  const isDaftarFilled = nama.trim() !== "" && registerId.trim() !== "" && registerPass.trim() !== "" && agreed;

  const handleLogin = () => {
    setLoginError("");
    if (onLogin) {
      const ok = onLogin(loginId, loginPass);
      if (ok) {
        onClose();
      } else {
        setLoginError("Email/nomor atau kata sandi salah.");
      }
    }
  };

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Modal card */}
      <div className="bg-white rounded-2xl w-full max-w-sm relative flex flex-col px-7 pt-6 pb-8 shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[20px] font-bold text-gray-900">
            {mode === "masuk" ? "Masuk" : "Daftar"}
          </h2>
          <button
            onClick={onClose}
            aria-label="Tutup"
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-700"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {mode === "masuk" ? (
          /* ── MASUK FORM ── */
          <div className="flex flex-col gap-3">
            {/* Nomor / email */}
            <input
              type="text"
              placeholder="Nomor handphone atau email"
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-[13px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
            />

            {/* Kata sandi */}
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Kata Sandi"
                value={loginPass}
                onChange={(e) => setLoginPass(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3.5 pr-12 text-[13px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                aria-label="Toggle password"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  {showPass ? (
                    <>
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </>
                  ) : (
                    <>
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </>
                  )}
                </svg>
              </button>
            </div>

            {/* Lupa kata sandi */}
            <div className="text-right -mt-1">
              <button className="text-[13px] font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                Lupa kata sandi?
              </button>
            </div>

            {/* Error message */}
            {loginError && (
              <p className="text-red-500 text-xs -mt-1">{loginError}</p>
            )}

            {/* Masuk button */}
            <button
              onClick={handleLogin}
              disabled={!isLoginFilled}
              className={`w-full py-3.5 rounded-xl text-[14px] font-semibold transition-colors mt-1 ${
                isLoginFilled
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              Masuk
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-1">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-[12px] text-gray-500 whitespace-nowrap">Atau masuk dengan</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Google */}
            <div className="flex justify-center">
              <button
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
                aria-label="Masuk dengan Google"
              >
                <GoogleIcon />
              </button>
            </div>

            {/* Switch to Daftar */}
            <p className="text-center text-[13px] text-gray-600 mt-4">
              Belum punya akun?{" "}
              <button
                onClick={() => setMode("daftar")}
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Daftar
              </button>
            </p>
          </div>
        ) : (
          /* ── DAFTAR FORM ── */
          <div className="flex flex-col gap-3">
            {/* Nama */}
            <input
              type="text"
              placeholder="Nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-[13px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
            />

            {/* Nomor / email */}
            <input
              type="text"
              placeholder="Nomor handphone atau email"
              value={registerId}
              onChange={(e) => setRegisterId(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-[13px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
            />

            {/* Kata sandi */}
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Kata Sandi"
                value={registerPass}
                onChange={(e) => setRegisterPass(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3.5 pr-12 text-[13px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                aria-label="Toggle password"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  {showPass ? (
                    <>
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </>
                  ) : (
                    <>
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </>
                  )}
                </svg>
              </button>
            </div>

            {/* Checkbox TOS */}
            <label className="flex items-start gap-3 cursor-pointer mt-1">
              <div
                onClick={() => setAgreed(!agreed)}
                className={`mt-0.5 w-5 h-5 flex-shrink-0 border-2 rounded flex items-center justify-center transition-colors cursor-pointer ${
                  agreed ? "bg-blue-500 border-blue-500" : "bg-white border-gray-300"
                }`}
              >
                {agreed && (
                  <svg width="10" height="10" viewBox="0 0 12 10" fill="none">
                    <path d="M1 5l3.5 3.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <p className="text-[12px] text-gray-600 leading-relaxed">
                Dengan mendaftar Saya sudah membaca dan menyetujui{" "}
                <span className="text-blue-600 font-semibold">Syarat &amp; Ketentuan</span>{" "}
                dan{" "}
                <span className="text-blue-600 font-semibold">Kebijakan Privasi</span>{" "}
                momobil.id
              </p>
            </label>

            {/* Daftar button */}
            <button
              disabled={!isDaftarFilled}
              className={`w-full py-3.5 rounded-xl text-[14px] font-semibold transition-colors mt-1 ${
                isDaftarFilled
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              Daftar
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-1">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-[12px] text-gray-500 whitespace-nowrap">Atau daftar dengan</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Google */}
            <div className="flex justify-center">
              <button
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
                aria-label="Daftar dengan Google"
              >
                <GoogleIcon />
              </button>
            </div>

            {/* Switch to Masuk */}
            <p className="text-center text-[13px] text-gray-600 mt-4">
              Sudah punya akun?{" "}
              <button
                onClick={() => setMode("masuk")}
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Masuk
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
      <path fill="none" d="M0 0h48v48H0z"/>
    </svg>
  );
}
