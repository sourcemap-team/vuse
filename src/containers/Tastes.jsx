import { Trans } from 'react-i18next'

import Taste from 'src/components/modules/taste/index.jsx'
import taste1 from 'src/assets/images/tastes/taste-1.png'
import taste2 from 'src/assets/images/tastes/taste-2.png'
import taste3 from 'src/assets/images/tastes/taste-3.png'
import taste4 from 'src/assets/images/tastes/taste-4.png'
import taste5 from 'src/assets/images/tastes/taste-5.png'
import taste6 from 'src/assets/images/tastes/taste-6.png'
import taste7 from 'src/assets/images/tastes/taste-7.png'
import taste8 from 'src/assets/images/tastes/taste-8.png'
import taste9 from 'src/assets/images/tastes/taste-9.png'
import taste10 from 'src/assets/images/tastes/taste-10.png'
import taste11 from 'src/assets/images/tastes/taste-11.png'
import taste12 from 'src/assets/images/tastes/taste-12.png'

const Tastes = ({className}) => {

  return (
    <div className={className}>
      <h2 className={'text-6xl uppercase bg-clip-text text-transparent bg-gradient-to-b from-black to-white py-2'}>
        <Trans i18nKey="tastes.title" components={{br: <br/>}}/>
      </h2>

      <div className={'columns-1 lg:columns-6 gap-0 pt-10'}>
        <Taste image={taste1} specs={[3, 1]} puffs={[500, 1500, 3000, 5000]} taste={'taste-1'}/>
        <Taste image={taste2} specs={[3, 1]} puffs={[500, 1500, 3000, 5000]} taste={'taste-2'}/>
        <Taste image={taste3} specs={[3, 1]} puffs={[500, 1500, 3000, 5000]} taste={'taste-3'}/>
        <Taste image={taste4} specs={[3, 1]} puffs={[500, 1500, 3000, 5000]} taste={'taste-4'}/>
        <Taste image={taste5} specs={[3, 1]} puffs={[500, 1500, 3000, 5000]} taste={'taste-5'}/>
        <Taste image={taste6} specs={[3, 1]} puffs={[500, 1500, 3000, 5000]} taste={'taste-6'}/>
      </div>
      <div className={'columns-1 lg:columns-6 gap-0 pt-10'}>
        <Taste image={taste7} specs={[3, 1]} puffs={[500, 1500, 3000, 5000]} taste={'taste-7'}/>
        <Taste image={taste8} specs={[3, 1]} puffs={[500, 1500, 3000, 5000]} taste={'taste-8'}/>
        <Taste image={taste9} specs={[3, 1]} puffs={[500, 1500, 3000, 5000]} taste={'taste-9'}/>
        <Taste image={taste10} specs={[3, 1]} puffs={[500, 1500, 3000, 5000]} taste={'taste-10'}/>
        <Taste image={taste11} specs={[3, 1]} puffs={[500, 1500, 3000, 5000]} taste={'taste-11'}/>
        <Taste image={taste12} specs={[3, 1]} puffs={[500, 1500, 3000, 5000]} taste={'taste-12'}/>
      </div>
    </div>
  )
}

export default Tastes
