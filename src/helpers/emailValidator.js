export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email != !re.test(email) ) return "Usuário ou senha inválidos!"
  if (!re.test(email)) return 'Formato de email invalido'
  return ''
}
