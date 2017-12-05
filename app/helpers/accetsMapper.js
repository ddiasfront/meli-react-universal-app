function accentsMapper(s) {
  return s.toLowerCase()
    .replace(/[ÄÁÀÂÃàáâã]/gi, 'a')
    .replace(/[ç]/gi, 'c')
    .replace(/[èéê]/gi, 'e')
    .replace(/[ìí]/gi, 'i')
    .replace(/[òóôõ]/gi, 'o')
    .replace(/[ùúû]/gi, 'u');
}

export default accentsMapper;