export interface JogTheme {
  colourPrimary: string;
  colourSecondary: string;
  colourAccent: string;
}

export const lightTheme: JogTheme = {
  colourPrimary: "#F4EBD9",
  colourSecondary: "#483D3F",
  colourAccent: "#058ED9"
};

export const darkTheme: JogTheme = {
  ...lightTheme,
  colourSecondary: "#F4EBD9",
  colourPrimary: "#483D3F"
};
