// still need to work on this file

const asyncHandler = require('express-async-handler');
//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Get all contacts"});
});

//@desc Create new contact
//@route POST /api/contacts
//@access Public
const createContact = asyncHandler(async (req, res) => {
    console.log("The request body")
    res.status(200).json({message: "Create Contact"});
});

//@desc Get single contact
//@route GET /api/contacts/:id
//@access Public
const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Get contact for ${req.params.id}`});
});

//@desc Update contact
//@route PUT /api/contacts/:id
//@access Public
const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update contact for ${req.params.id}`});
});

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete contact for ${req.params.id}`});
});

module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};