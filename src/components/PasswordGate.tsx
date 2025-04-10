'use client'; // 添加这行确保只在客户端运行

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const PASSWORD = process.env.NEXT_PUBLIC_SITE_PASSWORD || "will2025";

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // 只在客户端检查认证状态
    setIsAuthenticated(sessionStorage.getItem('isAuthenticated') === 'true');
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      sessionStorage.setItem('isAuthenticated', 'true');
      setIsAuthenticated(true);
    } else {
      setError("Incorrect password");
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div suppressHydrationWarning className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Secret knock required!</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full px-4 py-2 border rounded-md mb-4"
            placeholder="Enter the password"
            autoFocus
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
