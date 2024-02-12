import css from './Footer.module.css';

const Footer = () =>{
  return (
    <footer className={css.footer}>
      <div className="container">
        <div className={css.block}>
          <p className={css.footer_text}>Choose the best from GoIT</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
