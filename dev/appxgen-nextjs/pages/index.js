require('./styles/index.module.css')
export { getStaticProps } from 'appxgen/build/server'
import { ContentProvider } from 'appxgen'

const Index = (props) => {
  return (
    <div style={{ height: '100%' }}>
      <ContentProvider {...props} />
    </div>
  )
}
export default Index
