import { Inter_Tight } from 'next/font/google';

import './globals.css';

import { ReactNode } from 'react';

const font = Inter_Tight({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={font.className}>
				<main className='flex min-h-screen flex-col items-center justify-between p-24'>{children}</main>
			</body>
		</html>
	);
}
