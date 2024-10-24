import localFont from 'next/font/local';
import './globals.css';
import StyledComponentsRegistry from '@/lib/registry';
import GlobalStyles from '@/GlobalStyles';
import {
  Montserrat,
  Inter,
  Orbitron,
  Prompt,
  Share_Tech_Mono as ShareTechMono,
  Space_Grotesk as SpaceGrotesk,
} from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import Hoc from '@/components/shared/HOC/Hoc';
import { description, metadataBase, title, url, images } from '@/config/SEO/config';

const spaceX = localFont({
  src: '../fonts/SpaceX.ttf',
  variable: '--font-spacex',
  weight: '400',
});

const techno = localFont({
  src: '../fonts/Techno.otf',
  variable: '--font-techno',
  weight: '100 900',
});

const bulgatti = localFont({
  src: '../fonts/Bulgatti.ttf',
  variable: '--font-bulgatti',
  weight: '100 900',
});

const shareTechMono = ShareTechMono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-share_tech',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-orbitron',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
});

const prompt = Prompt({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-prompt',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

const spaceGrotesk = SpaceGrotesk({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-space_grotesk',
});

export const metadata = {
  metadataBase: metadataBase,
  title: title,
  openGraph: {
    url: url,
    description: description,
    images: images,
  },
  description: description,
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${techno.variable} ${bulgatti.variable} ${shareTechMono.variable} ${orbitron.variable} ${montserrat.variable} ${prompt.variable} ${inter.variable} ${spaceX.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Toaster
            position='top-center'
            reverseOrder={false}
            toastOptions={{
              style: {
                background: 'rgba(4, 10, 22, 0.5)',
                color: '#ffffff',
                padding: '16px',
                borderRadius: '20px',
                boxShadow: '0 4px 15px rgba(0, 5, 15, 0.8)',
                backdropFilter: 'blur(50px)',
                fontFamily: 'var(--font-prompt)',
              },
            }}
          />

          <div id='modal-root'></div>
          <Hoc>{children}</Hoc>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
