'use client';
import React, { useState } from 'react'
import { Container, Title, Content, ContentTop, ContentTopCard, ContentInputHolder, Input, TextArea, Button, ContentBottom, ContentBottomCard, ContentOutputHolder, ContentOutputTitle } from '../../../components/settings/Boxes';
const access = ["Owner", "Admin", "Dev", "Beta"];
const userGroup = 'Dev';

const Page = () => {
  const [page, setPage] = useState('Stocks');
  const buttonArray = [
    { text: 'Home', onClick: () => { setPage('Home') } },
    { text: 'Stocks', onClick: () => { setPage('Stocks') } },
    { text: 'RPG Elements', onClick: () => { setPage('RPGElements') } },
    { text: 'socketIO', onClick: () => { setPage('socketIO') } }
  ]
  const headerArr = ['Assets', 'Price', 'Change'];
  //use case x - max number , y - minimum number
  const generateRandomNumber = (x, y) => {
    const number = Math.floor(Math.random() * x) + y;
    setGenNum(number);
  };
  const [genNum, setGenNum] = useState(0);
  const assets = [
    { id: 1, asset: 'gold', price: 100 },
    { id: 2, asset: 'BTC', price: 60000 },
    { id: 3, asset: 'SSV', price: 50 },
  ]

  const [hitArr, setHitArr] = useState([]);
  const [reset, setReset] = useState(false);
  const [hp, setHp] = useState(100);
  const hitting = () => {
    const number = Math.floor(Math.random() * 10) + 1;
    setHitArr([...hitArr, number])
    if (number > hp) { setHp(0); }
    else { setHp(hp - number); }
  };
  const resetGame = () => {
    if (hp < 1) { setHp(100); setReset(!reset) }
    else { setReset(false); }
  }

  return (<>
    {access.includes(userGroup) ?
      (buttonArray.map((btn, index) => (
        <button key={index} className={`btn`} onClick={btn.onClick}>{btn.text}</button>
      ))) : ''

    }
    {page == 'Home' && (
      access.includes(userGroup) ?
        <Container cStyle={`boxContainer`}>

          <Title cStyle={`boxTitle`} title={'Title'} />
          <Content cStyle={`boxContent`}>

            <ContentTop cStyle={`boxContentTop`}>

              <ContentTopCard cStyle={`boxContentTopCard`}>

                <ContentInputHolder cStyle={`boxContentInputHolder`}>
                  <Input />
                  <Input />
                </ContentInputHolder>

                <TextArea />
                <Button text={'Button'} />
              </ContentTopCard>

            </ContentTop>

            <ContentBottom cStyle={`boxContentBottom`}>
              <ContentBottomCard cStyle={`boxContentBottomCard`}>
                <ContentOutputHolder cStyle={`boxContentOutputHolder`}>
                  <ContentOutputTitle cStyle={`boxContentOutputTitle`} text={'Output title'} />
                </ContentOutputHolder>
              </ContentBottomCard>
            </ContentBottom>

          </Content>
        </Container> : 'Page is restricted'
    )}
    {page == 'Stocks' && (
      access.includes(userGroup) ?
        <div className={`baseContainer`}>
          <div className='genContainer'>
            <button className='genBtn' onClick={() => { generateRandomNumber(50, 1) }}>Gen Number</button>
            <button className='genBtn' onClick={() => { generateRandomNumber(10, 1) }}>Gen Number 2</button>
          </div>
          <div className={`content`}>
            <div className={`contentHeader`}>
              {headerArr.map((item, index) => (<span key={index} className='items'>{item}</span>))}
            </div>
            <div className={`contentData`}>
              <div className={`assetContainer`}>
                {assets.map(item => (<label className='assets'>{item.asset}</label>))}
              </div>
              <div className={`priceContainer`}>
                {assets.map(item => (<label className='prices'>{item.price} £</label>))}
              </div>
              <div className={`changeContainer`}>
                {assets.map(item => (<label className='priceChange'>{item.price} %</label>))}
              </div>
            </div>

            <div className={`graph`}>Graph</div>
          </div>
        </div> :
        <div className='restricted'>
          <p>No Access: </p>
          <label>{userGroup}</label>
        </div>
    )}
    {page == 'RPGElements' && (
      <div className={`rpgContainer`}>

        <div className={`firstLine`}>

          <div style={{ width: '45%', height: '120px', border: '1px solid #000', boxSizing: 'border-box' }}>
            <label style={{ fontSize: '14px', background: '#454545', display: 'inline-block', width: '100%', height: '30px', color: '#fff', lineHeight: '30px', boxSizing: 'border-box', padding: '0 0 0 5px' }}>Health Bar</label>

            <div style={{ width: '95%', height: '18px', lineHeight: '18px', margin: '5px auto', border: '1px solid #000', borderRadius: '9px' }}>

              <span style={{ background: `${hp > 1 ? 'green' : 'darkred'}`, width: `${hp < 0 ? '100' : hp == 0 ? '100' : hp}%`, height: '18px', lineHeight: '21px', display: 'inline-block', borderRadius: '8px', color: '#fff', fontSize: '13px', textAlign: 'center', }}> {hp > 1 ? hp + '%' : 'You Dead'} </span>

            </div>

            <button onClick={hitting} style={{ width: '35%', height: '25px', margin: '0 0 0 4px', borderRadius: '8px', border: '1px solid #000', cursor: 'pointer', background: 'linear-gradient(to top, #dbdbdb, #ffffff)' }}>Hit</button>
            <button onClick={resetGame} style={{ width: '55%', height: '25px', margin: '0 5px', borderRadius: '8px', border: '1px solid #000', cursor: 'pointer', background: 'linear-gradient(to top, #dbdbdb, #ffffff)' }}>Reset Game</button>

          </div>

          <div className={`logWindow`}>
            <label style={{ fontSize: '14px', background: '#454545', display: 'inline-block', width: '100%', height: '30px', color: '#fff', lineHeight: '30px', boxSizing: 'border-box', padding: '0 0 0 5px' }}>Damage Log</label>
            <ul className={`dmgLog`}>
              {hitArr.length > 0 && (
                hitArr.map((dmg, index) => (<li className={`dmgBox`} key={index}>{dmg}</li>))
              )}
            </ul>
          </div>

        </div>

        <div style={{ width: '100%', height: '150px', background: 'gray', margin: 'auto', padding: '5px', boxSizing: 'border-box', display: 'flex', flexDirection: 'row' }}>

          <div className={`timerWindow`}>
            <label style={{ fontSize: '14px', background: '#454545', display: 'inline-block', width: '100%', height: '30px', color: '#fff', lineHeight: '30px', boxSizing: 'border-box', padding: '0 0 0 5px' }}>Timer{"`"}s</label>
          </div>

        </div>
      </div>
    )}
    {page == 'socketIO' && (
      <div>

      </div>
    )}
  </>)
}

export default Page