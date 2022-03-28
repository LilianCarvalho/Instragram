import Title from '../../components/dumbs/Title'
import Text from '../../components/dumbs/Text'
import Link from '../../components/dumbs/Link'
import Header from '../../components/smarts/Header'
import Footer from '../../components/dumbs/Footer'

function Error() {
  return(
    <section>
      <Header />
      <Title>Esta página não está disponível.</Title>      
      <Text>O link que você acessou pode estar quebrado ou a página pode ter sido removida. Voltar para o Instagram.</Text>
      <Link href='#'>Voltar para o Instagram</Link>
      <Footer><Link href='https://about.facebook.com/meta'>Meta</Link>
        <Link href='https://about.instagram.com/'>Sobre</Link>
        <Link href='https://about.instagram.com/blog/'>Blog</Link>
        <Link href='https://www.instagram.com/about/jobs/'>Carreira</Link>
        <Link href='https://help.instagram.com/'>Ajuda</Link>
        <Link href='https://developers.facebook.com/docs/instagram'>API</Link>
        <Link href='https://www.instagram.com/legal/privacy/'>Privacidade</Link>
        <Link href='https://www.instagram.com/legal/terms/'>Temos</Link>
        <Link href='https://www.instagram.com/directory/profiles/'>Principais Contas</Link>
        <Link href='https://www.instagram.com/directory/hashtags/'>Hashtags</Link>
        <Link href='https://www.instagram.com/explore/locations/'>Localizações</Link>
      </Footer>
      
    </section>
  )
}

export default Error
