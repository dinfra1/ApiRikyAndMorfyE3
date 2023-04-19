import './styles/residentcard.css'
import useFecth from '../hooks/useFecth'

const ResidentCard = ({url}) => {

    const [residet] = useFecth(url)

  return (
    <div className='resident--'>
    <article className='residet--info--card'>
        <header className='info--card'>
                <div className='info--status'>
                    <div className={`status--circle ${residet?.status}`}></div>
                    <span>{residet?.status}</span>
                </div>
            <img className='residet--img' src={residet?.image} alt="ImagePerson" />
        </header>
        <section className='info--residet--dropdown'>
            <h3 className='name--residet'>{residet?.name}</h3>
            <hr className='hr'/>
            <ul className='residet--list'>
                <li className='info--dropdown'><span className='residet--label'>Specie: </span>{residet?.species}</li>
                <li className='info--dropdown'><span className='residet--label'>Origin: </span>{residet?.origin.name}</li>
                <li className='info--dropdown'><span className='residet--label'>Epissodie: </span>{residet?.episode.length}</li>
            </ul>
        </section>
    </article>
    </div>
  )
}

export default ResidentCard