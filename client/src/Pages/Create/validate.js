export default function validate(create) {
  const nameRegex = /^[a-zA-Z]{1,40}$/;
  const attackRegex = /^(1|[1-9][0-9]?|100)$/;
  const hpRegex = /^(1|[1-9][0-9]?|100)$/;
  const defenseRegex = /^(1|[1-9][0-9]?|100)$/;
  const weightRegex = /^(1|[1-9][0-9]?|100)$/;
  const heightRegex = /^(1|[1-9][0-9]?|100)$/;

  const typeRegex =
    /^(normal|fighting|flying|poison|ground|rock|bug|ghost|steel|fire|water|grass|electric|psychic|ice|dragon|dark|fairy|unknown|shadow)$/;

  if (!nameRegex.test(create.name))
    return "name must be 1 to 20 characters long";
  if (!attackRegex.test(create.attack)) return "attack must be 1 to 255";
  if (!hpRegex.test(create.hp)) return "hp must be 1 to 255";
  if (!defenseRegex.test(create.defense)) return "defense must be 1 to 255";
  if (!weightRegex.test(create.weight)) return "weight must be 0 to 100";
  if (!heightRegex.test(create.height)) return "height must be 0 to 100";
  if (!typeRegex.test(create.type))
    return "el tipo debe ser correctamente asignado";
  return "valido";
}
