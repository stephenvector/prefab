const VALID_HEX_CHARS: string[] = "0123456789abcdef".split("");

export type RGBColor = {
  r: number;
  g: number;
  b: number;
};

export function isValidHex(hexOrNot?: string): boolean {
  if (hexOrNot === undefined) {
    return false;
  }

  if (hexOrNot.charAt(0) !== "#") {
    return false;
  }

  if (hexOrNot.slice(1).length !== 3 && hexOrNot.slice(1).length !== 6) {
    return false;
  }

  const invalidChars = hexOrNot
    .slice(1)
    .toLowerCase()
    .split("")
    .reduce(
      (acc, letter) => {
        if (VALID_HEX_CHARS.indexOf(letter) === -1) {
          return [...acc, letter];
        }

        return acc;
      },
      [] as string[]
    );

  if (invalidChars.length > 0) {
    return false;
  }

  return true;
}

export function getRGBFromHex(color: string): RGBColor {
  const rgbValue = {
    r: 0,
    g: 0,
    b: 0
  };

  if (!isValidHex(color)) {
    throw new Error("Not a valid hex color");
  }

  if (color.length === 7) {
    rgbValue.r = parseInt(`${color.slice(1, 3)}`, 16);
    rgbValue.g = parseInt(`${color.slice(3, 5)}`, 16);
    rgbValue.b = parseInt(`${color.slice(5)}`, 16);
  } else {
    rgbValue.r = parseInt(`${color.slice(1, 2)}${color.slice(1, 2)}`, 16);
    rgbValue.g = parseInt(`${color.slice(2, 3)}${color.slice(2, 3)}`, 16);
    rgbValue.b = parseInt(`${color.slice(3)}${color.slice(3)}`, 16);
  }

  return rgbValue;
}

export function getHexFromRGB({ r, g, b }: RGBColor): string {
  const colorValue = [
    Number(r % 256).toString(16),
    Number(g % 256).toString(16),
    Number(b % 256).toString(16)
  ]
    .map(hexString => {
      if (hexString.length === 1) {
        return `0${hexString}`;
      }

      return hexString;
    })
    .join("");

  return `#${colorValue}`;
}

function min(a: number, b: number): number {
  if (a < b) {
    return a;
  }

  return b;
}

export function lightenHex(hex: string, amount: number) {
  const rgbValue = getRGBFromHex(hex);

  const rNew = Math.floor(min(255, rgbValue.r * (1 + amount)));
  const gNew = Math.floor(min(255, rgbValue.g * (1 + amount)));
  const bNew = Math.floor(min(255, rgbValue.b * (1 + amount)));

  const newColor = {
    r: rNew,
    g: gNew,
    b: bNew
  };

  return getHexFromRGB(newColor);
}

export function darkenHex(hex: string, amount: number) {
  const rgbValue = getRGBFromHex(hex);

  const rNew = Math.floor(min(255, rgbValue.r * (1 - amount)));
  const gNew = Math.floor(min(255, rgbValue.g * (1 - amount)));
  const bNew = Math.floor(min(255, rgbValue.b * (1 - amount)));

  const newColor = {
    r: rNew,
    g: gNew,
    b: bNew
  };

  return getHexFromRGB(newColor);
}
