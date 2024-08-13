'use client';
import { FontAwesomeIcon } from '../../Icons';
import PropTypes from 'prop-types';
import { Updates as updates } from '../../localConstants/dataStorage';
const updatesIcons = ['bug-slash', 'pencil', 'headset', 'user', 'sitemap', 'face-grin-beam', 'mug-hot', 'calendar', 'lock', 'server', 'user-shield']
const Updates = () => {
  return (
    <>
      <div className={`updatesContainer`}>
        <h2 className={`updatesHeader`}>Updates</h2>
        <p className={`updatesNote`}> Most Recent & Old Updates </p>
        <div className={`updatesContent`}>
          {updates.map(type => (
            type.updates.map(data => (
              <div key={type.id} className={`updatesContentHolder`}>
                <h2 className={`updatesCardHeader`}>
                  <FontAwesomeIcon icon={updatesIcons[type.id - 1]}
                    className={`updatesIconTop`} />
                  #{type.id}{data.id == 0 ? '' : `.${data.id}`}
                  {type.name}
                  <FontAwesomeIcon icon='circle' className={`updatesVisualPinnerIcon`} />
                </h2>
                <p className={`updatesInformation`}>
                  <FontAwesomeIcon icon={updatesIcons[type.id - 1]} className={`updatesFadeA`} />
                  {data.text}
                  <FontAwesomeIcon icon={updatesIcons[type.id - 1]} className={`updatesFadeB`} />
                </p>
              </div>
            ))
          ))}
        </div>
      </div>
    </>
  )
}
export default Updates;