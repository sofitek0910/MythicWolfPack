import Sectionone from './main/Sectionone'
import Sectionthree from './main/Sectionthree'
import Sectiontwo from './main/Sectiontwo'
import Sectionfour from './main/Sectionfour'
import Team from './main/Team'
import Roadmap from './main/Roadmap'
import Faq from './main/Faq'

export default function Main() {
    return (
      <div>
        <Sectionone />
        <Sectiontwo />
        <Roadmap />
        <Team /> 
        <Sectionthree />
        <Faq />
        <Sectionfour />
      </div>
    )
  }