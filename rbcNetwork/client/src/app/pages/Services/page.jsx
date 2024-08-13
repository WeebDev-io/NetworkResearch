import { FontAwesomeIcon } from '../../Icons';
import PropTypes from 'prop-types';
const servicesData = [
  { id: 1, icon: 'user', type: '#1 Services Name', desc: 'Services Desc' },
  { id: 2, icon: 'pencil', type: '#2 Services Name', desc: 'Services Desc' },
  { id: 3, icon: 'headset', type: '#3 Services Name', desc: 'Services Desc' },
  { id: 4, icon: 'bug-slash', type: '#4 Services Name', desc: 'Services Desc' },
  { id: 5, icon: 'sitemap', type: '#5 Services Name', desc: 'Services Desc' },
  { id: 6, icon: 'face-grin-beam', type: '#6 Services Name', desc: 'Services Desc' },
  { id: 7, icon: 'mug-hot', type: '#7 Services Name', desc: 'Services Desc' },
  { id: 8, icon: 'calendar', type: '#8 Services Name', desc: 'Services Desc' },
]
const Services = () => {
  return (
    <div className={`servicesContainer`}>
      <h2 className={`servicesHeader`}>Services</h2>
      <div className={`servicesNote`}>
        We Offer <FontAwesomeIcon icon='caret-down' className={`servicesNoteIcon`} />
      </div>
      <div className={`servicesContent`}>
        {servicesData.map(services => (
          <div key={services.id} className={`servicesContentHolder`}>
            <h2 className={`servicesCardHeader`}>
              <FontAwesomeIcon icon={services.icon} className={`servicesIconTop`} />{services.type}
              <FontAwesomeIcon icon='circle' className={`servicesVisualPinnerIcon`} />
            </h2>
            <p className={`servicesInformation`}>
              <FontAwesomeIcon icon={services.icon} className={`servicesFadeA`} />
              <FontAwesomeIcon icon={services.icon} className={`servicesFadeB`} />{services.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Services