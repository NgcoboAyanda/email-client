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
            emails:[
                {
                    sender: {
                        name: 'eBay',
                        email: 'support@ebay.com',
                        logo: ""
                    },  
                    id: 12,
                    time: '08:16',
                    subject: "Was R2500 now R2000- check it out",
                    content: "Because you viewed this item, you've been given a special offer. You've been offered a 25% discount.",
                    read: false,
                    selected: false
                }
                ,
                {
                    sender: {
                        name: 'Github',
                        email: 'support@github.com',
                        logo: ""
                    },
                    id: 13,
                    time: '08:35',
                    subject: "[JohnDoe/project] Github Pages Now Active",
                    content: "Github pages for project is now live. You can view your project at https://localhost:8000.",
                    read: false,
                    selected: false
                }
                ,
                {
                    sender: {
                        name: 'Imgur',
                        email: 'support@imgur.com',
                        logo: ""
                    },
                    id: 14,
                    time: '08:35',
                    subject: "Updates to Imgur's Terms of Service",
                    content: "We wanted to reach out to let you know that we are updating our terms and conditions.",
                    read: false,
                    selected: false
                },
                {
                    sender: {
                        name: 'Bolt South Africa',
                        email: 'bheki@bolt.co.za',
                        logo: ""
                    },
                    id: 15,
                    time: '08:48',
                    subject: "[16] Your Bolt trip on Friday",
                    content: "Thanks for riding with us John Doe. Your ride was R30.00.",
                    read: false,
                    selected: false
                },
                {
                    sender: {
                        name: 'Samsung Cloud',
                        email: 'cloud@samsung.com',
                        logo: ""
                    },
                    id: 16,
                    time: '08:55',
                    subject: "Notice of Music/Documents feature deletion",
                    content: "Good day Samsung Cloud user. We wanted to inform you about the termination of the music/documents feature on Samsung Cloud.",
                    read: false,
                    selected: false
                },
                {
                    sender: {
                        name: 'Vans',
                        email: 'newsletter@vans.co.za',
                        logo: ""
                    },
                    id: 17,
                    time: '09:01',
                    subject: "Tough on the inside like Breana Geering",
                    content: "To be a skateboarder you’ve got to be tough. You’ve got to work hard, get up when you fall, and never give up. This is the stuff Vans Skate Classics are made of. Because they’re made for skateboarders. Shop the new Breana Geering Collection.",
                    read: false,
                    selected: false
                }, 
            ],
            totalNumber: 0,
            read: 0,
            unread: 0,
            selected: 0
        },
        spam: {
            emails:[
                {
                    sender: {
                        name: 'LinkedIn',
                        email: 'no-reply@linkedin.com',
                        logo: ""
                    },
                    id: 18,
                    time: '09:20',
                    subject: "People in South Africa follow these creators",
                    content: "Good day Mr. John Doe. Please login to your LinkedIn account to see the creators most South Africans are following.",
                    read: false,
                    selected: false
                },
                {
                    sender: {
                        name: 'LinkedIn',
                        email: 'no-reply@linkedin.com',
                        logo: ""
                    },
                    id: 19,
                    time: '09:22',
                    subject: "You appeared in 8 searches this week",
                    content: "Good day Mr. John Doe. You appeared in 8 searches this week.",
                    read: false,
                    selected: false
                },
                {
                    sender: {
                        name: 'LinkedIn',
                        email: 'no-reply@linked.com',
                        logo: ""
                    },
                    id: 20,
                    time: '09:33',
                    subject: "John Doe, you're getting noticed",
                    content: "Mr. John Doe your profile is looking great and your accomplishments are being recognized.",
                    read: false,
                    selected: false
                }, 
            ],
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
                },
                {
                    sender: {
                        name: 'eBay',
                        email: 'support@ebay.com',
                        logo: ""
                    },  
                    id: 12,
                    time: '08:16',
                    subject: "Was R2500 now R2000- check it out",
                    content: "Because you viewed this item, you've been given a special offer. You've been offered a 25% discount.",
                    read: false,
                    selected: false
                }
                ,
                {
                    sender: {
                        name: 'Github',
                        email: 'support@github.com',
                        logo: ""
                    },
                    id: 13,
                    time: '08:35',
                    subject: "[JohnDoe/project] Github Pages Now Active",
                    content: "Github pages for project is now live. You can view your project at https://localhost:8000.",
                    read: false,
                    selected: false
                }
                ,
                {
                    sender: {
                        name: 'Imgur',
                        email: 'support@imgur.com',
                        logo: ""
                    },
                    id: 14,
                    time: '08:35',
                    subject: "Updates to Imgur's Terms of Service",
                    content: "We wanted to reach out to let you know that we are updating our terms and conditions.",
                    read: false,
                    selected: false
                },
                {
                    sender: {
                        name: 'Bolt South Africa',
                        email: 'bheki@bolt.co.za',
                        logo: ""
                    },
                    id: 15,
                    time: '08:48',
                    subject: "[16] Your Bolt trip on Friday",
                    content: "Thanks for riding with us John Doe. Your ride was R30.00.",
                    read: false,
                    selected: false
                },
                {
                    sender: {
                        name: 'Samsung Cloud',
                        email: 'cloud@samsung.com',
                        logo: ""
                    },
                    id: 16,
                    time: '08:55',
                    subject: "Notice of Music/Documents feature deletion",
                    content: "Good day Samsung Cloud user. We wanted to inform you about the termination of the music/documents feature on Samsung Cloud.",
                    read: false,
                    selected: false
                },
                {
                    sender: {
                        name: 'Vans',
                        email: 'newsletter@vans.co.za',
                        logo: ""
                    },
                    id: 17,
                    time: '09:01',
                    subject: "Tough on the inside like Breana Geering",
                    content: "To be a skateboarder you’ve got to be tough. You’ve got to work hard, get up when you fall, and never give up. This is the stuff Vans Skate Classics are made of. Because they’re made for skateboarders. Shop the new Breana Geering Collection.",
                    read: false,
                    selected: false
                },
                {
                    sender: {
                        name: 'LinkedIn',
                        email: 'no-reply@linkedin.com',
                        logo: ""
                    },
                    id: 18,
                    time: '09:20',
                    subject: "People in South Africa follow these creators",
                    content: "Good day Mr. John Doe. Please login to your LinkedIn account to see the creators most South Africans are following.",
                    read: false,
                    selected: false
                },
                {
                    sender: {
                        name: 'LinkedIn',
                        email: 'no-reply@linkedin.com',
                        logo: ""
                    },
                    id: 19,
                    time: '09:22',
                    subject: "You appeared in 8 searches this week",
                    content: "Good day Mr. John Doe. You appeared in 8 searches this week.",
                    read: false,
                    selected: false
                },
                {
                    sender: {
                        name: 'LinkedIn',
                        email: 'no-reply@linked.com',
                        logo: ""
                    },
                    id: 20,
                    time: '09:33',
                    subject: "John Doe, you're getting noticed",
                    content: "Mr. John Doe your profile is looking great and your accomplishments are being recognized.",
                    read: false,
                    selected: false
                },
            ],
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
        },
        markAsRead: (state, action) => {
            const { emailid } = action.payload;
            state.folders[state.currentOpenFolder].emails.forEach(email => {
                if(email.id === emailid){
                    email.read = true;
                }
            })
        },
        toggleRead: (state, action) => {
            //emailids is an array containing ids of all emails that are currently selected
            const { emailids } = action.payload;
            if(emailids.length === 1){
                //if it's only one email we want to toggle the read status
                state.folders[state.currentOpenFolder].emails.forEach(email => {
                    if(email.id === emailids[0]){
                        email.read =!email.read;
                    }
                })
            }
            else if(emailids.length > 1){
                //if it's more than one email we want to check if all emails are read, if so we want to set the read status to false
                //if there is even a single email that is unread, we want to set the read status of all emails to read
                let selectedEmails = emailids.length;
                let unreadEmails = 0;
                state.folders[state.currentOpenFolder].emails.forEach( email => {
                    if(emailids.includes(email.id)){
                        if(!email.read){
                            unreadEmails++;
                        }
                    }
                } );
                if(unreadEmails > 0){
                    //if there is a single email that is unread, we want to set all emails read status to false
                    state.folders[state.currentOpenFolder].emails.forEach( email =>{
                        if(emailids.includes(email.id)){
                            email.read = true;
                        }
                    });
                }
                else if(unreadEmails === 0){
                    //if all emails have been read, we want to set all emails read status to false
                    state.folders[state.currentOpenFolder].emails.forEach( email =>{
                        if(emailids.includes(email.id)){
                            email.read = false;
                        }
                    });
                }
            }
        },
        removeEmailFrom: (state, action) => {
            const {folder, id} = action.payload;
            let emailsCopy = [...state.folders[folder].emails]
            emailsCopy = emailsCopy.filter( (email) => email.id !== id);
            state.folders[folder].emails = emailsCopy;
        },
        moveEmailTo: (state, action) => {
            const {newFolder} = action.payload;
            let emailsGoingToNewFolder = [];
            //the current folder emails
            let currentFolderEmails = [...state.folders[state.currentOpenFolder].emails];
            currentFolderEmails.forEach(email => {
                if(email.selected){
                    //save the email in emailsGoingToNewFolder but set selected to false
                    emailsGoingToNewFolder.push({...email, selected: false});
                    //remove all from current folder
                    currentFolderEmails = currentFolderEmails.filter(e => e.id !== email.id);
                }
            });
            //
            state.folders[state.currentOpenFolder].emails = currentFolderEmails;
            //adding all new new emails to folder
            emailsGoingToNewFolder.forEach(email => {
                state.folders[newFolder].emails.push(email);
            });
        }
    }
})

export const { updateMailFolder, setCurrentOpenFolder, toggleMobileSidebar, toggleAllEmailSelected, toggleSingleEmailSelected, ViewEmail, ClearEmailViewer, toggleRead, markAsRead, moveEmailTo } = mailSlice.actions;

export default mailSlice;