import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    folders: {
        inbox:{
            emails:[
                {
                    sender: {
                        name: 'CitiBank',
                        email: 'emma@citibank.com',
                        logo: ""
                    },
                    time: '19:18',
                    subject: "Unfortunately, your credit card application was declined.",
                    content: "Mr. John Doe, we are sorry to inform you that your application for a credit card was unsuccessful.",
                    read: false,
                    selected: false
                }
                ,
                {
                    sender: {
                        name: 'ClearScore',
                        email: 'em@clearscore.co.za',
                        logo: ""
                    },
                    time: '19:13',
                    subject: "John Doe, do you need a new home?",
                    content: "Hie John Doe. Do you know that you qualify for a home loan? Login to your account to see the latest offers.",
                    read: true,
                    selected: false
                }
            ],
            totalNumber: 0,
            read: 0,
            unread: 5,
            selected: 0
        },
        drafts: {
            emails:[],
            totalNumber: 0,
            read: 0,
            unread: 0,
            selected: 0
        },
        sent: {
            emails:[],
            totalNumber: 0,
            read: 0,
            unread: 0,
            selected: 0
        },
        starred: {
            emails:[],
            totalNumber: 0,
            read: 0,
            unread: 0,
            selected: 0
        },
        archive: {
            emails:[],
            totalNumber: 0,
            read: 0,
            unread: 3,
            selected: 0
        },
        spam: {
            emails:[],
            totalNumber: 0,
            read: 0,
            unread: 0,
            selected: 0
        },
        trash: {
            emails:[],
            totalNumber: 0,
            read: 0,
            unread: 0,
            selected: 0
        },
        allMail: {
            emails:[],
            totalNumber: 0,
            read: 0,
            unread: 0,
            selected: 0
        },    
    },
    customFolders: {},
    labels: [],
    currentOpenFolder: 'inbox',
    filterEmails: 'All',
    sortEmailsBy:'Newest first',
    mobileSidebarOpen: false
}

const mailSlice = createSlice({
    name: "mail",
    initialState,
    reducers:{
        setCurrentOpenFolder: (state, action) => {
            const {folder} = action.payload;
            return { ...state, currentOpenFolder:folder }
        },
        toggleMobileSidebar: (state, action) => {
            return { ...state, mobileSidebarOpen: !state.mobileSidebarOpen }
        }
    }
})

export const { setCurrentOpenFolder, toggleMobileSidebar } = mailSlice.actions;

export default mailSlice;