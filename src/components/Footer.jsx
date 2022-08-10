import StyledFooter from "./styles/Footer.styled";

const date = new Date();

const Footer = () => {
  return (
    <StyledFooter>
      © {date.getFullYear()} - Todos los derechos reservados
    </StyledFooter>
  );
};

export default Footer;
