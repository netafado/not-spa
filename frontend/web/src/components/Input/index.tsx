'use client';
import { Loader2 } from 'lucide-react';

type TypePros = {
  value: string;
  onChange: (value: string) => void;
  isLoading: boolean;
};

const Input = ({ value, onChange, isLoading }: TypePros) => {
  return (
    <div className="w-full relative gap-1.5 bg-black rounded-lg p-2">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="typeHere"
        className="text-white bg-black w-full"
        id="picture"
      />
      {isLoading && (
        <Loader2 className="absolute top-3 right-3 w-4 h-4 text-emerald-500 animate-spin" />
      )}
    </div>
  );
};

export default Input;
