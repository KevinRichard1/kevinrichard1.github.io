import './globals.css';
import Navigation from '../src/Components/Navigation/Navigation';
import { Footer } from '../src/Components/Footer/Footer';

export const metadata = {
  title: 'Kevin Richard',
  description:
    'Kevin Richard is a computer science researcher working on multimodal AI and embodied intelligence.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}