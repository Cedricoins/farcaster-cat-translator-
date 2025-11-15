const catDictionary: Record<string, string> = {
  a: 'mia', b: 'ron', c: 'purr', d: 'miau', e: 'ou', f: 'grr', g: 'mrr', h: 'hiss',
  i: 'i', j: 'jrr', k: 'krr', l: 'lulu', m: 'm', n: 'n', o: 'o', p: 'prr', q: 'quu',
  r: 'rrr', s: 'sss', t: 't', u: 'u', v: 'vrr', w: 'waw', x: 'xrr', y: 'yaw', z: 'zrr',
  '!': '!', '?': '?', ' ': ' *ronron* ', ',': '…', '.': '…'
};

export function translateToCat(text: string): string {
  return text
    .toLowerCase()
    .split('')
    .map(char => catDictionary[char] || char)
    .join('')
    .replace(/\*ronron\*/g, ' *ronron* ')
    .trim();
}
