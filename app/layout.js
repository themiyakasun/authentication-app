import '@styles/global.css';
import Provider from './components/Provider';

export const metadata = {
  title: 'Authentication',
  description: 'Next js with firebase',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div>
          <Provider>
            <main>{children}</main>
          </Provider>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
