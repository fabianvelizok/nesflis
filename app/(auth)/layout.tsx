import Header from '@/app/components/Header/Header'

export default function LoginLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* FIXME: Header should not know about login stuff */}
      <Header isLoggedIn={false} />

      <main>
        {children}
      </main>
    </>
  )
}