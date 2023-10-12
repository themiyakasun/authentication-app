import '@styles/global.css';

export const metadata = {
  title: 'Authentication',
  description: 'Next js with firebase',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
