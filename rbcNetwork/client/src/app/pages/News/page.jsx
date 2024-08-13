'use client';
/* eslint-disable react/prop-types */
import { useState } from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from '../../Icons';
import '../../App.scss'
// eslint-disable-next-line react/prop-types
const News = () => {
  const [selectedNewsId, setSelectedNewsId] = useState(null);
  const [newsState] = useState([
    { id: 1, d: "2023.08.23", t: "18:30", img: "", type: "Financial news", title: "Dollars Price", web: "Source" },
    { id: 2, d: "2023.08.24", t: "19:29", img: "", type: "Environment news", title: "New species found", web: "Source" },
    { id: 3, d: "2023.08.25", t: "20:28", img: "", type: "Natural news", title: "Earthquake arrival", web: "Source" },
    { id: 4, d: "2023.08.26", t: "21:27", img: "", type: "Political news", title: "President Election", web: "Source" },
    { id: 5, d: "2023.08.27", t: "22:26", img: "", type: "Technology news", title: "AI upgrade", web: "Source" },
    { id: 6, d: "2023.08.27", t: "22:26", img: "", type: "Health news", title: "New medicament testing", web: "Source" },
    { id: 7, d: "2023.08.27", t: "22:26", img: "", type: "Sports news", title: "Club might be sold", web: "Source" },
    { id: 8, d: "2023.08.27", t: "22:26", img: "", type: "International news", title: "Russia increased gas price", web: "Source" },
    { id: 9, d: "2023.08.27", t: "22:26", img: "", type: "National news", title: "Products ban icomming", web: "Source" },
    { id: 10, d: "2023.08.27", t: "22:26", img: "", type: "Local news", title: "Prepare for helloween!", web: "Source" },
    { id: 11, d: "2023.08.27", t: "22:26", img: "", type: "Entertainment news", title: "Singers Tour", web: "Source" },
    { id: 12, d: "2023.08.27", t: "22:26", img: "", type: "Entertainment news", title: "Singers Tour", web: "Source" },
    { id: 13, d: "2023.08.27", t: "22:26", img: "", type: "Entertainment news", title: "Singers Tour", web: "Source" },
    { id: 14, d: "2023.08.27", t: "22:26", img: "", type: "Entertainment news", title: "Singers Tour", web: "Source" },
    { id: 15, d: "2023.08.27", t: "22:26", img: "", type: "Entertainment news", title: "Singers Tour", web: "Source" },
    { id: 16, d: "2023.08.27", t: "22:26", img: "", type: "Entertainment news", title: "Singers Tour", web: "Source" },
    { id: 17, d: "2023.08.27", t: "22:26", img: "", type: "Entertainment news", title: "Singers Tour", web: "Source" },
  ])
  const NewsCard = ({ news, newsText, headerClass, newsBubbleclass }) => (
    news === newsText && (<div className={`${headerClass}`}> {news} <div className={`${newsBubbleclass}`}></div> </div>)
  )
  return (<>
    <div className={`newsContainer newsPage_Container`}>
      <h2 className={`newsPageHeader`}> World events </h2>
      <div className={`newsHolder newsPage_Holder`}>
        {newsState.map(item => (
          <div key={item.id} className={`newsCard`}>

            <NewsCard news={item.type} newsText="Financial news"
              headerClass="newsCardHeader newsCardHeader_fin"
              newsBubbleclass="newsBubbleColor newsBubbleColor_fin"
            />
            <NewsCard news={item.type} newsText="Environment news"
              headerClass="newsCardHeader newsCardHeader_env"
              newsBubbleclass="newsBubbleColor newsBubbleColor_env"
            />
            <NewsCard news={item.type} newsText="Natural news"
              headerClass="newsCardHeader newsCardHeader_ntr"
              newsBubbleclass="newsBubbleColor newsBubbleColor_ntr"
            />

            <NewsCard news={item.type} newsText="Political news"
              headerClass="newsCardHeader newsCardHeader_pol"
              newsBubbleclass="newsBubbleColor newsBubbleColor_pol"
            />
            <NewsCard news={item.type} newsText="Technology news"
              headerClass="newsCardHeader newsCardHeader_teh"
              newsBubbleclass="newsBubbleColor newsBubbleColor_teh"
            />
            <NewsCard news={item.type} newsText="Health news"
              headerClass="newsCardHeader newsCardHeader_hth"
              newsBubbleclass="newsBubbleColor newsBubbleColor_hth"
            />
            <NewsCard news={item.type} newsText="Sports news"
              headerClass="newsCardHeader newsCardHeader_spr"
              newsBubbleclass="newsBubbleColor newsBubbleColor_spr"
            />
            <NewsCard news={item.type} newsText="International news"
              headerClass="newsCardHeader newsCardHeader_int"
              newsBubbleclass="newsBubbleColor newsBubbleColor_int" />
            <NewsCard news={item.type} newsText="National news"
              headerClass="newsCardHeader newsCardHeader_nat"
              newsBubbleclass="newsBubbleColor newsBubbleColor_nat" />
            <NewsCard news={item.type} newsText="Local news"
              headerClass="newsCardHeader newsCardHeader_loc"
              newsBubbleclass="newsBubbleColor newsBubbleColor_loc"
            />
            <NewsCard news={item.type} newsText="Entertainment news"
              headerClass="newsCardHeader newsCardHeader_ent"
              newsBubbleclass="newsBubbleColor newsBubbleColor_ent"
            />

            <div className={`newsTitle`}> {item.title} </div>
            <div className={`newsBtnHolder newsPage_newsBtnHolder`}>
              <button className={`newsButton`} onClick={() => { setSelectedNewsId(item.id); }}> View more </button>
            </div>

            <div className={`newsTimeDateContainer`}>
              <div className={`newsDate`}>{item.d}</div>
              <div className={`newsTime`}>{item.t}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    {selectedNewsId && (
      <div className={`newsModalContainer`}>
        <h2 className={`newsModalHeader`}>
          <FontAwesomeIcon icon="close" className={`newsModalIconClose`} onClick={() => { selectedNewsId ? setSelectedNewsId(null) : '' }} />
          {newsState.find(news => news.id === selectedNewsId).type}
        </h2>
        <div className={`newsModalImgTextHolder`}>
          <img src={newsState.find(news => news.id === selectedNewsId).img} className={`newsModalImg`} />
          <div className={`newsModalText`}> {newsState.find(news => news.id === selectedNewsId).title} </div>
        </div>

        <div className={`newsModalOpenLinkBtnHolder`}>
          <button className={`newsModalOpenLinkBtn`}> Open Source</button>
        </div>
        <div className={`newsModalDateTimeHolder`}>
          <div className={`newsModalDate`}> {newsState.find(news => news.id === selectedNewsId).d}</div>
          <div className={`newsModalTime`}> {newsState.find(news => news.id === selectedNewsId).t}</div>
        </div>
      </div>
    )}
  </>)
}

export default News