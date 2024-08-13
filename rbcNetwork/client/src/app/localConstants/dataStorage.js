const noImg = 'NoImg';
export const WorldEvents = [
  {
    "id":1,
    "name":'Financial news',
    "news":[
      {
        "id":1,
        "img":{noImg},
        "desc":'desc',
        "fullText":'full text',
        "linkToSource":'LINK',
        "time":'Time',
        "date":'Date',
      }
    ],
  },
  {
    "id":2,
    "name":'Environment news',
    "news":[
      {
        "id":1,
        "img":{noImg},
        "desc":'desc',
        "fullText":'full text',
        "linkToSource":'LINK',
        "time":'Time',
        "date":'Date',
      }
    ],
  },
  {
    "id":3,
    "name":'Natural news',
    "news":[
      {
        "id":1,
        "img":{noImg},
        "desc":'desc',
        "fullText":'full text',
        "linkToSource":'LINK',
        "time":'Time',
        "date":'Date',
      }
    ],
  },
  {
    "id":4,
    "name":'Political news',
    "news":[
      {
        "id":1,
        "img":{noImg},
        "desc":'desc',
        "fullText":'full text',
        "linkToSource":'LINK',
        "time":'Time',
        "date":'Date',
      }
    ],
  },
  {
    "id":5,
    "name":'Technology news',
    "news":[
      {
        "id":1,
        "img":{noImg},
        "desc":'desc',
        "fullText":'full text',
        "linkToSource":'LINK',
        "time":'Time',
        "date":'Date',
      }
    ],
  },
  {
    "id":6,
    "name":'Health news',
    "news":[
      {
        "id":1,
        "img":{noImg},
        "desc":'desc',
        "fullText":'full text',
        "linkToSource":'LINK',
        "time":'Time',
        "date":'Date',
      }
    ],
  },
  {
    "id":7,
    "name":'Sports news',
    "news":[
      {
        "id":1,
        "img":{noImg},
        "desc":'desc',
        "fullText":'full text',
        "linkToSource":'LINK',
        "time":'Time',
        "date":'Date',
      }
    ],
  },
  {
    "id":8,
    "name":'International news',
    "news":[
      {
        "id":1,
        "img":{noImg},
        "desc":'desc',
        "fullText":'full text',
        "linkToSource":'LINK',
        "time":'Time',
        "date":'Date',
      }
    ],
  },
  {
    "id":9,
    "name":'National news',
    "news":[
      {
        "id":1,
        "img":{noImg},
        "desc":'desc',
        "fullText":'full text',
        "linkToSource":'LINK',
        "time":'Time',
        "date":'Date',
      }
    ],
  },
  {
    "id":10,
    "name":'Local news',
    "news":[
      {
        "id":1,
        "img":{noImg},
        "desc":'desc',
        "fullText":'full text',
        "linkToSource":'LINK',
        "time":'Time',
        "date":'Date',
      }
    ],
  },
  {
    "id":11,
    "name":'Entertainment news',
    "news":[
      {
        "id":1,
        "img":{noImg},
        "desc":'desc',
        "fullText":'full text',
        "linkToSource":'LINK',
        "time":'Time',
        "date":'Date',
      }
    ],
  },
]
//users
export const userData = [
  {
    id:1,
    user:'Larry',
    userInfo:{
      'name':'Laurynas',
      'surname':'Dvarzeckas',
      'DOB':'1997.12.29',
      'FOS':'Tech',
      'FOSR':'Dev',
      'email':'ldvarzeckas@gmail.com',
    },
    aboutMe:{
      'education':"Klaipeda 'Business and Services' school",
      'work':'Web Developer',
      'location':'UK',
      lifeEvents:[
        {'born':'Lithuanian/Klaipeda'},
        {'moved':''},
        {'workRole':''}
      ],
    },
    myTeams:[
      {teamId: 1,teamImg:'',teamName: 'Team A',
        members: [
          {memberId: 3,name: 'Jane',img:'',role: 'Manager'},
          {memberId: 4,name: 'Clark',img:'',role: 'Developer'},
          {memberId: 5,name: 'Sofia',img:'',role: 'Designer'}
        ],
        messages:[
          {msgId: 1,senderId:3,time: '14:44',date: '2024-01-05',
            message: "Hey Clark, how's it going?"
          },
          {msgId: 2,senderId:4,time: '15:00',date: '2024-01-05',
            message: "Don't forget the meeting."
          },
          {msgId: 3,senderId:3,time: '16:30',date: '2024-01-05',
            message: "Can you send me the report?"
          },
          {msgId: 4,senderId:4,time: '14:50',date: '2024-01-05',
            message: "I'm doing well, thanks!"
          },
          {msgId: 5,senderId:3,time: '15:10',date: '2024-01-05',
            message: "I'll be there."
          },
          {msgId: 6,senderId:4,time: '16:45',date: '2024-01-05',
            message: "Report is almost ready."
          },
          {msgId: 7,senderId:5,time: '15:20',date: '2024-01-05',
            message: "Meeting confirmed."
          },
          {msgId: 8,senderId:4,time: '15:30',date: '2024-01-05',
            message: "See you there."
          },
          {msgId: 9,senderId:5,time: '17:00',date: '2024-01-05',
            message: "Any updates on the project?"
          }
        ]
      },
      {teamId: 2,teamImg:'',teamName: 'Team B',
        members: [
          {memberId: 6,name: 'Alice',img:'',role: 'Manager',},
          {memberId: 7,name: 'Bob',img:'',role: 'Developer',},
          {memberId: 8,name: 'Charlie',img:'',role: 'Designer',}
        ],
        messages:[
          {msgId: 1,senderId:6,time: '14:44',date: '2024-01-05',
            message: "Hey Bob, how's it going?"
          },
          {msgId: 2,senderId:8,time: '15:00',date: '2024-01-05',
            message: "Don't forget the meeting."
          },
          {msgId: 3,senderId:6,time: '16:30',date: '2024-01-05',
            message: "Can you send me the report?"
          },
          {msgId: 4,senderId:7,time: '14:50',date: '2024-01-05',
            message: "I'm doing well, thanks!"
          },
          {msgId: 5,senderId:6,time: '15:10',date: '2024-01-05',
            message: "I'll be there."
          },
          {msgId: 6,senderId:8,time: '16:45',date: '2024-01-05',
            message: "Report is almost ready."
          },
          {msgId: 7,senderId:6,time: '15:20',date: '2024-01-05',
            message: "Meeting confirmed."
          },
          {msgId: 8,senderId:8,time: '15:30',date: '2024-01-05',
            message: "See you there."
          },
          {msgId: 9,senderId:7,time: '17:00',date: '2024-01-05',
            message: "Any updates on the project?"
          }
        ]
      },
      {teamId: 3,teamImg:'',teamName: 'Team C',
        members: [
          {memberId: 9,name: 'Carl',img:'',role: 'Manager',},
          {memberId: 10,name: 'Fiona',img:'',role: 'Developer',},
          {memberId: 11,name: 'Mark',img:'',role: 'Designer',}
        ],
        messages:[
          {msgId: 1,senderId:9,time: '14:44',date: '2024-01-05',
            message: "Hey Bob, how's it going?"
          },
          {msgId: 2,senderId:10,time: '15:00',date: '2024-01-05',
            message: "Don't forget the meeting."
          },
          {msgId: 3,senderId:11,time: '16:30',date: '2024-01-05',
            message: "Can you send me the report?"
          },
          {msgId: 4,senderId:9,time: '14:50',date: '2024-01-05',
            message: "I'm doing well, thanks!"
          },
          {msgId: 5,senderId:11,time: '15:10',date: '2024-01-05',
            message: "I'll be there."
          },
          {msgId: 6,senderId:10,time: '16:45',date: '2024-01-05',
            message: "Report is almost ready."
          },
          {msgId: 7,senderId:11,time: '15:20',date: '2024-01-05',
            message: "Meeting confirmed."
          },
          {msgId: 8,senderId:9,time: '15:30',date: '2024-01-05',
            message: "See you there."
          },
          {msgId: 9,senderId:10,time: '17:00',date: '2024-01-05',
            message: "Any updates on the project?"
          }
        ]
      },
      {teamId: 4,teamImg:'',teamName: 'Team D',
        members: [
          {memberId: 12,name: 'Graze',img:'',role: 'Manager'},
          {memberId: 13,name: 'Elizabeth',img:'',role: 'Developer'},
          {memberId: 14,name: 'Chloe',img:'',role: 'Designer'}
        ],
        messages:[
          {msgId: 1,senderId:13,time: '14:44',date: '2024-01-05',
            message: "Hey Bob, how's it going?"
          },
          {msgId: 2,senderId:14,time: '15:00',date: '2024-01-05',
            message: "Don't forget the meeting."
          },
          {msgId: 3,senderId:13,time: '16:30',date: '2024-01-05',
            message: "Can you send me the report?"
          },
          {msgId: 4,senderId:14,time: '14:50',date: '2024-01-05',
            message: "I'm doing well, thanks!"
          },
          {msgId: 5,senderId:13,time: '15:10',date: '2024-01-05',
            message: "I'll be there."
          },
          {msgId: 6,senderId:14,time: '16:45',date: '2024-01-05',
            message: "Report is almost ready."
          },
          {msgId: 7,senderId:12,time: '15:20',date: '2024-01-05',
            message: "Meeting confirmed."
          },
          {msgId: 8,senderId:14,time: '15:30',date: '2024-01-05',
            message: "See you there."
          },
          {msgId: 9,senderId:12,time: '17:00',date: '2024-01-05',
            message: "Any updates on the project?"
          }
        ]
      },
      {teamId: 5,teamImg:'',teamName: 'Team E',
        members: [
          {memberId: 15,name: 'Graze',img:'',role: 'Manager'},
          {memberId: 16,name: 'Elizabeth',img:'',role: 'Developer'},
          {memberId: 17,name: 'Chloe',img:'',role: 'Designer'}
        ],
        messages:[{}]
      },
      {teamId: 6,teamImg:'',teamName: 'Team F',
        members: [
          {memberId: 15,name: 'Graze',img:'',role: 'Manager'},
          {memberId: 16,name: 'Elizabeth',img:'',role: 'Developer'},
          {memberId: 17,name: 'Chloe',img:'',role: 'Designer'}
        ],
        messages:[{}]
      },
      {teamId: 7,teamImg:'',teamName: 'Team G',
        members: [
          {memberId: 15,name: 'Graze',img:'',role: 'Manager'},
          {memberId: 16,name: 'Elizabeth',img:'',role: 'Developer'},
          {memberId: 17,name: 'Chloe',img:'',role: 'Designer'}
        ],
        messages:[{}]
      },
      {teamId: 8,teamImg:'',teamName: 'Team H',
        members: [
          {memberId: 15,name: 'Graze',img:'',role: 'Manager'},
          {memberId: 16,name: 'Elizabeth',img:'',role: 'Developer'},
          {memberId: 17,name: 'Chloe',img:'',role: 'Designer'}
        ],
      messages:[{}]
      },
      {teamId: 9,teamImg:'',teamName: 'Team I',
        members: [
          {memberId: 15,name: 'Graze',img:'',role: 'Manager'},
          {memberId: 16,name: 'Elizabeth',img:'',role: 'Developer'},
          {memberId: 17,name: 'Chloe',img:'',role: 'Designer'}
        ],
        messages:[{}]
      },
      {teamId: 10,teamImg:'',teamName: 'Team J',
        members: [
          {memberId: 15,name: 'Graze',img:'',role: 'Manager'},
          {memberId: 16,name: 'Elizabeth',img:'',role: 'Developer'},
          {memberId: 17,name: 'Chloe',img:'',role: 'Designer'}
        ],
        messages:[{}]
      },
    ],
    myNetwork:[
      {id:7,img:'',name:'Jack3',online: false,
        messages:[
          {msgId: 1,senderId:1,receiverId:7,time:'14:44',date:'2024.01.05',
            message:"Hey friend how's going?"
          },
          {msgId: 2,senderId:7,receiverId:1,time:'14:45',date:'2024.01.05',
            message:"Not bad you?"
          },
          {msgId: 3,senderId:1,receiverId:7,time:'14:45',date:'2024.01.06',
            message:"Just testing"
          },
          {msgId: 3,senderId:7,receiverId:1,time:'14:45',date:'2024.01.05',
            message:"'Aight, see ya"
          },
        ],
        posts:[
          {id:1,date:'2024.01.11',time:'14:25',message:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."},
          {id:2,date:'2024.01.12',time:'09:25',message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
          {id:3,date:'2024.01.12',time:'09:25',message:"Hello everyone I wanted to say thank everyone for reaching out and filling the places in our new movie, we were glad that you liked it and we promise that in future we will make something similar or even to test new waters with new content now we waiting for the content creators to contact us if they wanna create something similar to that even, we have place, we have contacts, ar you ready? Give me message in DM and one of our stuff members will contact you in 24 hr period."},
        ],
      },
      {id:8,img:'',name:'user3',online: true,
        messages:[
          {msgId: 1,senderId:1,receiverId:8,time:'14:44',date:'2024.01.05',
            message:"Hey friend how's going?"
          },
          {msgId: 2,senderId:8,receiverId:1,time:'14:45',date:'2024.01.05',
            message:"Not bad you?"
          }
        ],
        posts:[{}],
      },
      {id:9,img:'',name:'user4',online: false,
        messages:[
          {msgId: 1,senderId:1,receiverId:9,time:'14:44',date:'2024.01.05',
            message:"Hey friend how's going?"
          },
          {msgId: 2,senderId:9,receiverId:1,time:'14:45',date:'2024.01.05',
            message:"Not bad you?"
          }
        ],
        posts:[{}],
      },
      {id:10,img:'',name:'user5',online: false,
        messages:[
          {msgId: 1,senderId:1,receiverId:10,time:'14:44',date:'2024.01.05',
            message:"Hey friend how's going?"
          },
          {msgId: 2,senderId:10,receiverId:1,time:'14:45',date:'2024.01.05',
            message:"Not bad you?"
          }
        ],
        posts:[{}],
      },
      {id:11,img:'',name:'user6',online: true,
        messages:[
          {msgId: 1,senderId:1,receiverId:11,time:'14:44',date:'2024.01.05',
            message:"Hey friend how's going?"
          },
          {msgId: 2,senderId:11,receiverId:1,time:'14:45',date:'2024.01.05',
            message:"Not bad you?"
          }
        ],
        posts:[{}],
      },
      {id:19,img:'',name:'Jack18',online: true,
        messages:[{}],
        posts:[{}],
      }
    ],
    myGroups:[
      {groupId: 1,groupImg:'',groupName: 'Group A',
        members: [
          {memberId: 3,name: 'Jane',img:'',role: 'Manager'},
          {memberId: 4,name: 'Clark',img:'',role: 'Developer'},
          {memberId: 5,name: 'Sofia',img:'',role: 'Designer'}
        ],
        messages:[
          {msgId: 1,senderId:3,time: '14:44',date: '2024-01-05',
            message: "Hey Clark, how's it going?"
          },
          {msgId: 2,senderId:4,time: '15:00',date: '2024-01-05',
            message: "Don't forget the meeting."
          },
          {msgId: 3,senderId:3,time: '16:30',date: '2024-01-05',
            message: "Can you send me the report?"
          },
          {msgId: 4,senderId:4,time: '14:50',date: '2024-01-05',
            message: "I'm doing well, thanks!"
          },
          {msgId: 5,senderId:3,time: '15:10',date: '2024-01-05',
            message: "I'll be there."
          },
          {msgId: 6,senderId:4,time: '16:45',date: '2024-01-05',
            message: "Report is almost ready."
          },
          {msgId: 7,senderId:5,time: '15:20',date: '2024-01-05',
            message: "Meeting confirmed."
          },
          {msgId: 8,senderId:4,time: '15:30',date: '2024-01-05',
            message: "See you there."
          },
          {msgId: 9,senderId:5,time: '17:00',date: '2024-01-05',
            message: "Any updates on the project?"
          }
        ]
      },
      {groupId: 2,groupImg:'',groupName: 'Group B',
        members: [
          {memberId: 6,name: 'Alice',img:'',role: 'Manager',},
          {memberId: 7,name: 'Bob',img:'',role: 'Developer',},
          {memberId: 8,name: 'Charlie',img:'',role: 'Designer',}
        ],
        messages:[
          {msgId: 1,senderId:6,time: '14:44',date: '2024-01-05',
            message: "Hey Bob, how's it going?"
          },
          {msgId: 2,senderId:8,time: '15:00',date: '2024-01-05',
            message: "Don't forget the meeting."
          },
          {msgId: 3,senderId:6,time: '16:30',date: '2024-01-05',
            message: "Can you send me the report?"
          },
          {msgId: 4,senderId:7,time: '14:50',date: '2024-01-05',
            message: "I'm doing well, thanks!"
          },
          {msgId: 5,senderId:6,time: '15:10',date: '2024-01-05',
            message: "I'll be there."
          },
          {msgId: 6,senderId:8,time: '16:45',date: '2024-01-05',
            message: "Report is almost ready."
          },
          {msgId: 7,senderId:6,time: '15:20',date: '2024-01-05',
            message: "Meeting confirmed."
          },
          {msgId: 8,senderId:8,time: '15:30',date: '2024-01-05',
            message: "See you there."
          },
          {msgId: 9,senderId:7,time: '17:00',date: '2024-01-05',
            message: "Any updates on the project?"
          }
        ]
      },
      {groupId: 3,groupImg:'',groupName: 'Group C',
        members: [
          {memberId: 9,name: 'Carl',img:'',role: 'Manager',},
          {memberId: 10,name: 'Fiona',img:'',role: 'Developer',},
          {memberId: 11,name: 'Mark',img:'',role: 'Designer',}
        ],
        messages:[
          {msgId: 1,senderId:9,time: '14:44',date: '2024-01-05',
            message: "Hey Bob, how's it going?"
          },
          {msgId: 2,senderId:10,time: '15:00',date: '2024-01-05',
            message: "Don't forget the meeting."
          },
          {msgId: 3,senderId:11,time: '16:30',date: '2024-01-05',
            message: "Can you send me the report?"
          },
          {msgId: 4,senderId:9,time: '14:50',date: '2024-01-05',
            message: "I'm doing well, thanks!"
          },
          {msgId: 5,senderId:11,time: '15:10',date: '2024-01-05',
            message: "I'll be there."
          },
          {msgId: 6,senderId:10,time: '16:45',date: '2024-01-05',
            message: "Report is almost ready."
          },
          {msgId: 7,senderId:11,time: '15:20',date: '2024-01-05',
            message: "Meeting confirmed."
          },
          {msgId: 8,senderId:9,time: '15:30',date: '2024-01-05',
            message: "See you there."
          },
          {msgId: 9,senderId:10,time: '17:00',date: '2024-01-05',
            message: "Any updates on the project?"
          }
        ]
      },
      {groupId: 4,groupImg:'',groupName: 'Group D',
        members: [
          {memberId: 12,name: 'Graze',img:'',role: 'Manager'},
          {memberId: 13,name: 'Elizabeth',img:'',role: 'Developer'},
          {memberId: 14,name: 'Chloe',img:'',role: 'Designer'}
        ],
        messages:[
          {msgId: 1,senderId:13,time: '14:44',date: '2024-01-05',
            message: "Hey Bob, how's it going?"
          },
          {msgId: 2,senderId:14,time: '15:00',date: '2024-01-05',
            message: "Don't forget the meeting."
          },
          {msgId: 3,senderId:13,time: '16:30',date: '2024-01-05',
            message: "Can you send me the report?"
          },
          {msgId: 4,senderId:14,time: '14:50',date: '2024-01-05',
            message: "I'm doing well, thanks!"
          },
          {msgId: 5,senderId:13,time: '15:10',date: '2024-01-05',
            message: "I'll be there."
          },
          {msgId: 6,senderId:14,time: '16:45',date: '2024-01-05',
            message: "Report is almost ready."
          },
          {msgId: 7,senderId:12,time: '15:20',date: '2024-01-05',
            message: "Meeting confirmed."
          },
          {msgId: 8,senderId:14,time: '15:30',date: '2024-01-05',
            message: "See you there."
          },
          {msgId: 9,senderId:12,time: '17:00',date: '2024-01-05',
            message: "Any updates on the project?"
          }
        ]
      },
      {groupId: 5,groupImg:'',groupName: 'Group E',
        members: [
          {memberId: 3,name: 'Jane',img:'',role: 'Manager'},
          {memberId: 4,name: 'Clark',img:'',role: 'Developer'},
          {memberId: 5,name: 'Sofia',img:'',role: 'Designer'}
        ],
        messages:[{}],
      }
    ],
    blocked:[{}],
    posts:[{}],
    notifications:[{}]
  },

  {
    id:2,
    user:'Jack',
    userInfo:{
      name:'Jackie',
      surname:'Johnson',
      dob:'1990.05.12',
      fos:'Food & bewarage',
      fosr:'Chef',
      email:'jakieJohn@gmail.com',
      gender:'Male'
    },
    aboutMe:{
      'Education':"Cook School",
      'Location':'Canada',
      'Work':'Cook inc.',
      'WorkRole':'Chef assistant',
      lifeEvents:[
        {'born':'Canada'},
        {'moved':' '},
        {'workRole':'Started as Chef assistant'}
      ],
    },
    myNetwork:[
      {id:7,img:'',banner:'',name:'Jade',friends:true,blocked:false},
      {id:8,img:'',name:'user3',friends:true,blocked:false},
      {id:9,img:'',name:'user4',friends:true,blocked:false},
      {id:10,img:'',name:'user5',friends:true,blocked:false},
      {id:11,img:'',name:'user6',friends:true,blocked:false},
    ],
  }

]
//Owner,Dev,Admin,Mod,Support
export const Permissions = [
  {
  "roles": {
    "Owner": [{"roleID":1,"user_id": "345","name": "Larry"}],
    "Dev": [{"roleID": 2,"user_id": "678","name": "Larry"}],
    "Admin": [{"roleID":3,"user_id": 123,"name": "User 1"},],
    "Mod": [{"roleID":4,"user_id": "012","name": "User 2"}],
    "Support": [{"roleID":5,"user_id": "014","name": "User 3"}],
  }
}

]
export const Posts = [
{
  "post_id": "123456789",
  "author": {
    "user_id": "987654321",
    "name": "John Doe",
    "profile_picture": "https://example.com/profile.jpg"
  },
  "content": "This is the content of the post.",
  "post_type": "status_update",
  "timestamp": "2024-04-10T12:00:00Z",
  "location": {
    "latitude": 40.7128,
    "longitude": -74.0060,
    "name": "New York, NY, USA"
  },
  "privacy": "public",
  "attachments": [
    {
      "type": "image",
      "url": "https://example.com/image1.jpg"
    },
    {
      "type": "video",
      "url": "https://example.com/video1.mp4"
    },
    {
      "type": "link",
      "url": "https://example.com/article"
    },
    {
      "type": "file",
      "url": "https://example.com/document.pdf"
    }
  ],
  "tags": ["tag1", "tag2"],
  "event": {
    "event_id": "987654321",
    "name": "Example Event",
    "date": "2024-05-01T18:00:00Z",
    "location": "Example Location",
    "RSVP_status": "interested"
  },
  "poll": {
    "question": "What is your favorite color?",
    "options": ["Red", "Blue", "Green"],
    "end_time": "2024-04-15T12:00:00Z"
  },
  "reactions": {
    "like": 0,
    "top": 0,
    "best": 0,
    "teamUP": 0,
    "idea": 0,
    "deal": 0,
  },
  "comments": [
    {
      "comment_id": "123",
      "author": {
        "user_id": "123456",
        "name": "Jane Smith",
        "profile_picture": "https://example.com/profile2.jpg"
      },
      "content": "This is a comment.",
      "timestamp": "2024-04-10T12:05:00Z",
      "reactions": {
        "like": 5,
        "love": 2
      }
    },
    {
      "comment_id": "456",
      "author": {
        "user_id": "789012",
        "name": "Alice Johnson",
        "profile_picture": "https://example.com/profile3.jpg"
      },
      "content": "Another comment here.",
      "timestamp": "2024-04-10T12:10:00Z",
      "reactions": {
        "like": 10,
        "wow": 1
      }
    }
  ]
}

]
export const Updates = [
  {id: 1,name: " Bug Fixes",
    updates: [
      {id: 0,
        text: "Resolved issue causing login failure for users with special characters in their passwords. Additionally, improved caching mechanism for faster page loading times."
      },
      {id: 1,
        text: "Optimized database queries and server response times to reduce page load times by 30%. Implemented lazy loading for images and assets to further improve performance."
      }
    ]
  },
  {id: 2,name: " Improvements",
    updates: [
      {id: 0,
        text: "Resolved issue causing login failure for users with special characters in their passwords. Additionally, improved caching mechanism for faster page loading times."
      },
      {id:1,
        text: "Optimized database queries and server response times to reduce page load times by 30%. Implemented lazy loading for images and assets to further improve performance."
      }
    ]
  },
  {id: 3,name: " New Features",
    updates: [
      {
        id: 0,
        text: "Added a real-time chat feature, allowing users to communicate with each other instantly. Users can now create private or group chats and share messages, images, and files."
      }
    ]
  },
  {id: 4,name: " User Interface (UI) Enhancements",
    updates: [
      {
        id: 0,
        text: "Revamped the dashboard interface with a cleaner layout and improved navigation. Updated color scheme and typography for better readability and visual appeal."
      }
    ]
  },
  {id: 5, name: " Performance Optimization",
    updates: [
      {
        id: 0,
        text: "Patched critical security vulnerability that could potentially expose user data to unauthorized access. Strengthened authentication and encryption protocols to enhance data security."
      }
    ]
  },
  {id: 6,name: " Security Updates",
    updates: [
      {
        id: 0,
        text: "Optimized database queries and server response times to reduce page load times by 30%. Implemented lazy loading for images and assets to further improve performance."
      }
    ]
  },
  {id: 7,name: " Content Updates",
    updates: [
      {
        id: 0,
        text: "Added new blog posts covering recent industry trends and best practices. Updated product descriptions and specifications to reflect the latest features and improvements."
      }
    ]
  },
  {id: 8,name: " Accessibility Improvements",
    updates: [
      {
        id: 0,
        text: "Implemented keyboard navigation support and screen reader compatibility to enhance accessibility for users with disabilities. Improved contrast and text resizing options for better readability."
      }
    ]
  },
  {id: 9,name: " Localization and Internationalization",
    updates: [
      {
        id: 0,
        text: "Added support for Spanish language translation. Updated date and currency formats to accommodate different regional preferences."
      }
    ]
  },
  {id: 10,name: " Infrastructure Upgrades",
    updates: [
      {
        id: 0,
        text: "Migrated to a cloud-based hosting provider for improved scalability and reliability. Upgraded server hardware and network infrastructure for better performance and uptime."
      }
    ]
  },
  {id: 11,name: " Compliance and Regulatory Updates",
    updates: [
      {
        id: 0,
        text: "Implemented GDPR compliance features to ensure user data protection and privacy. Conducted security audit and penetration testing to meet industry standards and regulatory requirements."
      }
    ]
  }

]
export const Notifications = [
]
export const userProfile = [
{
  "user_id": "123456789",
  "username": "john_doe",
  "full_name": "John Doe",
  "email": "john.doe@example.com",
  "age": 30,
  "gender": "male",
  "location": "New York, USA",
  "bio": "Passionate about technology and innovation.",
  "interests": ["technology", "coding", "gaming", "photography"],
  "languages": ["English", "Spanish"],
  "timezone": "America/New_York",
  "preferences": {
    "theme": "dark",
    "notifications": {
      "email": true,
      "push": true
    },
    "privacy": {
      "profile_visibility": {
        "Team":false,
        "Friends":false,
        "Everyone":true,
      },
      "data_sharing": {
        "analytics": true,
        "personalized_ads": false
      }
    },
    "language": "English"
  },
  "settings": {
    "theme": "dark",
    "font_size": "medium",
    "autoplay_videos": false,
    "show_photos": true
  },
  "social_media": {
    "facebook": "https://www.facebook.com/johndoe",
    "twitter": "https://twitter.com/johndoe",
    "instagram": "https://www.instagram.com/johndoe"
  },
  "membership": {
    "status": "premium",
    "expiry_date": "2024-12-31"
  },
  "blocked_users": ["user123", "user456"],
    "pending_friend_requests": ["user789", "user987"],
    "friends": ["friend1", "friend2", "friend3"],
    "teams": [
      {
        "team_id": "team1",
        "team_name": "Developers",
        "members": ["user1", "user2", "user3"],
        "messages": [
          {
            "message_id": "msg1",
            "sender": "user1",
            "content": "Hello team!",
            "timestamp": "2024-04-09T10:00:00Z",
            "reactions": {
              "like": 5,
              "top": 3
            },
            "replies": [
              {
                "reply_id": "reply1",
                "sender": "user2",
                "content": "Hi there!",
                "timestamp": "2024-04-09T10:05:00Z"
              }
            ]
          }
        ],
        "user_images": {
          "user1": "https://example.com/user1.jpg",
          "user2": "https://example.com/user2.jpg",
          "user3": "https://example.com/user3.jpg"
        }
      }
    ],
    "groups": [
      {
        "group_id": "group1",
        "group_name": "Project X",
        "owner": "user123",
        "members": ["user1", "user2", "user3", "user4", "user5"],
        "mods": ["mod1", "mod2"],
        "permissions": {
          "delete_messages": true,
          "add_members": true,
          "remove_members": true
        },
        "messages": [
          {
            "message_id": "msg1",
            "sender": "user1",
            "content": "Welcome to Project X!",
            "timestamp": "2024-04-09T12:00:00Z",
            "reactions": {
              "like": 10,
              "best": 8,
            }
          }
        ]
      }
    ],
  "last_login": "2024-04-09T15:30:00Z",
  "registration_date": "2020-01-15T12:00:00Z"
}
]
export const users = [
  {  
    globalUsers:[
      {id:1,img:'',name:'useraaaaaaaaaaaaaaa'},
      {id:2,img:'',name:'user1'},
      {id:3,img:'',name:'user2'},
      {id:4,img:'',name:'user3'},
      {id:5,img:'',name:'user4'},
      {id:6,img:'',name:'user5'},
      {id:7,img:'',name:'user6'},
      {id:8,img:'',name:'user7'},
      {id:9,img:'',name:'user8'},
      {id:10,img:'',name:'user8'},
      {id:11,img:'',name:'user8'},
      {id:12,img:'',name:'user8'},
      {id:13,img:'',name:'user8'},
      {id:14,img:'',name:'user8'},
      {id:15,img:'',name:'user8'},
      {id:16,img:'',name:'user8'},
      {id:17,img:'',name:'user8'},
      {id:18,img:'',name:'user8'},
      {id:19,img:'',name:'user8'},
      {id:20,img:'',name:'user8'},
      {id:21,img:'',name:'user8'},
    ],
  }
]
export const messageData = [
  {
    globalMessages:[
      {id:1,
        output:[ 
          {msgID:0,img:'',name:'user',time:'14:44',date:'2024.01.05',message:'hello'},
          {msgID:11,img:'',name:'user',time:'14:44',date:'2024.01.25',message:'hello'},
          {msgID:1,img:'',name:'user',time:'14:44',date:'2024.02.05',message:'hello'},
          {msgID:2,img:'',name:'user',time:'14:46',date:'2024.01.05',message:'hello'},
          {msgID:3,img:'',name:'user',time:'14:46',date:'2024.01.05',message:'hello'},
        ],
      },
      {id:2,
        output:[
          {msgID:1,img:'',name:'user1',time:'14:45',date:'2024.01.06',message:'hi'},
        ],
      },
      {id:3,
        output:[ 
          {msgID:1,img:'',name:'user2',time:'14:46',date:'2024.01.07',message:'test'},
        ],
      },
      {id:4,
        output:[ 
          {msgID:1,img:'',name:'user3',time:'14:47',date:'2023.11.05',message:'one more test'},
        ],
      },
      {id:5,
        output:[ 
          {msgID:1,img:'',name:'user4',time:'14:48',date:'2024.01.25',message:'final test'},
        ],
      },
    ],
  }
]
//template
export const WebMetaData = [
  {
    'Web_Name':'WebName',
    'WebAcro':['a','b','c'],
    'Meta_Description':'',
    'Keywords':'keywords',
    'Language':'langs',
  }
]

//News Styling and header
export const newsCardItems = [
  { text: 'Financial', headerStyle: 'newsCardHeader_fin', bubbleStyle: 'newsBubbleColor_fin' },
  { text: 'Environment', headerStyle: 'newsCardHeader_env', bubbleStyle: 'newsBubbleColor_env' },
  { text: 'Natural', headerStyle: 'newsCardHeader_ntr', bubbleStyle: 'newsBubbleColor_ntr' },
  { text: 'Political', headerStyle: 'newsCardHeader_pol', bubbleStyle: 'newsBubbleColor_pol' },
  { text: 'Technology', headerStyle: 'newsCardHeader_teh', bubbleStyle: 'newsBubbleColor_teh' },
  { text: 'Health', headerStyle: 'newsCardHeader_hth', bubbleStyle: 'newsBubbleColor_hth' },
  { text: 'Sports', headerStyle: 'newsCardHeader_spr', bubbleStyle: 'newsBubbleColor_spr' },
  { text: 'International', headerStyle: 'newsCardHeader_int', bubbleStyle: 'newsBubbleColor_int' },
  { text: 'National', headerStyle: 'newsCardHeader_nat', bubbleStyle: 'newsBubbleColor_nat' },
  { text: 'Local', headerStyle: 'newsCardHeader_loc', bubbleStyle: 'newsBubbleColor_loc' },
  { text: 'Entertainment', headerStyle: 'newsCardHeader_ent', bubbleStyle: 'newsBubbleColor_ent' },
]
export const reactionsStyle = [
  { id: 1, icon: '👍' },
  { id: 2, icon: '🏅' },
  { id: 3, icon: '⭐' },
  { id: 4, icon: '👫' },
  { id: 5, icon: '💡' },
  { id: 6, icon: '🤝' },
]
export const reactionsAction = [
  { id: 1, icon: 'thumbs-up', emote: 'like' },
  { id: 2, icon: 'medal', emote: 'top' },
  { id: 3, icon: 'star', emote: 'best' },
  { id: 4, icon: 'people-group', emote: 'team', },
  { id: 5, icon: 'lightbulb', emote: 'idea' },
  { id: 6, icon: 'handshake', emote: 'deal' },
  { id: 7, icon: 'close', }
]
//Search
//tag types user , group, teams public | private  
export const searchData = [
  { id:1,name:'Emy' ,tag:'user'}, 
  { id:2,name:'Tailor',tag:'user'},
  { id:3,name:'Guess Who',tag:'user'}, 
  { id:4,name:'Browner',tag:'user'},
  { id:5,name:'coder',tag:'group',type:'private'},
  { id:6,name:'coder1',tag:'group',type:'public'},
  { id:7,name:'coder2',tag:'team',type:'private'},
  { id:8,name:'coder3',tag:'team',type:'public'},
  { id:9,name:'coder4',tag:'group',type:'private'},
  { id:10,name:'coder4',tag:'group',type:'private'},
  { id:11,name:'coder4',tag:'group',type:'private'},
  { id:12,name:'coder4',tag:'group',type:'private'},
  { id:13,name:'coder4',tag:'group',type:'private'},
  { id:14,name:'coder4',tag:'group',type:'private'},
];
