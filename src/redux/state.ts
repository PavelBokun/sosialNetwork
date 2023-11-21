export type MessagesType = {
  message: string;
  id: number;
};

export type DialogsItemsType = {
  name: string;
  id: number;
  faise: string;
};

export type FrendsType = {
  name: string;
  id: number;
  faise: string;
};
export type PostDataType = {
  id: number;
  message: string;
  like: string;
};
export type SiedbarType = {};
//   export type AppProps={
//     postsData:PostDataType[]
//     dialogsData:DialogsItemsType[]
//     messagesData:MessagesType[]
//   }

// let profilePage:ProfilePage={PostDataType[],DialogsItemsType[]}

export type FrendsDataType={
  frends: FrendsType[]
}

export type ProfilePage = {
  postsData: Array<PostDataType>;
};

export type DialogsPageType = {
  dialogsData: DialogsItemsType[];
  messagesData: MessagesType[];
};


export type SideBarType = {};
export type RootStateType = {
  profilePage: ProfilePage;
  dialogsPage: DialogsPageType;
  siedbar: SiedbarType;
  frendsData:FrendsDataType
};

//   let postsData:PostDataType[]= [
//     { id: 1, message: "How are you", like: "2" },
//     { id: 2, message: "It is my first post", like: "7" },
//     { id: 3, message: "Sveta Hi", like: "2" },
//     { id: 4, message: "Victor big man", like: "2" },
//     { id: 4, message: "Victor big man", like: "2" },

//   ];
//   let dialogsData:DialogsItemsType[] = [
//     { id: 1, name: "Dimych", faise: " 🧑" },
//     { id: 2, name: "Ahdrey", faise: " 🧒" },
//     { id: 3, name: "Sveta", faise: " 👩‍🦰" },
//     { id: 4, name: "Victor", faise: " 👨‍🦱" },
//   ];
//   let messagesData:MessagesType[] = [
//     { id: 1, message: "Hi" },
//     { id: 2, message: "Hi boy" },
//     { id: 3, message: "Sveta Hi" },
//     { id: 4, message: "Victor big man" },
//   ];

export const state: RootStateType = {
  profilePage: {
    postsData: [
      { id: 1, message: "How are you", like: "2" },
      { id: 2, message: "It is my first post", like: "7" },
      { id: 3, message: "Sveta Hi", like: "2" },
      { id: 4, message: "Victor big man", like: "2" },
      { id: 4, message: "Victor big man", like: "2" },
    ],
  },
  dialogsPage: {
    dialogsData: [
      { id: 1, name: "Dimych", faise: " 🧑" },
      { id: 2, name: "Ahdrey", faise: " 🧒" },
      { id: 3, name: "Sveta", faise: " 👩‍🦰" },
      { id: 4, name: "Victor", faise: " 👨‍🦱" },
    ],
    messagesData: [
      { id: 1, message: "Hi" },
      { id: 2, message: "Hi boy" },
      { id: 3, message: "Sveta Hi" },
      { id: 4, message: "Victor big man" },
    ],
  },
  siedbar: {},
  frendsData:{
frends:[
  { id: 1, name: "Ahdrey2", faise: " 🧒" },
  { id: 2, name: "Sveta2", faise: " 👩‍🦰" },
  { id: 3, name: "Victor3", faise: " 👨‍🦱" }
]
  } 
};
