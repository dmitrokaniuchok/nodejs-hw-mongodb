import { Contact } from '../models/contact.js';

export async function getAllContacts() {
  const contacts = await Contact.find();
  return contacts;
}

export async function getContactById(contactId) {
  const contact = await Contact.findById(contactId);
  return contact;
}

export async function createContact(contactData) {
  const newContact = await Contact.create(contactData);
  return newContact;
}

export async function updateContact(contactId, updateData) {
  const updatedContact = await Contact.findByIdAndUpdate(
    contactId,
    updateData,
    {
      new: true,
    },
  );
  return updatedContact;
}

export async function deleteContact(contactId) {
  const deletedContact = await Contact.findByIdAndDelete(contactId);
  return deletedContact;
}
