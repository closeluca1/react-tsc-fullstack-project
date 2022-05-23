interface InputProps {
  type: string;
  placeholder: string;
  atualText: any;
}

export function Input ({type, placeholder, atualText}:InputProps) {
  return (
    <input 
    className='border-0 outline-none appearance-none w-full '
    type={type}
    placeholder={placeholder}
    onChange={atualText}
    minLength={5}
    maxLength={50}
    required
    />
  )
}