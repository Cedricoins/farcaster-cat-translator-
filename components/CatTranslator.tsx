"use client";

import { useState } from "react";
import { translateToCat } from "@/lib/catTranslator";

export default function CatTranslator() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [castUrl, setCastUrl] = useState("");

  const handleTranslate = () => {
    const translated = translateToCat(input);
    setOutput(translated);

    const text = `🐱 Traduction miaou :\n"${input}" → "${translated}"\n\nVia @traducteur-miaou.farcaster !\nhttps://farcaster-cat-translator.vercel.app`;
    const encoded = encodeURIComponent(text);
    setCastUrl(`https://warpcast.com/~/compose?text=${encoded}`);
  };

  return (
    <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 text-center">
      <h1 className="text-4xl font-bold text-pink-600 mb-2">🐱 Traducteur Miaou</h1>
      <p className="text-gray-600 mb-6">Dis quelque chose, je le miaule !</p>

      <input
        type="text"
        placeholder="Entre ta phrase ici..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleTranslate()}
        className="w-full p-4 text-lg border-4 border-pink-200 rounded-2xl focus:outline-none focus:border-pink-400 transition-all"
      />

      <button
        onClick={handleTranslate}
        className="mt-4 w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-4 rounded-2xl hover:scale-105 transition-transform"
      >
        Traduire en Miaou !
      </button>

      {output && (
        <>
          <div className="mt-8 p-6 bg-pink-50 rounded-2xl border-4 border-pink-200">
            <p className="text-2xl font-bold text-purple-700">🐾 {output}</p>
          </div>

          <a
            href={castUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block w-full"
          >
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2">
              <span>🚀 Partager sur Farcaster</span>
            </button>
          </a>
        </>
      )}
    </div>
  );
}
