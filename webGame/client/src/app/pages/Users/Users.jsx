import React from 'react'
const friends = [
  {id:1,name:"User1",userImg:""},
  {id:2,name:"User2",userImg:""},
  {id:3,name:"User3",userImg:""},
  {id:4,name:"User4",userImg:""},
  {id:5,name:"User5",userImg:""},
  {id:6,name:"User6",userImg:""},
  {id:7,name:"User7",userImg:""},
  {id:8,name:"User8",userImg:""},
  {id:9,name:"User9",userImg:""},
  {id:10,name:"User10",userImg:""},
  {id:11,name:"User11",userImg:""},
  {id:12,name:"User12",userImg:""},
  {id:13,name:"User13",userImg:""},
  {id:14,name:"User14",userImg:""},
  {id:15,name:"User15",userImg:""},
  {id:16,name:"User16",userImg:""},
  {id:17,name:"User17",userImg:""},
  {id:18,name:"User18",userImg:""},
  {id:19,name:"User19",userImg:""},
  {id:20,name:"User20",userImg:""},
  {id:21,name:"User21",userImg:""},
  {id:22,name:"User22",userImg:""},
]

const Users = () => {
  const url = window.location.href;
  const pageIndex = url.split("/");
  return (<> {friends.map((friend) => ( friend.name == pageIndex[3] ? <div key={friend.id}>{friend.name}</div>:null ))} </>)
}

export default Users