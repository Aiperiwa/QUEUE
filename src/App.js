import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Home from './components/home'
import QueueTable from './components/home/tablo'

export const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <QueueTable/>
      <Footer/>
    </div>
    
  )
}
