import Image from 'next/image'
import CardFWork from './CardFWork'

const FeaturedWork = () => {
  return (
    <div className="featured-work">
        <div className="container">
            <div className="main">
            <div className="heading-div"><h3>Featured works</h3></div>
            <div className='main-card-image'>
                <div className="card-image"><Image src="/figma/Rectangle 30.png" alt="picture" width={250} height={190}/><CardFWork/></div>
                <div className="card-image"><Image src="/figma/Rectangle 32.png" alt="picture" width={250} height={190}/><CardFWork/></div>
                <div className="card-image"><Image src="/figma/Rectangle 34.png" alt="picture" width={250} height={190}/><CardFWork/></div>
            </div>
            </div>
        </div>

    </div>
  )
}

export default FeaturedWork