import conf from '../conf/conf';
import { Client, ID, Databases } from 'appwrite';

export class Service{
    client = new Client();
    databases;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
    }
    async createUserProfile(userId, { name, bio, location }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                userId,
                {
                    name,
                    bio,
                    location,
                    userID: userId
                }
            );
        } catch (error) {
            console.error('Error creating user profile:', error);
            throw error;
        }
    }

    async updateUserProfile(userId, { name, bio, location }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                userId,
                {
                    name,
                    bio,
                    location
                }
            );
        } catch (error) {
            console.error('Error updating user profile:', error);
            throw error;
        }
    }

    async getUserProfile(userId) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                userId
            );
        } catch (error) {
            console.error('Error getting user profile:', error);
            return null;
        }
    }

    async deleteUserProfile(userId) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                userId
            );
            return true;
        } catch (error) {
            console.error('Error deleting user profile:', error);
            return false;        }
    }
}

const service = new Service();
export default service;