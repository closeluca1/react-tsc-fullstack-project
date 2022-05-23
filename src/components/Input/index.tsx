interface InputProps {
  type: string;
  placeholder: string;
  atualText: any;
}

export function Input ({type, placeholder, atualText}:InputProps) {
  return (
    <input 
    className='border-0 outline-none appearance-none'
    type={type}
    placeholder={placeholder}
    onChange={atualText}
    min='5'
    required
    />
  )
}