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
                    id: 1,
                    time: '06:10',
                    subject: "Unfortunately, your credit card application was declined.",
                    content: "Mr. John Doe, we are sorry to inform you that your application for a credit card was unsuccessful.",
                    read: false,
                    selected: false
                }
                ,
                {
                    sender: {
                        name: 'FNB South Africa',
                        email: 'support@fnb.co.za',
                        logo: ""
                    },
                    id: 2,
                    time: '06:20',
                    subject: "Transaction Declined",
                    content: "Mr. Doe, a transaction on card ending with ...55 was declined as there are insufficient funds in your bank account.",
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
                    id: 3,
                    time: '06:30',
                    subject: "John Doe, do you need a new home?",
                    content: "Hie John Doe. Do you know that you qualify for a home loan? Login to your account to see the latest offers.",
                    read: false,
                    selected: false
                },
                {
                    sender: {
                        name: 'ClearScore',
                        email: 'em@clearscore.co.za',
                        logo: ""
                    },
                    id: 4,
                    time: '06:35',
                    subject: "You new report is now available",
                    content: "Mr. John Doe, please login to view your new credit report. It is available on your account dashboard",
                    read: false,
                    selected: false
                },
                {
                    sender: {
                        name: 'TFG',
                        email: 'accounts@tfg.co.za',
                        logo: ""
                    },
                    id: 5,
                    time: '06:45',
                    subject: "Free Clothing Voucher For You",
                    content: "Mr. Doe, we've decided to give you a R500 off clothing voucher to spend at any of our stores nationwide.",
                    read: false,
                    selected: false
                },
                {
                    sender: {
                        name: 'TFG',
                        email: 'accounts@tfg.co.za',
                        logo: ""
                    },
                    id: 6,
                    time: '06:50',
                    subject: "50% Off Tech Sale Now On",
                    content: "Mr. Doe, check out out latest cellphone and laptop contract deals. All cellphones and laptops are currently 50% off until the end of April.",
                    read: false,
                    selected: false
                },
                {
                    sender: {
                        name: 'Mr. Price',
                        email: 'accounts@mrp.co.za',
                        logo: ""
                    },
                    id: 7,
                    time: '06:56',
                    subject: "RE: Can I get a refund for order#559993?",
                    content: "Mr. John Doe, please send us your proof of purchase along with pictures of your items so that we may process your refund.",
                    read: false,
                    selected: false
                },
                {
                    sender: {
                        name: 'Rick Sanchez',
                        email: 'rick.sanchez@suckit.co.za',
                        logo: ""
                    },
                    id: 8,
                    time: '07:05',
                    subject: "You son of a bitch, I'm in",
                    content: "It's pickle Rick you son of a bitch and you can count me in.",
                    read: false,
                    selected: false
                },
                {
                    sender: {
                        name: 'OnlyFans',
                        email: 'support@OnlyFans.com',
                        logo: ""
                    },
                    id: 9,
                    time: '06:56',
                    subject: "Free Trial Ending On the 30th of April",
                    content: "Mr. Doe, we just wanted to remind you that your free OnlyFans trial will be ending on the 30th of April.",
                    read: false,
                    selected: false
                },
                {
                    sender: {
                        name: 'Pastor Pluto',
                        email: 'Future@pluto.com',
                        logo: ""
                    },
                    id: 10,
                    time: '06:56',
                    subject: "She's for the streets, You can not save her",
                    content: "It's Pastor Pluto and I just wanted to remind the congregation that she is for the streets and you can not save her.",
                    read: false,
                    selected: false
                },
                {
                    sender: {
                        name: 'Pooh Shiesty',
                        email: 'pooh.shiesty@1017.com',
                        logo: ""
                    },
                    id: 11,
                    time: '06:56',
                    subject: "Free me, I'm a slime",
                    content: "Stop playin with my name before I buy one of you for sale ass niggas. I was 21 up 8 figures Jay Z can't even relate.",
                    read: false,
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
            const {folder, toggleValue=null} = action.payload;
            //if toggleValue is false, all emails will be unselected,
            //if toggleValue is true all emails will be selected
            const { totalNumber, selected} = state.folders[folder];
            //function that loops through emails array and sets selected to a particular value
            const toggle = (folder, newValue) => {
                state.folders[folder].emails.forEach( email => {
                    email.selected = newValue;
                } )
            }
            if(toggleValue !== null){
                toggle(folder, toggleValue);
            }
            else if(toggleValue === null){
                //if toggle value is not passed in
                if(totalNumber !== selected){
                    //not every email is selected
                    toggle(folder, true); //select every email
                }
                else{
                    //every email is selected
                    toggle(folder, false);//deselect every email
                };
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
        },
        ViewEmail: (state, action) => {
            const {email} = action.payload;
            return {...state, emailViewer: {...state.emailViewer, currentlyOpenEmail: email}};
        },
        ClearEmailViewer: (state, action) => {
            return {...state, emailViewer: {...state.emailViewer, currentlyOpenEmail: null}};
        }
    }
})

export const { updateMailFolder, setCurrentOpenFolder, toggleMobileSidebar, toggleAllEmailSelected, toggleSingleEmailSelected, ViewEmail, ClearEmailViewer } = mailSlice.actions;

export default mailSlice;