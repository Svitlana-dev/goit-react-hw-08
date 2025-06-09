import PageTitle from '../../components/PageTitle/PageTitle';
import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div>
      <PageTitle>
        Welcome to the Contact Manager App!{' '}
        <span role="img" aria-label="Greeting icon">
          👋
        </span>{' '}
      </PageTitle>
      <p className={css.text}>
        Organize your network with ease and style. Our Contact Manager is
        designed to help you seamlessly manage your personal and professional
        relationships in one secure and elegant space.
      </p>
      <ul className="feature-list">
        <li>Effortless contact storage & search</li>
        <li>Clean and intuitive interface</li>
        <li>Secure data handling</li>
        <li>Personalized user experience</li>
      </ul>

      <p>
        <strong>
          Stay connected. Stay organized. Stay ahead.{' '}
          <span role="img" aria-label="Rocket icon">
            🚀
          </span>{' '}
        </strong>
      </p>
    </div>
  );
}
