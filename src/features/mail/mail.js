import { createSlice, current } from "@reduxjs/toolkit";

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
                    id: 1,
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
                    id: 2,
                    time: '19:13',
                    subject: "John Doe, do you need a new home?",
                    content: "Hie John Doe. Do you know that you qualify for a home loan? Login to your account to see the latest offers.",
                    read: true,
                    selected: false
                }
            ],
            totalNumber: 0,
            read: 0,
            unread: 0,
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
            unread: 0,
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
    emailViewer: {
        currentlyOpenEmail: null
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
        updateMailFolder: (state, action)=>{
            //updates the read, unread, selected and total number counts in the specified email folder
            const {folder} = action.payload;
            const {emails} = state.folders[folder];
            let readEmails=0;
            let selectedEmails=0;
            let totalNumberOfEmails=emails.length;
            emails.forEach( email => {
                if(email.read) readEmails++;
                if(email.selected) selectedEmails++;
            });
            let unreadEmails=totalNumberOfEmails-readEmails;
            return { ...state, folders: { ...state.folders, [folder] : { ...state.folders[folder], totalNumber: totalNumberOfEmails, read: readEmails, selected: selectedEmails, unread: unreadEmails } } };
        },
        setCurrentOpenFolder: (state, action) => {
            const {folder} = action.payload;
            return { ...state, currentOpenFolder:folder }
        },
        toggleMobileSidebar: (state, action) => {
            return { ...state, mobileSidebarOpen: !state.mobileSidebarOpen }
        },
        toggleAllEmailSelected: (state, action) => {
            //toggle if all emails are selected or deselected
            const {folder} = action.payload;
            const {emails, totalNumber, read, unread, selected} = state.folders[folder];
            //function that loops through emails array and sets selected to a particular value
            const toggle = (folder, newValue) => {
                state.folders[folder].emails.forEach( email => {
                    email.selected = newValue;
                } )
            }
            if(totalNumber !== selected){
                //not every email is selected
                toggle(folder, true); //select every email
            }
            else{
                //every email is selected
                toggle(folder, false);//deselect every email
            };
        },
        toggleSingleEmailSelected: (state, action) =>{
            //toggle if one specific email is selected or deselected
            const {folder, id, previousState} = action.payload;
            state.folders[folder].emails.forEach (email => {
                if(email.id === id){
                    email.selected = !previousState;
                }
            })
        }
    }
})

export const { updateMailFolder, setCurrentOpenFolder, toggleMobileSidebar, toggleAllEmailSelected, toggleSingleEmailSelected } = mailSlice.actions;

export default mailSlice;