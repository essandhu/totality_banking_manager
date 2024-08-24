import Sidebar from '@/components/Sidebar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Erick', lastName: 'Sandhu' };

  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn} />
        {children}
    </main>
  );
}
