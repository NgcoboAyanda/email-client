import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    folders: {
        inbox:{
            emails:[],
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