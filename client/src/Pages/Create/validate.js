export default function validate(create) {
  const nameRegex = /^[a-zA-Z]{2,}$/;
  const attackRegex = /^([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-5][0-5])$/;
  const hpRegex = /^([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-5][0-5])$/;
  const defenseRegex = /^([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-5][0-5])$/;
  const weightRegex = /^([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-5][0-5])$/;
  const heightRegex = /^([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-5][0-5])$/;
  const typeRegex =
    /^(normal|fighting|flying|poison|ground|rock|bug|ghost|steel|fire|water|grass|electric|psychic|ice|dragon|dark|fairy|unknown|shadow)$/;

  if (!nameRegex.test(create.name)) return "formato de nombre invalido";
  if (!attackRegex.test(create.attack)) return "el ataque debe ser de 0 a 255";
  if (!hpRegex.test(create.hp)) return "el hp debe ser de 0 a 255";
  if (!defenseRegex.test(create.defense))
    return "la defensa debe ser de 0 a 255";
  if (!weightRegex.test(create.weight)) return "el peso debe ser de 0 a 255";
  if (!heightRegex.test(create.height)) return "la altura debe ser de 0 a 255";
  if (!typeRegex.test(create.type))
    return "el tipo debe ser correctamente asignado";
  return "valido";
}
