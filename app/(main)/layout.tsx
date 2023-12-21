import Header from '@/app/components/Header/Header'

export default function LoginLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />

      <main>
        {children}
      </main>
    </>
  )
}