import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: "John",
    lastName: "Doe",
    emailAddress: "JohnDoe@email-client.com"
};

const userSlice = createSlice({
    name: "user",
    initialState
})

export default userSlice;