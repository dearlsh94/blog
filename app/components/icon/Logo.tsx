import LogoImage from './logo.png';

interface LogoProps {
  size: number;
  invert?: boolean;
}

export function Logo({ size, invert = false }: LogoProps) {
  const style = {
    filter: invert ? 'invert(1)' : 'invert(0)',
  };

  return <img src={LogoImage} alt="logo" width={size} style={style} />;
}
