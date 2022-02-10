import { getProviders, signIn } from 'next-auth/react'

const Login = () => {
  return (
    <div>
      <img className="mb-5 w-52" src="https://links.papareact.com/9xl" alt="" />
    </div>
  )
}

export default Login

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}
