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
export const Permissions = [
  {
  "roles": {
    "admins": [
      {
        "user_id": "123",
        "name": "Admin User 1"
      },
      {
        "user_id": "456",
        "name": "Admin User 2"
      }
    ],
    "moderators": [
      {
        "user_id": "789",
        "name": "Moderator User 1"
      },
      {
        "user_id": "012",
        "name": "Moderator User 2"
      }
    ],
    "owners": [
      {
        "user_id": "345",
        "name": "Owner User"
      }
    ],
    "developers": [
      {
        "user_id": "678",
        "name": "Developer User"
      }
    ]
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
{
  "BugFixes": {
    "type_id": "1",
    "type_name": "Bug Fixes",
    "updates": [
      {
        "update_id": "1",
        "update_text": "Resolved issue causing login failure for users with special characters in their passwords. Additionally, improved caching mechanism for faster page loading times."
      },
      {
        "update_id": "4",
        "update_text": "Optimized database queries and server response times to reduce page load times by 30%. Implemented lazy loading for images and assets to further improve performance."
      }
    ]
  },
  "Improvements": {
    "type_id": "2",
    "type_name": "Improvements",
    "updates": [
      {
        "update_id": "1",
        "update_text": "Resolved issue causing login failure for users with special characters in their passwords. Additionally, improved caching mechanism for faster page loading times."
      },
      {
        "update_id": "4",
        "update_text": "Optimized database queries and server response times to reduce page load times by 30%. Implemented lazy loading for images and assets to further improve performance."
      }
    ]
  },
  "New Features": {
    "type_id": "3",
    "type_name": "New Features",
    "updates": [
      {
        "update_id": "2",
        "update_text": "Added a real-time chat feature, allowing users to communicate with each other instantly. Users can now create private or group chats and share messages, images, and files."
      }
    ]
  },
  "UI Enhancements": {
    "type_id": "4",
    "type_name": "User Interface (UI) Enhancements",
    "updates": [
      {
        "update_id": "3",
        "update_text": "Revamped the dashboard interface with a cleaner layout and improved navigation. Updated color scheme and typography for better readability and visual appeal."
      }
    ]
  },
  "Performance Optimization": {
    "type_id": "5",
    "type_name": "Performance Optimization",
    "updates": [
      {
        "update_id": "5",
        "update_text": "Patched critical security vulnerability that could potentially expose user data to unauthorized access. Strengthened authentication and encryption protocols to enhance data security."
      }
    ]
  },
  "Security Update": {
    "type_id": "6",
    "type_name": "Security Updates",
    "updates": [
      {
        "update_id": "6",
        "update_text": "Optimized database queries and server response times to reduce page load times by 30%. Implemented lazy loading for images and assets to further improve performance."
      }
    ]
  },
  "Content Updates": {
    "type_id": "7",
    "type_name": "Content Updates",
    "updates": [
      {
        "update_id": "7",
        "update_text": "Added new blog posts covering recent industry trends and best practices. Updated product descriptions and specifications to reflect the latest features and improvements."
      }
    ]
  },
  "Accessibility Improvements": {
    "type_id": "8",
    "type_name": "Accessibility Improvements",
    "updates": [
      {
        "update_id": "8",
        "update_text": "Implemented keyboard navigation support and screen reader compatibility to enhance accessibility for users with disabilities. Improved contrast and text resizing options for better readability."
      }
    ]
  },
  "Lang Regions": {
    "type_id": "9",
    "type_name": "Localization and Internationalization",
    "updates": [
      {
        "update_id": "9",
        "update_text": "Added support for Spanish language translation. Updated date and currency formats to accommodate different regional preferences."
      }
    ]
  },
  "Infrastructure Upgrades": {
    "type_id": "10",
    "type_name": "Infrastructure Upgrades",
    "updates": [
      {
        "update_id": "10",
        "update_text": "Migrated to a cloud-based hosting provider for improved scalability and reliability. Upgraded server hardware and network infrastructure for better performance and uptime."
      }
    ]
  },
  "Compliance and Regulatory": {
    "type_id": "11",
    "type_name": "Compliance and Regulatory Updates",
    "updates": [
      {
        "update_id": "11",
        "update_text": "Implemented GDPR compliance features to ensure user data protection and privacy. Conducted security audit and penetration testing to meet industry standards and regulatory requirements."
      }
    ]
  }
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
    {id:1,img:'',name:'user'},
    {id:2,img:'',name:'user1'},
    {id:3,img:'',name:'user2'},
  ],
    teamUsers:[
      {id:1,img:'',name:'user',},
      {id:2,img:'',name:'user1',}
    ],
    friendsUsers:[
      {id:1,img:'',name:'user',},
      {id:2,img:'',name:'user1',}
    ],
    groupUsers:[
      {id:1,img:'',name:'user',},
      {id:2,img:'',name:'user1',}
    ]
    // teamUsers:[
    //   {id:1,img:'',team:[
    //     {
    //       teamID:1,
    //       teamName:'legendary',
    //       users:[
    //         {id:1,name:'tree'},
    //         {id:2,name:'bosch'},
    //     ]
    //   }
    //   ],
    // },
    //   {id:2,img:'',name:'user1',}
    // ]
  }
]
export const messageData = [
  {
    globalMessages:[
      {id:1,img:'',name:'user',
        output:[ {msgID:1,time:'14:44',message:'hello'}],
      },
      {id:2,img:'',name:'user1',
        output:[ {msgID:1,time:'14:45',message:'hi'}],
      },
      {id:2,img:'',name:'user2',
        output:[ {msgID:1,time:'14:46',message:'test'}],
      },
      {id:3,img:'',name:'user3',
        output:[ {msgID:1,time:'14:47',message:'one more test'}],
      },
      {id:4,img:'',name:'user4',
        output:[ {msgID:1,time:'14:48',message:'final test'}],
      },
    ]
  }
]
export const emoteButtons = [
  {spanBG:'bg-sky-600/90',action:'like',icon:'thumbs-up'},
  {spanBG:'bg-rose-600/90',action:'top',icon:'medal'},
  {spanBG:'bg-amber-600/90',action:'best',icon:'star'},
  {spanBG:'bg-green-600/90',action:'teamUP',icon:'people-group'},
  {spanBG:'bg-yellow-600/90',action:'idea',icon:'lightbulb'},
  {spanBG:'bg-blue-600/90',action:'deal',icon:'handshake',},
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